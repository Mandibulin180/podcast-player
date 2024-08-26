import Container from "./Container";
import Card from "./Card";
import ListenAgainStyle from "../styles/ListenAgain.module.css";

const LISTENAGAIN = [
    {
        title: "Rap Argentino",
        info: "Duki, YSY A • 20 Songs",
        img: "../src/assets/img/duki.jfif",
        id: "Earthquak",
    },
    {
        title: "Cerati",
        info: "Gustavo Cerati • 30 Songs",
        img: "../src/assets/img/cerati.jfif",
        id: "Earthquake2",
    },
    {
        title: "Mix diario 1",
        info: " Tyler, Frank • 40 Songs",
        img: "../src/assets/img/tyler.jfif",
        id: "Earthquake3",
    },
    {
        title: "Mix diario 2",
        info: "Invisible, Almendra • 20 Songs",
        img: "../src/assets/img/luis.jfif",
        id: "Earthquake4",
    },
    {
        title: "Mix diario 3",
        info: "Neo ,Ysy A • 30 Songs",
        img: "../src/assets/img/YSY.jfif",
        id: "Earthquake5",
    },
];

type Props = {
    classname?: string;
};

function ListenAgain(props: Props) {
    return (
        <div className={props.classname}>
            <Container
                text1="Listen Again"
                text2="Gonzalo Delgado"
                profileImg="../src/assets//img/userIcon.jpg"
            >
                <div className={ListenAgainStyle.contenedor}>
                    {LISTENAGAIN.map((song) => {
                        return (
                            <Card
                                title={song.title}
                                info={song.info}
                                img={song.img}
                                key={song.id}
                                className={song.id}
                            />
                        );
                    })}
                </div>
            </Container>
        </div>
    );
}

export default ListenAgain;
