import Container from "./Container";
import { SecondCard } from "./Card";
import SongsListStyle from "../styles/SongsList.module.css";

const PLAYLIST = [
    {
        title: "Earthquake",
        info: "Tyler, The Creator • Álbum",
        img: "src/assets/img/igor.jfif",
        id: "Earthquake",
    },
    {
        title: "Fantasma",
        info: "Gustavo Cerati • Álbum",
        img: "src/assets/img/siempreeshoy.jfif",
        id: "Fantasma",
    },
    {
        title: "Mimos son mimos",
        info: "Babasonicos • Álbum",
        img: "src/assets/img/trinchera.png",
        id: "Mimos-son-mimos",
    },
    {
        title: "TUUUYO",
        info: "YSY A, Bhavi • Álbum",
        img: "src/assets/img/tuduofav.jfif",
        id: "TUUUYO",
    },
    {
        title: "Doomsday",
        info: "MF DOOM • Álbum",
        img: "src/assets/img/doomsday.jfif",
        id: "Doomsday",
    },
    {
        title: "Lithonia",
        info: "Childish Gambino • Álbum",
        img: "src/assets/img/lithonia.jfif",
        id: "Lithonia",
    },
    {
        title: "Beautiful",
        info: "Gustavo Careti • Álbum",
        img: "src/assets/img/bocanada.jfif",
        id: "Beautiful",
    },
    {
        title: "EL ÚNICO",
        info: "CA7TRIEL & Paco Amoroso • Álbum",
        img: "src/assets/img/bañomaria.jfif",
        id: "El-unico",
    },
    {
        title: "Amor Loco",
        info: "mmanuel Horvilleur, Zoe Gotusso • Álbum",
        img: "src/assets/img/pitada.jfif",
        id: "amor-loco",
    },
    {
        title: "From The Start",
        info: "Laufey • Álbum",
        img: "src/assets/img/fromthestart.jfif",
        id: "fromthestart",
    },
    {
        title: "Not Like Us",
        info: "Kendrick Lamar • Álbum",
        img: "src/assets/img/notlikeus.jfif",
        id: "not-like-us",
    },
    {
        title: "Duvet",
        info: "Bôa • Álbum",
        img: "src/assets/img/Duvet.jfif",
        id: "Duvet",
    },
    {
        title: "Cigarettes out the Window",
        info: "TV Girl • Álbum",
        img: "src/assets/img/cigarettes.jfif",
        id: "Cigarettes-out-the-Window",
    },
    {
        title: "Todo de Oro",
        info: "YSY A • Sencillo",
        img: "src/assets/img/todooro.jfif",
        id: "todo-de-oro",
    },
    {
        title: "Fvck Luv",
        info: "Duki C.R.O • Álbum",
        img: "src/assets/img/fucklove.jfif",
        id: "Fvck-luv",
    },
    {
        title: "A Estos Hombres Tristes",
        info: "Almendra • Álbum",
        img: "src/assets/img/hombrestristes.jfif",
        id: "A-Estos-Hombres-Tristes",
    },
];
function SongsList() {
    return (
        <Container
            text1="Quick picks"
            text2="START RADIO FROM A SONG"
            profileImg="../src/assets//img/userIcon.jpg"
        >
            <div className={SongsListStyle.container}>
                {PLAYLIST.map((song) => {
                    return (
                        <SecondCard
                            key={song.id}
                            title={song.title}
                            info={song.info}
                            img={song.img}
                        />
                    );
                })}
            </div>
        </Container>
    );
}

export default SongsList;
