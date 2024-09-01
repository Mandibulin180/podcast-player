import Navbar from "./Header";
import ListenAgain from "./ListenAgain";
import ArtistSimilar from "./ArtisSimilar";
import SongsList from "./SongsList";
import RecommendedAlbum from "./RecommendedAlbum";
import RepBar from "./RepBar";
import homeCss from "../styles/Home.module.css";
import Form from "./Form";
import { useState } from "react";

interface TypeList {
    img: string;
    description: string;
    title: string;
    key?: number;
}

export default function Home() {
    const [playlist, setPlaylist] = useState(true);
    const [createdPlaylist, setCreatePlaylist] = useState<TypeList[]>([]);
    return (
        <div>
            <Navbar
                userimg="./src/assets//img/userIcon.jpg"
                setPlaylist={setPlaylist}
                createdPlaylist={createdPlaylist}
            />
            <div className={homeCss.content_container}>
                {playlist ? (
                    <>
                        <ListenAgain classname="list_again" />
                        <ArtistSimilar className="art_sim" />
                        <SongsList />
                        <RecommendedAlbum classname="rec_album" />
                    </>
                ) : (
                    <Form
                        createdPlaylist={createdPlaylist}
                        setCreatePlaylist={setCreatePlaylist}
                    ></Form>
                )}
            </div>
            <RepBar />
        </div>
    );
}
