import Container from "./Container";
import Card from "./Card";
import ArtisClass from "../styles/ArtistRecomended.module.css";

const RECOMENDEDARTIST = [
    {
        title: "Duki",
        info: "7.4M suscribers",
        img: "src/assets/img/duki.jfif",
        key: "Duki",
    },
    {
        title: "Childish Gambino",
        info: "6.72M suscribers",
        img: "src/assets/img/childish.jfif",
        key: "Childish-Gambino",
    },
    {
        title: "Mitski",
        info: "2.3M suscribers",
        img: "src/assets/img/mitski.jfif",
        key: "Mitski",
    },
    {
        title: "Arctic Monkeys",
        info: "8.34M suscribers",
        img: "src/assets/img/artic.jfif",
        key: "Arctic-Monkeys",
    },
    {
        title: "Frank Ocean",
        info: "1.77M suscribers",
        img: "src/assets/img/frank.jfif",
        key: "Frank-Ocean",
    },
];

type Props = {
    className?: string;
};

function ArtistSimilar(props: Props) {
    return (
        <div className={props.className}>
            <Container
                text2="SIMILAR TO"
                text1="Tyler, The Creator"
                profileImg="../src/assets//img/userIcon.jpg"
            >
                <div className={ArtisClass.container}>
                    {RECOMENDEDARTIST.map((album) => {
                        return (
                            <Card
                                title={album.title}
                                info={album.info}
                                img={album.img}
                                key={album.key}
                            />
                        );
                    })}
                </div>
            </Container>
        </div>
    );
}

export default ArtistSimilar;
