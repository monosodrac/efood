import { useDispatch, useSelector } from 'react-redux';

type Props = {
  children: JSX.Element
}

import {
  Container,
  Overlay,
  Sidebar
} from './styles'
import type { RootReducer } from '../../store';
import { close } from '../../store/reducers/cart';
import type { JSX } from 'react';

const AsideBar = ({children}: Props) => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  return (
    <Container className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {children}
      </Sidebar>
    </Container>
  )
}

export default AsideBar;
