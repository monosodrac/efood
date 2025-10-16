import type { AppDispatch } from '../store';
import { close } from '../store/reducers/cart';

export const closeCartAction = (dispatch: AppDispatch) => {
  dispatch(close());
};


export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: Cardapio[]) => {
  return items.reduce((accumulator, currentItem) => {
    if (currentItem.preco) {
      return (accumulator += currentItem.preco)
    }
    return 0
  }, 0)
}
