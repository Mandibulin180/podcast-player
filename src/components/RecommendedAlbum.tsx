import Container from "./Container";
import Card from "./Card";
import RecommendedAlbumStyle from "../styles/RecommendedAlbumStyle.module.css";
import useFetchData from "../customhooks/useFetchData";

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

const PODCAST_API = "https://api.audioboom.com/audio_clips";

function RecommendedAlbum(props: Props) {
    const data = useFetchData(PODCAST_API)
        .sort(() => 0.5 - Math.random())
        .slice(0, 5);
    return (
        <div className={props.classname}>
            <Container
                text1="Recommended Podcasts"
                profileImg="../src/assets//img/userIcon.jpg"
            >
                <div className={RecommendedAlbumStyle.contenedor}>
                    {data.map((podcast) => {
                        let podcastInfo: string = "";
                        if (podcast.description) {
                            podcastInfo =
                                podcast.description.slice(0, 60) + "... ";
                        } else {
                            podcastInfo = "No description yet";
                        }
                        return (
                            <Card
                                title={podcast.title}
                                info={podcastInfo}
                                img={podcast.channel.urls.logo_image.original}
                                key={podcast.id}
                                audioUrl={podcast.urls.high_mp3}
                            />
                        );
                    })}
                </div>
            </Container>
        </div>
    );
}

export default RecommendedAlbum;
