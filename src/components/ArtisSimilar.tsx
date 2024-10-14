import Container from "./Container";
import Card from "./Card";
import ArtisClass from "../styles/ArtistRecomended.module.css";
import { dataContext, TypeDataPodcast } from "./Home";
import { useContext } from "react";

type Props = {
    className?: string;
};

function ArtistSimilar(props: Props) {
    const data = useContext(dataContext).slice(5, 10);
    const channel = data[7];

    let channelTitle: string | undefined = "";

    if (channel === undefined) {
    } else {
        channelTitle = channel.channel?.title;
    }

    return (
        <div className={props.className}>
            <Container
                text2="SIMILAR TO"
                text1={channel === undefined ? "" : channelTitle}
                profileImg="../src/assets//img/userIcon.jpg"
            >
                <div className={ArtisClass.container}>
                    {data.map((podcast: TypeDataPodcast) => {
                        if (
                            podcast.title &&
                            podcast.channel?.title &&
                            podcast.channel.urls?.logo_image?.original
                        ) {
                            return (
                                <Card
                                    isNotReproducible={true}
                                    title={podcast.channel.title}
                                    info={podcast.channel.urls.detail}
                                    img={
                                        podcast.channel.urls.logo_image.original
                                    }
                                    key={podcast.id}
                                />
                            );
                        }
                    })}
                </div>
            </Container>
        </div>
    );
}

export default ArtistSimilar;
