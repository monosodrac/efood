import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button'

import {
  CartContainer,
  Overlay,
  CartItem,
  Prices,
  Sidebar
} from './styles'
import type { RootReducer } from '../../store';
import { close, remove, type MenuItem } from '../../store/reducers/cart';
import { formatPrice } from '../../pages/Products';

const Cart = () => {
  const items = useSelector((state: RootReducer) => state.cart.items as MenuItem[]);
  const { isOpen } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.preco, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id));
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formatPrice(item.preco)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Prices>
          Valor total <span>{formatPrice(getTotalPrice())}</span>
        </Prices>
        <Button>
          Continuar com a entrega
        </Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
