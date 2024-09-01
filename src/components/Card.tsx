import { useState } from "react";
import "../styles/Card.css";
import SecondCardStyle from "../styles/CardTwo.module.css";
type Props = {
    img: string;
    title: string;
    info: string;
    className?: string;
};
function Card(props: Props) {
    return (
        <div className="playlist-container">
            <div className={props.className || "playlist"}>
                <img src={props.img} alt="Playlist Image" />
                <section>
                    <h3>{props.title}</h3>
                    <p>{props.info}</p>
                </section>
            </div>
        </div>
    );
}

export function SecondCard(props: Props) {
    return (
        <div>
            <div className={SecondCardStyle.card}>
                <img
                    className={SecondCardStyle.image}
                    src={props.img}
                    alt="Playlist Image"
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
