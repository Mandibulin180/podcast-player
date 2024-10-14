import { useRef, useState } from "react";

export default function useReproduce() {
    const [Visibility, setVisibility] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    function handleClick() {
        setIsPlaying(!isPlaying);

        if (isPlaying) {
            audioRef.current?.pause();
        } else {
            audioRef.current?.play();
        }
    }

    function handleVisibility() {
        setVisibility(!Visibility);
    }

    return {
        Visibility,
        isPlaying,
        audioRef,
        handleClick,
        handleVisibility,
        setIsPlaying,
    };
}
