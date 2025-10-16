import { RestaurantsList } from '../../components/CardsList';

import { HeaderOne } from '../../components/Header';

import { useGetRestaurantsQuery } from '../../services/api';

const Home = () => {
  const { data, isLoading } = useGetRestaurantsQuery();

  return (
    <>
      <HeaderOne />
      <RestaurantsList restaurants={data} isLoading={isLoading} />
    </>
  )
};

export default Home;
