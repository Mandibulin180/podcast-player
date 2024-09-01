import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import formStyle from "../styles/Form.module.css";
import Card from "./Card";

type Props = {
    setCreatePlaylist: React.Dispatch<
        React.SetStateAction<
            {
                img: string;
                title: string;
                description: string;
                key?: number;
            }[]
        >
    >;
    createdPlaylist: [
        { img: string; title: string; description: string; key?: number }
    ];
};

export default function Form({ setCreatePlaylist, createdPlaylist }: Props) {
    const [img, setImg] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    useEffect(() => {
        // Verifica si todos los campos están llenos para habilitar el botón
        if (img.trim() && description.trim() && title.trim()) {
            setIsButtonEnabled(true);
        } else {
            setIsButtonEnabled(false);
        }
    }, [img, description, title]);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const newPlaylist = {
            img: img,
            title: title,
            description: description,
            key: createdPlaylist.length + 1,
        };

        setCreatePlaylist((prevPlaylist) => [...prevPlaylist, newPlaylist]);

        setImg("");
        setTitle("");
        setDescription("");
    }

    return (
        <div>
            <div className={formStyle.container}>
                <h3 className={formStyle.title}>Creá tu playlist</h3>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label
                                className={formStyle.label}
                                htmlFor="title-input"
                            >
                                Titulo
                            </label>
                            <input
                                className={formStyle.input}
                                type="text"
                                value={title}
                                placeholder="Titulo"
                                required
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div>
                            <label
                                className={formStyle.label}
                                htmlFor="description-input"
                            >
                                Descripción
                            </label>
                            <input
                                className={formStyle.input}
                                type="text"
                                placeholder="Descripción"
                                maxLength={250}
                                value={description}
                                required
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div>
                            <label
                                className={formStyle.label}
                                htmlFor="img-input"
                            >
                                Imagene (URL)
                            </label>
                            <input
                                className={formStyle.input}
                                type="text"
                                placeholder="Imagen (URL)"
                                value={img}
                                required
                                onChange={(e) => setImg(e.target.value)}
                            />
                        </div>
                        <button
                            disabled={!isButtonEnabled}
                            className={formStyle.button}
                            type="submit"
                        >
                            Agregar Playlist
                        </button>
                    </form>
                </div>
                <div className={formStyle.cardCont}>
                    <Card
                        className={formStyle.card}
                        img={img}
                        title={title}
                        info={description}
                    />
                </div>
            </div>
        </div>
    );
}
