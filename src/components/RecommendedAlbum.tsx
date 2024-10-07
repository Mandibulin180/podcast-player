import Container from "./Container";
import Card from "./Card";
import RecommendedAlbumStyle from "../styles/RecommendedAlbumStyle.module.css";
import useFetchData from "../customhooks/useFetchData";

type Props = {
    classname?: string;
};

type PropsPodcast = {
    title: string;
    description: string;
    channel: { urls: { logo_image: { original: string } } };
    urls: { high_mp3: string };
    id: string;
};

const PODCAST_API = "https://api.audioboom.com/audio_clips";

function RecommendedAlbum(props: Props) {
    const data = useFetchData(PODCAST_API)
        .sort(() => 0.5 - Math.random())
        .slice(0, 5);
    return (
        <div className={props.classname}>
            <Container
                text1="Recommended Podcasts"
                profileImg="../src/assets//img/userIcon.jpg"
            >
                <div className={RecommendedAlbumStyle.contenedor}>
                    {data.map((podcast: PropsPodcast) => {
                        let podcastInfo: string = "";
                        if (podcast.description) {
                            podcastInfo =
                                podcast.description.slice(0, 60) + "... ";
                        } else {
                            podcastInfo = "No description yet";
                        }
                        return (
                            <Card
                                title={podcast.title}
                                info={podcastInfo}
                                img={podcast.channel.urls.logo_image.original}
                                key={podcast.id}
                                audioUrl={podcast.urls.high_mp3}
                            />
                        );
                    })}
                </div>
            </Container>
        </div>
    );
}

export default RecommendedAlbum;
