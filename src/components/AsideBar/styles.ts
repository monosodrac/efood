import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Container = styled.div`
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
  color: ${colors.white};
  z-index: 1;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }
  
  h2 {
    margin-bottom: 16px;
    font-weight: bold;
    font-size: 16px;
  }

  .cta-button {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 24px;
  }
`
