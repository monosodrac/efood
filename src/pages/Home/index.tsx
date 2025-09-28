import type { JSX } from 'react/jsx-runtime';
import { RestaurantsList } from '../../components/CardsList';

import { HeaderOne } from '../../components/Header';

import { useEffect, useState } from 'react';

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
  const [restaurant, setRestaurant] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch('https://ebac-fake-api.vercel.app/api/efood/restaurantes')
      .then(res => res.json())
      .then(res => setRestaurant(res))
  }, []);

  return (
    <>
      <HeaderOne />
      <RestaurantsList restaurants={restaurant} />
    </>
  )
};

export default Home;
