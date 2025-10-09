import { useDispatch, useSelector } from 'react-redux';

import Button from '../Button'

import {
  CartItems,
  CartItem,
  Prices,
} from './styles'
import type { RootReducer } from '../../store';
import { remove, type MenuItem } from '../../store/reducers/cart';
import { formatPrice } from '../../pages/Products';
import AsideBar from '../AsideBar';

const Cart = () => {
  const items = useSelector((state: RootReducer) => state.cart.items as MenuItem[]);

  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.preco, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id));
  }

  return (
    <AsideBar>
      <>
        <CartItems>
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
        </CartItems>
        <Prices>
          Valor total <span>{formatPrice(getTotalPrice())}</span>
        </Prices>
        <div className="cta-button">
          <Button>
            Continuar com a entrega
          </Button>
        </div>
      </>
    </AsideBar>
  )
}

export default Cart
