import { Link } from "react-router-dom";

import { ImageOne, TitleOne, Image, Title } from "./styles";

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
    </div>
);

export { Header, HeaderOne };