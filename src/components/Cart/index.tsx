import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button'

import {
  CartItems,
  CartItem,
  Prices,
} from './styles'
import type { RootReducer } from '../../store';
import { openOrder, remove, type MenuItem } from '../../store/reducers/cart';
import { parseToBrl } from '../../utils';
import AsideBar from '../AsideBar';
import Checkout from '../Checkout';

const Cart = () => {
  const items = useSelector((state: RootReducer) => state.cart.items as MenuItem[]);
  const { isOrder } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.preco, 0);
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const openOrd = () => {
    if (items.length > 0) {
      dispatch(openOrder());
    };
  }

  if (isOrder) {
    return <Checkout />
  }

  return (
    <AsideBar>
      {items.length > 0 ? (
        <>
          <CartItems>
            {items.map((item) => (
              <CartItem key={item.id}>
                <img src={item.foto} alt={item.nome} />
                <div>
                  <h3>{item.nome}</h3>
                  <span>{parseToBrl(item.preco)}</span>
                </div>
                <button onClick={() => removeItem(item.id)} type="button" />
              </CartItem>
            ))}
          </CartItems>
          <Prices>
            Valor total <span>{parseToBrl(getTotalPrice())}</span>
          </Prices>
          <div className="cta-button">
            <Button onClick={openOrd}>
              Continuar com a entrega
            </Button>
          </div>
        </>
      ) : (
        <p className="empty-text">
          O carrinho está vazio, adicione pelo menos um produto para continuar
          a compra
        </p>
      )}
    </AsideBar>
  )
}

export default Cart
