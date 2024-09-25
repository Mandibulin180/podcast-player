import { useEffect, useState } from "react";

export default function useFetchData(url: string) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data.body.audio_clips);
            });
    }, []);

    return data;
}
