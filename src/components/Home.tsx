import Navbar from "./Header";
import ListenAgain from "./ListenAgain";
import ArtistSimilar from "./ArtisSimilar";
import SongsList from "./SongsList";
import RecommendedAlbum from "./RecommendedAlbum";
import RepBar from "./RepBar";
import homeCss from "../styles/Home.module.css";
import Form from "./Form";
import { createContext, useRef, useState } from "react";

interface TypeList {
    img: string;
    description: string;
    title: string;
    key?: number;
}

export const audioContext = createContext();

export default function Home() {
    const [playlist, setPlaylist] = useState(true);
    const [createdPlaylist, setCreatePlaylist] = useState<TypeList[]>([]);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [reproduciendo, setReproduciendo] = useState(false);
    return (
        <div>
            <Navbar
                userimg="./src/assets//img/userIcon.jpg"
                setPlaylist={setPlaylist}
                createdPlaylist={createdPlaylist}
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
                        createdPlaylist={createdPlaylist}
                        setCreatePlaylist={setCreatePlaylist}
                    ></Form>
                )}
            </div>
            <RepBar />
        </div>
    );
}
