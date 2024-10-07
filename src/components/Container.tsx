import { ReactNode } from "react";
import CardIcon from "../styles/CardIcon.module.css";

type Props = {
    text1?: string;
    text2?: string;
    profileImg: string;
    children: ReactNode;
};
function Container(props: Props) {
    return (
        <>
            <div className={CardIcon.container}>
                <div className={CardIcon.icon}>
                    <img
                        className={CardIcon.img}
                        src={props.profileImg}
                        alt="img de perfil"
                    />
                    <div>
                        <p className={CardIcon.text2}>{props.text2}</p>
                        <p className={CardIcon.text1}>{props.text1}</p>
                    </div>
                </div>
                {props.children}
            </div>
        </>
    );
}

export default Container;
