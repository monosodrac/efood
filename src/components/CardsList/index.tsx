import type { Restaurant } from '../../pages/Home';
import Menu from '../../models/Menu';
import { CardRestaurant } from '../Card';

import { Container, ListRestaurant } from './styles';

type Props = {
    restaurants?: Restaurant[]
    menus?: Menu[]
};

const RestaurantsList = ({ restaurants }: Props) => {
    const getRestaurantTags = (restaurant: Restaurant) => {
        const tags = [];

        if (restaurant.destacado) {
            tags.push('Destaque da semana');
        };
        tags.push(restaurant.tipo);

        return tags;
    };

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

// const MenuList = ({ menus }: Props) => (
//     <Container>
//         <div className="container">
//             <ListMenu>
//                 {menus?.map((menu) => (
//                     <li key={menu.id}>
//                         <CardMenu
//                             id={menu.id}
//                             category={menu.category}
//                             description={menu.description}
//                             image={menu.image}
//                             title={menu.title}
//                         />
//                     </li>
//                 ))}
//             </ListMenu>
//         </div>
//     </Container>
// );

export { RestaurantsList };