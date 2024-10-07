import Container from "./Container";
import Card from "./Card";
import ListenAgainStyle from "../styles/ListenAgain.module.css";
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

function ListenAgain(props: Props) {
    const data = useFetchData(PODCAST_API)
        .sort(() => 0.5 - Math.random())
        .slice(0, 5);

    return (
        <div className={props.classname}>
            <Container
                text1="Listen Again"
                text2="Gonzalo Delgado"
                profileImg="../src/assets//img/userIcon.jpg"
            >
                <div className={ListenAgainStyle.contenedor}>
                    {data.map((podcast: PropsPodcast) => {
                        let podcastInfo: string = "";
                        if (podcast.description) {
                            podcastInfo =
                                podcast.description.slice(0, 100) + "... ";
                        }
                        return (
                            <Card
                                title={podcast.title}
                                img={podcast.channel.urls.logo_image.original}
                                info={podcastInfo}
                                audioUrl={podcast.urls.high_mp3}
                                key={podcast.id}
                            />
                        );
                    })}
                </div>
            </Container>
        </div>
    );
}

export default ListenAgain;
