import { Link } from "react-router-dom";

import { ImageOne, ImageBanner, TitleOne, Image, Title, TitleBanner, CategBanner } from "./styles";

import bgItal from '../../assets/images/fundo-ital.png'
import bg from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

const HeaderOne = () => (
    <ImageOne style={{ backgroundImage: `url(${bg})` }}>
        <div className="container">
            <img src={logo} alt="Logo EFOOD" />
            <TitleOne>
                Viva experiências gastronômicas <br />
                no conforto da sua casa
            </TitleOne>
        </div>
    </ImageOne>
);

const Header = () => (
    <div>
        <Image style={{ backgroundImage: `url(${bg})` }}>
            <div className="container">
                <Link to="/">
                    <Title>
                        Restaurantes
                    </Title>
                </Link>
                <img src={logo} alt="Logo EFOOD" />
                <Title>
                    0 produto(s) no carrinho
                </Title>
            </div>
        </Image>
        <ImageBanner style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgItal})` }}>
            <div className="container">
                <CategBanner>
                    Italiana
                </CategBanner>
                <TitleBanner>
                    La Dolce Vita Trattoria
                </TitleBanner>
            </div>
        </ImageBanner>
    </div>
);

export { Header, HeaderOne };