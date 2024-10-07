import Container from "./Container";
import { SecondCard } from "./Card";
import SongsListStyle from "../styles/SongsList.module.css";
import useFetchData from "../customhooks/useFetchData";

const PODCAST_API = "https://api.audioboom.com/audio_clips";
function SongsList() {
    const data = useFetchData(PODCAST_API)
        .sort(() => 0.5 - Math.random())
        .slice(0, 16);
    return (
        <Container
            text1="Quick picks"
            text2="START RADIO FROM A SONG"
            profileImg="../src/assets//img/userIcon.jpg"
        >
            <div className={SongsListStyle.container}>
                {data.map((podcast) => {
                    return (
                        <SecondCard
                            key={podcast.id}
                            title={podcast.title}
                            info={podcast.channel.title}
                            img={podcast.channel.urls.logo_image.original}
                            audioUrl={podcast.urls.high_mp3}
                        />
                    );
                })}
            </div>
        </Container>
    );
}

export default SongsList;
