import RepBarStyle from "../styles/RepBar.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { SecondCard } from "./Card";
import { useAudioContext } from "./Home";
import { useState } from "react";
function RepBar() {
    const {
        actualPodcastRef,
        actualPodcast,
        isPlayingPodcast,
        setIsPlayingPodcast,
        setProgress,
        progress,
        duration,
    } = useAudioContext();

    const [isplaying, setIsPLaying] = useState(isPlayingPodcast);

    function handleProgressChange(e: React.ChangeEvent<HTMLInputElement>) {
        if (actualPodcastRef) {
            const newTime =
                (parseFloat(e.target.value) / 100) *
                (actualPodcastRef.current?.duration || 0);
            if (actualPodcastRef.current) {
                actualPodcastRef.current.currentTime = newTime;
                setProgress(parseFloat(e.target.value));
            }
        }
    }

    function handlePlay() {
        if (actualPodcastRef) {
            actualPodcastRef.current?.play();
            setIsPlayingPodcast(true);
        }
    }

    function handlePause() {
        if (actualPodcastRef) {
            actualPodcastRef.current?.pause();
        }
    }

    function handleQuit() {
        if (actualPodcastRef?.current) {
            setIsPlayingPodcast(!isPlayingPodcast);
            actualPodcastRef.current?.pause();
            actualPodcastRef.current.currentTime = 0;
        }
    }

    return (
        <>
            {isPlayingPodcast ? (
                <>
                    <nav className={RepBarStyle.navbar}>
                        <div className={RepBarStyle.timeSection}>
                            <input
                                className={RepBarStyle.durationBar}
                                type="range"
                                min="0"
                                max={duration}
                                value={progress}
                                onChange={handleProgressChange}
                            />
                            <p>
                                {(progress / 60).toFixed(2)} :
                                {(duration / 60).toFixed(2)}
                            </p>
                        </div>
                        <div className={RepBarStyle.current_song}>
                            {!isplaying ? (
                                <button
                                    onClick={() => {
                                        handlePause();
                                        setIsPLaying(!isplaying);
                                    }}
                                >
                                    <i className="fa-solid fa-pause"></i>
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        handlePlay();
                                        setIsPLaying(!isPlayingPodcast);
                                    }}
                                >
                                    <i className="fa-solid fa-play"></i>
                                </button>
                            )}

                            <SecondCard
                                img={actualPodcast.img}
                                title={actualPodcast.title}
                                isNotReproducible={true}
                            ></SecondCard>
                        </div>
                        <div>
                            <button
                                className={RepBarStyle.quit}
                                onClick={() => {
                                    handleQuit();
                                    setIsPLaying(false);
                                }}
                            >
                                X
                            </button>
                        </div>
                    </nav>
                </>
            ) : (
                ""
            )}
        </>
    );
}

export default RepBar;
