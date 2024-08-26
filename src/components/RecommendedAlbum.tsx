import Container from "./Container";
import Card from "./Card";
import RecommendedAlbumStyle from "../styles/RecommendedAlbumStyle.module.css";

const ALBUMS = [
    {
        title: "Igor",
        info: "Álbum • Tyler, The Creator",
        img: "src/assets/img/igor.jfif",
        id: "Igor",
    },
    {
        title: "Siempre Es Hoy",
        info: "Álbum • Gustavo Cerati",
        img: "src/assets/img/siempreeshoy.jfif",
        id: "Siempre-Es-Hoy",
    },
    {
        title: "Tinchera",
        info: "Álbum • Babasonicos",
        img: "src/assets/img/trinchera.png",
        id: "Tinchera",
    },
    {
        title: "Tu Duo Favorito",
        info: "Álbum • YSY A, Bhavi",
        img: "src/assets/img/tuduofav.jfif",
        id: "Tu-Duo-Favorito",
    },
    {
        title: "Operation: Doomsday",
        info: "Álbum • MF DOOM",
        img: "src/assets/img/doomsday.jfif",
        id: "Operation-Doomsday",
    },
];

type Props = {
    classname?: string;
};
function RecommendedAlbum(props: Props) {
    return (
        <div className={props.classname}>
            <Container
                text1="Recommended Albums"
                profileImg="../src/assets//img/userIcon.jpg"
            >
                <div className={RecommendedAlbumStyle.contenedor}>
                    {ALBUMS.map((album) => {
                        return (
                            <Card
                                title={album.title}
                                info={album.info}
                                img={album.img}
                                key={album.id}
                                className={album.id}
                            />
                        );
                    })}
                </div>
            </Container>
        </div>
    );
}

export default RecommendedAlbum;
