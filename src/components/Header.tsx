import header from "../styles/Header.module.css";

type Props = {
    userimg: string;
};

function Navbar(props: Props) {
    return (
        <>
            <div className={header.navbar}>
                <div className={header.father_left}>
                    <div className={header.menu_dropdown}>
                        <button className={header.dropbtn}>☰</button>
                        <div className={header.menu_dropdown_content}>
                            <a href="#">Opción 1</a>
                            <a href="#">Opción 2</a>
                            <a href="#">Opción 3</a>
                        </div>
                    </div>
                    <div className={header.navbar_left}>
                        <img
                            src="https://music.youtube.com/img/on_platform_logo_dark.svg"
                            alt="Logo Youtube"
                        />
                        <div className={header.search_bar}>
                            <input type="text" placeholder="🔍Buscar..." />
                        </div>
                    </div>
                </div>
                <div className={header.user_info}>
                    <img src={props.userimg} alt="Foto de perfil" />
                </div>
            </div>
        </>
    );
}

export default Navbar;
