import type { JSX } from 'react/jsx-runtime';
import { RestaurantsList } from '../../components/CardsList';

import { HeaderOne } from '../../components/Header';

import { useGetRestaurantsQuery } from '../../services/api';

export type Restaurant = {
  map(arg0: (cardapio: any) => JSX.Element): import("react").ReactNode;
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    map(arg0: (cardapio: any) => JSX.Element): import("react").ReactNode;
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
};

const Home = () => {
  const { data } = useGetRestaurantsQuery();

  if (data) {
    return (
      <>
        <HeaderOne />
        <RestaurantsList restaurants={data} />
      </>
    )
  };
  return (
    <h4>
      Carregando...
    </h4>
  )

};

export default Home;
