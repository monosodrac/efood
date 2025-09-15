import { Link } from "react-router-dom";

import Tag from "../Tag";

import {
    CardRest,
    InfosRest,
    CardInfoRest,
    TitleRest,
    DescriptionRest,
    CardMen,
    CardInfoMen,
    TitleMen,
    DescriptionMen,
} from "./styles";

import estrela from '../../assets/images/estrela.svg'

type Props = {
    title: string
    category: string
    aval?: string
    description: string
    infos?: string[]
    image: string
}

const CardRestaurant = ({
    title,
    description,
    aval,
    infos,
    image
}: Props) => (
    <CardRest>
        <img src={image} alt={title} />
        <InfosRest>
            {infos?.map((info) => (
                <Tag key={info}>{info}</Tag>
            ))}
        </InfosRest>
        <CardInfoRest>
            <div>
                <TitleRest>{title}</TitleRest>
                <TitleRest>
                    {aval} <img src={estrela} alt="Nota" />
                </TitleRest>
            </div>
            <DescriptionRest>{description}</DescriptionRest>
            <Link to="/categories">
                <Tag size="big">
                    Saiba mais
                </Tag>
            </Link>
        </CardInfoRest>
    </CardRest>
);

const CardMenu = ({
    title,
    description,
    image
}: Props) => (
    <CardMen>
        <img src={image} alt={title} />
        <CardInfoMen>
            <TitleMen>{title}</TitleMen>
            <DescriptionMen>{description}</DescriptionMen>
            <Link to="/categories">
                Adicionar ao carrinho
            </Link>
        </CardInfoMen>
    </CardMen>
);

export { CardRestaurant, CardMenu };