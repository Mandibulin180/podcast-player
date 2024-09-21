import header from "../styles/Header.module.css";
import Sidebar from "./SideBar";
import React, { useState } from "react";

type Props = {
    userimg: string;
    setPlaylist: React.Dispatch<React.SetStateAction<boolean>>;
    createdPlaylist: [
        { img: string; title: string; description: string; key?: number }
    ];
};

const Navbar: React.FC<Props> = (props) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <div>
            <div className={header.navbar}>
                <div className={header.father_left}>
                    <button
                        onClick={() => {
                            toggleSidebar();
                        }}
                    >
                        ☰
                    </button>
                    <div className={header.navbar_left}>
                        <button
                            onClick={() => {
                                props.setPlaylist(true);
                            }}
                        >
                            <img
                                src="https://music.youtube.com/img/on_platform_logo_dark.svg"
                                alt="Logo Youtube"
                            />
                        </button>
                    </div>
                    <div className={header.search_bar}>
                        <input type="text" placeholder="🔍Buscar..." />
                    </div>
                </div>
                <div className={header.user_info}>
                    <img src={props.userimg} alt="Foto de perfil" />
                </div>
            </div>
            <div className={sidebarVisible ? header.sidebarVisible : ""}>
                <Sidebar
                    setPlaylist={props.setPlaylist}
                    isVisible={sidebarVisible}
                    createdPlaylist={props.createdPlaylist}
                />
            </div>
        </div>
    );
};

export default Navbar;
