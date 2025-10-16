import { ImageBanner, TitleBanner, CategBanner } from "./styles";

type Props = {
    restaurant: Restaurant
}

const Hero = ({ restaurant }: Props) => (
    <ImageBanner style={{ backgroundImage: `url(${restaurant.capa})` }}>
        <div className="container">
            <CategBanner>
                {restaurant.tipo}
            </CategBanner>
            <TitleBanner>
                {restaurant.titulo}
            </TitleBanner>
        </div>
    </ImageBanner>
);

export default Hero;