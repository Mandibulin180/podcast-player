import RepBarStyle from "../styles/RepBar.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { SecondCard } from "./Card";
function RepBar() {
    return (
        <nav className={RepBarStyle.navbar}>
            <div className={RepBarStyle.buttons}>
                <button>
                    <i className="fa-solid fa-backward-step"></i>
                </button>
                <button>
                    <i className="fa-solid fa-play"></i>
                </button>
                <button>
                    <i className="fa-solid fa-forward-step"></i>
                </button>
            </div>
            <div className={RepBarStyle.current_song}>
                <SecondCard
                    img="src/assets/img/igor.jfif"
                    title="I DON'T LOVE YOU ANYMORE"
                    info="Tyler, The Creator"
                ></SecondCard>
            </div>
            <div className={RepBarStyle.icons}>
                <button className={RepBarStyle.iconButton}>
                    <i className="fa fa-thumbs-up"></i>
                </button>
                <button className={RepBarStyle.iconButton}>
                    <i className="fa fa-thumbs-down"></i>
                </button>
                <button className={RepBarStyle.iconButton}>
                    <i className="fa fa-ellipsis-h"></i>
                </button>
            </div>
            <div>
                <button className={RepBarStyle.iconButton}>
                    <i className="fa-solid fa-repeat"></i>
                </button>
                <button className={RepBarStyle.iconButton}>
                    <i className="fa-solid fa-volume-low">
                        <input type="range" min="0" max="100" />
                    </i>
                </button>
            </div>
        </nav>
    );
}

export default RepBar;
