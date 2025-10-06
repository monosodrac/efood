import styled from "styled-components";
import { colors } from "../../styles";

export const ImageOne = styled.header`
    display: flex;
    text-align: center;
    padding: 40px 0;
    width: 100%;
    height: 384px;
    background-repeat: no-repeat;
    background-size: cover;
`

export const TitleOne = styled.h2`
    margin-top: 138px;
    font-size: 18px;
    color: ${colors.pink};
`


export const Image = styled.header`
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    
    .container {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        padding: 64px 0;

        a {
            text-decoration: none;
        }
    }

    img {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
`

export const Title = styled.h2`
    font-weight: 900;
    font-size: 18px;
    color: ${colors.pink};
    cursor: pointer;
`
