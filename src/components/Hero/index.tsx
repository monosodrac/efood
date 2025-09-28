import { ImageBanner, TitleBanner, CategBanner } from "./styles";

import type { Restaurant } from "../../pages/Home";

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