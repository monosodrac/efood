import Button from '../Button'

import pizzaMarg from '../../assets/images/pizza-marg.png'

import {
  CartContainer,
  Overlay,
  CartItem,
  Prices,
  Sidebar
} from './styles'

const Cart = () => (
  <CartContainer>
    <Overlay />
    <Sidebar>
      <ul>
        <CartItem>
          <img src={pizzaMarg} alt="" />
          <div>
            <h3>Pizza Marguerita</h3>
            <span>R$ 60,90</span>
          </div>
          <button type="button" />
        </CartItem>
        <CartItem>
          <img src={pizzaMarg} alt="" />
          <div>
            <h3>Pizza Marguerita</h3>
            <span>R$ 60,90</span>
            <button type="button" />
          </div>
        </CartItem>
        <CartItem>
          <img src={pizzaMarg} alt="" />
          <div>
            <h3>Pizza Marguerita</h3>
            <span>R$ 60,90</span>
            <button type="button" />
          </div>
        </CartItem>
      </ul>
      <Prices>
        Valor total <span>R$ 182,70</span>
      </Prices>
      <Button>
        Continuar com a entrega
      </Button>
    </Sidebar>
  </CartContainer>
)

export default Cart
