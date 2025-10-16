import { useDispatch, useSelector } from 'react-redux';
import type { JSX } from 'react';

type Props = {
  children: JSX.Element
}

import {
  Container,
  Overlay,
  Sidebar
} from './styles'
import type { RootReducer } from '../../store';
import { closeCartAction } from '../../utils';

const AsideBar = ({children}: Props) => {
  const { isOpen } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  return (
    <Container className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={() => closeCartAction(dispatch)} />
      <Sidebar>
        {children}
      </Sidebar>
    </Container>
  )
}

export default AsideBar;
