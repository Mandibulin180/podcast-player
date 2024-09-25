import {} from "react";
import SecondCardStyle from "../styles/CardTwo.module.css";
import CardStyle from "../styles/Card.module.css";
import useReproduce from "../customhooks/useReproduce";

type Props = {
    img: string;
    title: string;
    info: string;
    audioUrl?: string;
    isNotReproducible?: boolean;
};

function Card(props: Props) {
    const { Visibility, isPlaying, audioRef, handleClick, handleVisibility } =
        useReproduce();
    return (
        <div className={CardStyle.playlist_container}>
            <div className={CardStyle.playlist}>
                {!props.isNotReproducible ? (
                    <>
                        {isPlaying ? (
                            <div className={CardStyle.image_container}>
                                <img src={props.img} alt="Playlist Image" />
                                <button
                                    onClick={handleClick}
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
                                        onClick={handleClick}
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
                <audio ref={audioRef} src={props.audioUrl} />
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
    return (
        <div>
            <div className={SecondCardStyle.card}>
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
                                onClick={handleClick}
                                className={CardStyle.img_button2}
                            >
                                <i className="fa-solid fa-play"></i>
                            </button>
                        ) : (
                            ""
                        )}
                    </div>
                )}
                <audio ref={audioRef} src={props.audioUrl} />
                <div className={SecondCardStyle.info}>
                    <h3 className={SecondCardStyle.title}>{props.title}</h3>
                    <p className={SecondCardStyle.artist}>{props.info}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
