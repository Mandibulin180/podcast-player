import Container from "./Container";
import Card from "./Card";
import ListenAgainStyle from "../styles/ListenAgain.module.css";
import { dataContext, TypeDataPodcast, useAudioContext } from "./Home";
import { useContext } from "react";

type Props = {
    classname?: string;
};

function ListenAgain(props: Props) {
    const data = useContext(dataContext).slice(0, 5);
    const {
        actualPodcastRef,
        setActualPodcastRef,
        setActualPodcast,
        isPlayingPodcast,
        setIsPlayingPodcast,
        setProgress,
        setDuration,
    } = useAudioContext();
    return (
        <div className={props.classname}>
            <Container
                text1="Listen Again"
                text2="Gonzalo Delgado"
                profileImg="../src/assets//img/userIcon.jpg"
            >
                <div className={ListenAgainStyle.contenedor}>
                    {data.map((podcast: TypeDataPodcast) => {
                        let podcastInfo: string = "";
                        if (podcast.description) {
                            podcastInfo =
                                podcast.description.slice(0, 100) + "... ";
                        }

                        if (
                            podcast.title &&
                            podcast.channel?.urls?.logo_image &&
                            podcast.urls?.high_mp3
                        ) {
                            return (
                                <Card
                                    title={podcast.title}
                                    img={
                                        podcast.channel.urls.logo_image.original
                                    }
                                    info={podcastInfo}
                                    audioUrl={podcast.urls.high_mp3}
                                    key={podcast.id}
                                    setActualPodcast={setActualPodcast}
                                    setActualPodcastRef={setActualPodcastRef}
                                    setIsPlayingPodcast={setIsPlayingPodcast}
                                    isPlayingPodcast={isPlayingPodcast}
                                    actualPodcastRef={actualPodcastRef}
                                    setProgress={setProgress}
                                    setDuration={setDuration}
                                />
                            );
                        }
                    })}
                </div>
            </Container>
        </div>
    );
}

export default ListenAgain;
