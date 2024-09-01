import React, { useState } from "react";
import sideBarStyles from "../styles/SideBar.module.css";

type SidebarProps = {
    isVisible: boolean;
    setPlaylist: React.Dispatch<React.SetStateAction<boolean>>;
    createdPlaylist: [
        { img: string; title: string; description: string; key?: number }
    ];
};

function Sidebar({ isVisible, setPlaylist, createdPlaylist }: SidebarProps) {
    return (
        <div
            className={`${sideBarStyles.sidebar} ${
                isVisible ? sideBarStyles.sidebarVisible : ""
            }`}
        >
            {/* Contenido de la Sidebar */}
            <ul className={sideBarStyles.buttons}>
                <li>
                    <button>Home</button>
                </li>
                <li>
                    <button>Perfil</button>
                </li>
                <li>
                    <button>Configuración</button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            setPlaylist(false);
                        }}
                    >
                        + Nueva Playlist
                    </button>
                </li>
                {createdPlaylist.length > 0
                    ? createdPlaylist.map((playlist) => {
                          return (
                              <li>
                                  <button>
                                      <SideBarCard
                                          img={playlist.img}
                                          title={playlist.title}
                                          description={playlist.description}
                                      />
                                  </button>
                              </li>
                          );
                      })
                    : ""}
            </ul>
        </div>
    );
}

type SideBarCardProps = {
    img: string;
    title: string;
    description: string;
};

function SideBarCard({ img, title, description }: SideBarCardProps) {
    const [showDescription, setShowDescription] = useState(false);
    const truncDescription =
        description.split("").slice(0, 20).join("") + " . . .";
    return (
        <div className={sideBarStyles.playlist}>
            <img className={sideBarStyles.image} src={img} alt={title} />
            <div>
                <p className={sideBarStyles.title}>{title}</p>
                <p
                    onClick={() => {
                        setShowDescription(!showDescription);
                    }}
                    className={sideBarStyles.description}
                >
                    {truncDescription}
                </p>
                {showDescription && (
                    <div className={sideBarStyles.bubble}>{description}</div>
                )}
            </div>
        </div>
    );
}

export default Sidebar;
