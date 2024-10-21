import Container from "./Container";
import { SecondCard } from "./Card";
import SongsListStyle from "../styles/SongsList.module.css";
import { useContext } from "react";
import { dataContext, TypeDataPodcast, useAudioContext } from "./Home";

function SongsList() {
    const data = useContext(dataContext).slice(4, 20);
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
        <Container
            text1="Quick picks"
            text2="START RADIO FROM A SONG"
            profileImg="../src/assets//img/userIcon.jpg"
        >
            <div className={SongsListStyle.container}>
                {data.map((podcast: TypeDataPodcast) => {
                    if (
                        podcast.title &&
                        podcast.channel?.title &&
                        podcast.channel.urls?.logo_image?.original &&
                        podcast.urls?.high_mp3
                    ) {
                        return (
                            <SecondCard
                                key={podcast.id}
                                title={podcast.title}
                                info={podcast.channel.title}
                                img={podcast.channel.urls.logo_image.original}
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
    );
}

export default SongsList;
