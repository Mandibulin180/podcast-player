import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Header.tsx";
import RecommendedAlbum from "./components/RecommendedAlbum.tsx";
import ArtistSimilar from "./components/ArtisSimilar.tsx";
import SongsList from "./components/SongsList.tsx";
import RepBar from "./components/RepBar.tsx";
import ListenAgain from "./components/ListenAgain.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Navbar userimg="./src/assets//img/userIcon.jpg" />
        <div className="content-container">
            <ListenAgain classname="list_again" />
            <ArtistSimilar className="art_sim" />
            <SongsList />
            <RecommendedAlbum classname="rec_album" />
        </div>
        <RepBar />
    </StrictMode>
);
