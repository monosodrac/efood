import styled from "styled-components";

export const ImageBanner = styled.div`
    position: relative;
    width: 100%;
    height: 280px;
    background-repeat: no-repeat;
    background-size: cover;
    padding: 24px 0 32px 0;
    object-fit: cover;

    &::after {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: #000;
        content: '';
        opacity: 0.5;
    }
    
    .container {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        z-index: 1;
    }
`

export const CategBanner = styled.h3`
    font-weight: 100;
    font-size: 32px;
    color: #fff;
`

export const TitleBanner = styled.h2`
    font-weight: 900;
    font-size: 32px;
    color: #fff;
`
