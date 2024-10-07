import Container from "./Container";
import Card from "./Card";
import ArtisClass from "../styles/ArtistRecomended.module.css";
import useFetchData from "../customhooks/useFetchData";

type Props = {
    className?: string;
};

type PropsPodcast = {
    channel: {
        urls: {
            detail: string;
            logo_image: { original: string };
        };
        title: string;
    };
    urls: { high_mp3: string };
    id: string;
};

type PropsChannel = {
    channel: {
        title: string;
    };
};

const PODCAST_API = "https://api.audioboom.com/audio_clips";

function ArtistSimilar(props: Props) {
    const data = useFetchData(PODCAST_API)
        .sort(() => 0.5 - Math.random())
        .slice(0, 6);

    const channel = data.pop();

    let channelTitle: string = "";

    if (channel === undefined) {
    } else {
        const channelExist: PropsChannel = channel;
        channelTitle = channelExist.channel.title;
    }

    return (
        <div className={props.className}>
            <Container
                text2="SIMILAR TO"
                text1={channel === undefined ? "" : channelTitle}
                profileImg="../src/assets//img/userIcon.jpg"
            >
                <div className={ArtisClass.container}>
                    {data.map((podcast: PropsPodcast) => {
                        return (
                            <Card
                                isNotReproducible={true}
                                title={podcast.channel.title}
                                info={podcast.channel.urls.detail}
                                img={podcast.channel.urls.logo_image.original}
                                key={podcast.id}
                            />
                        );
                    })}
                </div>
            </Container>
        </div>
    );
}

export default ArtistSimilar;
