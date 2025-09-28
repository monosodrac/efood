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
    id: number
    title: string
    category: string
    aval?: number
    description: string
    infos?: string[]
    image: string
}

const CardRestaurant = ({
    id,
    title,
    description,
    aval,
    infos,
    image
}: Props) => {
    const getDescricao = (descricao: string) => {
        if (descricao.length > 253) {
            return descricao.slice(0, 250) + '...';
        };
        return descricao
    };

    return (
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
            <DescriptionRest title={description}>{getDescricao(description)}</DescriptionRest>
            <Link to={`/products/${id}`}>
                <Tag size="big">
                    Saiba mais
                </Tag>
            </Link>
        </CardInfoRest>
    </CardRest>
)};

// const CardMenu = ({
//     title,
//     description,
//     image
// }: Props) => (
//     <CardMen>
//         <img src={image} alt={title} />
//         <CardInfoMen>
//             <TitleMen>{title}</TitleMen>
//             <DescriptionMen>{description}</DescriptionMen>
//             <Link to="/categories">
//                 Adicionar ao carrinho
//             </Link>
//         </CardInfoMen>
//     </CardMen>
// );

export { CardRestaurant };