import Image, {StaticImageData} from "next/image";
import aliveStatus from "public/statuses/alive.png";
import {CharacterStatusType} from "assets/api/rick-and-morty-api";

type Props = {
    status: CharacterStatusType
    src: StaticImageData
}

export const Status = ({src, status}: Props) => {
    return (
        <Image src={src} alt={''} width={20} height={20}/>
    )
}