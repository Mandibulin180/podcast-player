import Navbar from "./Header";
import ListenAgain from "./ListenAgain";
import ArtistSimilar from "./ArtisSimilar";
import SongsList from "./SongsList";
import RecommendedAlbum from "./RecommendedAlbum";
import RepBar from "./RepBar";
import homeCss from "../styles/Home.module.css";
import Form from "./Form";
import { createContext, useContext, useState } from "react";
import useFetchData from "../customhooks/useFetchData";

export interface TypeList {
    img: string;
    title: string;
    description: string;
    key?: number | undefined;
}

export interface TypePodcast {
    img: string | undefined;
    title: string;
}

export interface TypeAudioContext {
    actualPodcast: TypePodcast;
    setActualPodcast: React.Dispatch<React.SetStateAction<TypePodcast>>;
    actualPodcastRef: React.RefObject<HTMLAudioElement> | null;
    setActualPodcastRef: React.Dispatch<
        React.SetStateAction<React.RefObject<HTMLAudioElement> | null>
    >;
    isPlayingPodcast: boolean;
    setIsPlayingPodcast: React.Dispatch<React.SetStateAction<boolean>>;
    progress: number;
    setProgress: React.Dispatch<React.SetStateAction<number>>;
    duration: number;
    setDuration: React.Dispatch<React.SetStateAction<number>>;
}

export interface TypeDataPodcast {
    title?: string;
    description?: string;
    channel?: {
        title?: string;
        urls?: {
            detail?: string;
            logo_image?: { original?: string };
        };
    };
    urls?: { high_mp3?: string };
    id?: string;
}

export const audioContext = createContext<TypeAudioContext | undefined>(
    undefined
);

export const dataContext = createContext<TypeDataPodcast[]>([]);

export function useAudioContext() {
    const context = useContext(audioContext);

    if (!context) {
        throw new Error("useAudioContext must be used within an AudioProvider");
    }

    return context;
}

export default function Home() {
    const [playlist, setPlaylist] = useState(true);
    const [createdPlaylists, setCreatePlaylist] = useState<TypeList[]>([]);
    const [isPlayingPodcast, setIsPlayingPodcast] = useState(false);
    const [actualPodcastRef, setActualPodcastRef] =
        useState<React.RefObject<HTMLAudioElement> | null>(null);
    const [actualPodcast, setActualPodcast] = useState<TypePodcast>({
        img: "",
        title: "",
    }); // Puedo combinar estos dos estados pero voy a hacerlo más tarde
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    const data = useFetchData();
    return (
        <div>
            <Navbar
                userimg="./src/assets//img/userIcon.jpg"
                setPlaylist={setPlaylist}
                createdPlaylist={createdPlaylists}
            />
            <audioContext.Provider
                value={{
                    actualPodcast,
                    setActualPodcast,
                    actualPodcastRef,
                    setActualPodcastRef,
                    isPlayingPodcast,
                    setIsPlayingPodcast,
                    setProgress,
                    progress,
                    duration,
                    setDuration,
                }}
            >
                <div className={homeCss.content_container}>
                    {playlist ? (
                        <dataContext.Provider value={data}>
                            <ListenAgain />
                            <ArtistSimilar />
                            <SongsList />
                            <RecommendedAlbum />
                        </dataContext.Provider>
                    ) : (
                        <Form
                            createdPlaylist={createdPlaylists}
                            setCreatePlaylist={setCreatePlaylist}
                        ></Form>
                    )}
                </div>
                <RepBar />
            </audioContext.Provider>
        </div>
    );
}
