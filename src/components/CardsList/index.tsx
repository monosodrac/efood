import Restaurant from '../../models/Restaurant';
import Menu from '../../models/Menu';
import { CardRestaurant, CardMenu } from '../Card';

import { Container, ListRestaurant, ListMenu } from './styles';

type Props = {
    restaurants?: Restaurant[]
    menus?: Menu[]
};

const RestaurantsList = ({ restaurants }: Props) => (
    <Container>
        <div className="container">
            <ListRestaurant>
                {restaurants?.map((restaurant) => (
                    <CardRestaurant
                        key={restaurant.id}
                        category={restaurant.category}
                        description={restaurant.description}
                        image={restaurant.image}
                        infos={restaurant.infos}
                        aval={restaurant.aval}
                        title={restaurant.title}
                    />
                ))}
            </ListRestaurant>
        </div>
    </Container>
);

const MenuList = ({ menus }: Props) => (
    <Container>
        <div className="container">
            <ListMenu>
                {menus?.map((menu) => (
                    <CardMenu
                        key={menu.id}
                        category={menu.category}
                        description={menu.description}
                        image={menu.image}
                        title={menu.title}
                    />
                ))}
            </ListMenu>
        </div>
    </Container>
);

export { RestaurantsList, MenuList };