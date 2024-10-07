import Navbar from "./Header";
import ListenAgain from "./ListenAgain";
import ArtistSimilar from "./ArtisSimilar";
import SongsList from "./SongsList";
import RecommendedAlbum from "./RecommendedAlbum";
import RepBar from "./RepBar";
import homeCss from "../styles/Home.module.css";
import Form from "./Form";
import { createContext, useState } from "react";

export interface TypeList {
    img: string;
    title: string;
    description: string;
    key?: number | undefined;
}

export const audioContext = createContext({});

export default function Home() {
    const [playlist, setPlaylist] = useState(true);
    const [createdPlaylists, setCreatePlaylist] = useState<TypeList[]>([]);
    const [reproduciendo, setReproduciendo] = useState(false);
    return (
        <div>
            <Navbar
                userimg="./src/assets//img/userIcon.jpg"
                setPlaylist={setPlaylist}
                createdPlaylist={createdPlaylists}
            />
            <div className={homeCss.content_container}>
                {playlist ? (
                    <audioContext.Provider
                        value={{ reproduciendo, setReproduciendo }}
                    >
                        <ListenAgain />
                        <ArtistSimilar />
                        <SongsList />
                        <RecommendedAlbum />
                    </audioContext.Provider>
                ) : (
                    <Form
                        createdPlaylist={createdPlaylists}
                        setCreatePlaylist={setCreatePlaylist}
                    ></Form>
                )}
            </div>
            <RepBar />
        </div>
    );
}
