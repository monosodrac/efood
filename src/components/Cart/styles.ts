import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

import trash from '../../assets/images/trash-icon.png'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const Sidebar = styled.aside`
  padding: 32px 8px 0;
  max-width: 360px;
  width: 100%;
  background-color: ${colors.pink};
  z-index: 1;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
`

export const CartItem = styled.li`
  position: relative;
  display: flex;
  padding: 8px;
  margin-bottom: 16px;
  background-color: ${colors.white};

  img {
    margin-right: 8px;
    height: 80px;
    width: 80px;
    object-fit: cover;
  }

  h3 {
    margin-bottom: 16px;
    font-weight: black;
    font-size: 18px;
    color: ${colors.pink};
  }

  span {
    display: block;
    font-weight: regular;
    font-size: 14px;
    line-height: 22px;
    color: ${colors.pink};
  }

  button {
    position: absolute;
    bottom: 8px;
    right: 8px;
    background-image: url(${trash});
    height: 16px;
    width: 16px;
    border: none;
  }
`

export const Prices = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 24px 0 16px;
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};
`
