import styled from 'styled-components'
import { colors } from '../../styles'

import trash from '../../assets/images/trash-icon.png'

export const CartItems = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const CartItem = styled.li`
  position: relative;
  display: flex;
  padding: 8px;
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
  margin-top: 40px;
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};
`
