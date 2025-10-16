import { CardRestaurant } from '../Card';
import Loader from '../Loader';

import { Container, ListRestaurant } from './styles';

type Props = {
    restaurants?: Restaurant[]
    isLoading: boolean
};

const RestaurantsList = ({ restaurants, isLoading }: Props) => {
    const getRestaurantTags = (restaurant: Restaurant) => {
        const tags = [];

        if (restaurant.destacado) {
            tags.push('Destaque da semana');
        };
        tags.push(restaurant.tipo);

        return tags;
    };
    if (isLoading) {
        return <Loader />
    }

    return (
    <Container>
        <div className="container">
            <ListRestaurant>
                {restaurants?.map((restaurant) => (
                    <li key={restaurant.id}>
                        <CardRestaurant
                            id={restaurant.id}
                            category={restaurant.tipo}
                            description={restaurant.descricao}
                            image={restaurant.capa}
                            infos={getRestaurantTags(restaurant)}
                            aval={restaurant.avaliacao}
                            title={restaurant.titulo}
                        />
                    </li>
                ))}
            </ListRestaurant>
        </div>
    </Container>
)};

export { RestaurantsList };