import SecondCardStyle from "../styles/CardTwo.module.css";
import CardStyle from "../styles/Card.module.css";
import useReproduce from "../customhooks/useReproduce";
import { TypePodcast } from "./Home";
import { useEffect } from "react";

type Props = {
    img: string | undefined;
    title: string;
    info?: string;
    audioUrl?: string;
    isNotReproducible?: boolean;
    setActualPodcast?: React.Dispatch<React.SetStateAction<TypePodcast>>;
    setActualPodcastRef?: React.Dispatch<
        React.SetStateAction<React.RefObject<HTMLAudioElement> | null>
    >;
    setIsPlayingPodcast?: React.Dispatch<React.SetStateAction<boolean>>;
    isPlayingPodcast?: boolean;
    actualPodcastRef?: React.RefObject<HTMLAudioElement> | null;
    setProgress?: React.Dispatch<React.SetStateAction<number>>;
    setDuration?: React.Dispatch<React.SetStateAction<number>>;
};

function Card(props: Props) {
    const { Visibility, isPlaying, audioRef, handleClick, handleVisibility } =
        useReproduce();

    function handlExist() {
        if (
            props.setActualPodcast &&
            props.setActualPodcastRef &&
            props.setIsPlayingPodcast
        ) {
            props.setActualPodcast({
                img: props.img,
                title: props.title,
            });

            props.setActualPodcastRef(audioRef);
            props.setIsPlayingPodcast(true);
            props.setProgress?.(0);
        }
    }

    useEffect(() => {
        if (audioRef?.current) {
            const audio = audioRef.current;
            if (!audio) {
                return;
            }

            function updateProgress() {
                if (props.setProgress) {
                    if (audio.currentTime && audio.duration) {
                        props.setProgress(
                            (audio.currentTime / audio.duration) * 100
                        );
                    }
                }
            }

            audio.addEventListener("timeupdate", updateProgress);

            return () => {
                audio.removeEventListener("timeupdate", updateProgress);
            };
        }
    }, []);

    function handleLoadedMetaData() {
        if (audioRef.current) {
            if (props.setDuration) {
                props.setDuration(audioRef.current.duration);
            }
        }
    }

    return (
        <div className={CardStyle.playlist_container}>
            <div className={CardStyle.playlist}>
                {!props.isNotReproducible ? (
                    <>
                        {isPlaying ? (
                            <div className={CardStyle.image_container}>
                                <img src={props.img} alt="Playlist Image" />
                                <button
                                    onClick={() => {
                                        handleClick();
                                    }}
                                    className={CardStyle.img_button}
                                >
                                    <i className="fa-solid fa-pause"></i>
                                </button>
                            </div>
                        ) : (
                            <div
                                className={CardStyle.image_container}
                                onMouseEnter={handleVisibility}
                                onMouseLeave={handleVisibility}
                            >
                                <img src={props.img} alt="Playlist Image" />
                                {Visibility ? (
                                    <button
                                        onClick={() => {
                                            handleClick();
                                            handlExist();
                                        }}
                                        className={CardStyle.img_button}
                                    >
                                        <i className="fa-solid fa-play"></i>
                                    </button>
                                ) : (
                                    ""
                                )}
                            </div>
                        )}
                    </>
                ) : (
                    <img src={props.img} alt="Playlist Image" />
                )}
                <audio
                    ref={audioRef}
                    src={props.audioUrl}
                    onLoadedMetadata={handleLoadedMetaData}
                />
                <section>
                    <h3>{props.title}</h3>
                    <p>{props.info}</p>
                </section>
            </div>
        </div>
    );
}

export function SecondCard(props: Props) {
    const { Visibility, isPlaying, audioRef, handleClick, handleVisibility } =
        useReproduce();

    function handlExist() {
        if (
            props.setActualPodcast &&
            props.setActualPodcastRef &&
            props.setIsPlayingPodcast
        ) {
            props.setActualPodcast({
                img: props.img,
                title: props.title,
            });

            props.setActualPodcastRef(audioRef);
            props.setIsPlayingPodcast(true);
            props.setProgress?.(0);
        }
    }

    useEffect(() => {
        if (audioRef?.current) {
            const audio = audioRef?.current;
            if (!audio) {
                return;
            }
            function updateProgress() {
                if (props.setProgress) {
                    if (audio.currentTime && audio.duration) {
                        props.setProgress(audio.currentTime);
                    }
                }
            }

            audio.addEventListener("timeupdate", updateProgress);

            return () => {
                audio.removeEventListener("timeupdate", updateProgress);
            };
        }
    }, []);

    function handleLoadedMetaData() {
        if (audioRef.current) {
            if (props.setDuration) {
                props.setDuration(audioRef.current.duration);
            }
        }
    }
    return (
        <div>
            <div className={SecondCardStyle.card}>
                {!props.isNotReproducible ? (
                    <>
                        {isPlaying ? (
                            <div className={CardStyle.image_container}>
                                <img
                                    className={SecondCardStyle.image}
                                    src={props.img}
                                    alt="Playlist Image"
                                />
                                <button
                                    onClick={handleClick}
                                    className={CardStyle.img_button2}
                                >
                                    <i className="fa-solid fa-pause"></i>
                                </button>
                            </div>
                        ) : (
                            <div
                                className={CardStyle.image_container}
                                onMouseEnter={handleVisibility}
                                onMouseLeave={handleVisibility}
                            >
                                <img
                                    className={SecondCardStyle.image}
                                    src={props.img}
                                    alt="Playlist Image"
                                />
                                {Visibility ? (
                                    <button
                                        onClick={() => {
                                            handleClick();
                                            handlExist();
                                        }}
                                        className={CardStyle.img_button2}
                                    >
                                        <i className="fa-solid fa-play"></i>
                                    </button>
                                ) : (
                                    ""
                                )}
                            </div>
                        )}
                    </>
                ) : (
                    <img
                        className={SecondCardStyle.image}
                        src={props.img}
                        alt="Playlist Image"
                    />
                )}

                <audio
                    ref={audioRef}
                    src={props.audioUrl}
                    onLoadedMetadata={handleLoadedMetaData}
                />
                <div className={SecondCardStyle.info}>
                    <h3 className={SecondCardStyle.title}>{props.title}</h3>
                    <p className={SecondCardStyle.artist}>{props.info}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
