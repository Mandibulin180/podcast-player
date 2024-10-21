import Container from "./Container";
import Card from "./Card";
import RecommendedAlbumStyle from "../styles/RecommendedAlbumStyle.module.css";
import { useContext } from "react";
import { dataContext, TypeDataPodcast, useAudioContext } from "./Home";

type Props = {
    classname?: string;
};

function RecommendedAlbum(props: Props) {
    const data = useContext(dataContext).slice(11, 16);
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
                text1="Recommended Podcasts"
                profileImg="../src/assets//img/userIcon.jpg"
            >
                <div className={RecommendedAlbumStyle.contenedor}>
                    {data.map((podcast: TypeDataPodcast) => {
                        let podcastInfo: string = "";
                        if (podcast.description) {
                            podcastInfo =
                                podcast.description.slice(0, 60) + "... ";
                        } else {
                            podcastInfo = "No description yet";
                        }

                        if (
                            podcast.title &&
                            podcast.channel?.title &&
                            podcast.channel.urls?.logo_image?.original &&
                            podcast.urls?.high_mp3
                        ) {
                            return (
                                <Card
                                    title={podcast.title}
                                    info={podcastInfo}
                                    img={
                                        podcast.channel.urls.logo_image.original
                                    }
                                    key={podcast.id}
                                    audioUrl={podcast.urls.high_mp3}
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

export default RecommendedAlbum;
