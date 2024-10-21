import { useEffect, useState } from "react";

export default function useFetchData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.audioboom.com/audio_clips")
            .then((response) => response.json())
            .then((data) => {
                setData(data.body.audio_clips);
            });
    }, []);

    return data;
}
