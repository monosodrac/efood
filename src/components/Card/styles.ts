import styled from "styled-components";
import { colors } from "../../styles";
import { TagContainer } from "../Tag/styles";

// Restaurant
export const CardRest = styled.div`
    position: relative;
    width: 472px;
    min-height: 181px;
    border: 1px solid ${colors.pink};

    img {
        width: 100%;
    }

    div {
        display: flex;
        justify-content: space-between;
    }

    ${TagContainer} {
        margin-right: 8px;
    }
`

export const InfosRest = styled.div`
    position: absolute;
    top: 16px;
    right: 8px;
`

export const CardInfoRest = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px;
    font-size: 18px;
    background-color: #fff;

    a {
        align-self: flex-start;
        text-decoration: none;
    }
`

export const TitleRest = styled.h3`
    display: flex;
    column-gap: 8px;
    text-align: center;
    color: ${colors.pink};

    img {
        height: 20px;
        width: 20px;
    }

`

export const DescriptionRest = styled.p`
    margin: 16px 0;
    font-size: 14px;
    color: ${colors.pink};
`

// Menu
export const CardMen = styled.div`
    position: relative;
    padding: 8px;
    width: 320px;
    min-height: 338px;
    background-color: ${colors.pink};

    img {
        width: 100%;
    }

    div {
        display: flex;
        justify-content: space-between;
    }

    ${TagContainer} {
        margin-right: 8px;
    }
`

export const CardInfoMen = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color: ${colors.white};

    a {
        padding: 4px;
        text-align: center;
        font-weight: 700;
        background-color: ${colors.white};
        color: ${colors.pink};
        text-decoration: none;
    }
`

export const TitleMen = styled.h3`
    display: flex;
    column-gap: 8px;
    text-align: center;
    font-size: 16px;
    font-weight: 900;

    img {
        height: 20px;
        width: 20px;
    }

`

export const DescriptionMen = styled.p`
    margin: 16px 0;
    font-size: 14px;
`
