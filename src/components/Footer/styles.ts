import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.footer`
  font-size: 14px;
  background-color: ${colors.white};
  
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0;

    p {
      text-align: center;
      margin-top: 48px;
      font-size: 10px;
      color: ${colors.pink};
    }
  }
`

export const Links = styled.ul`
  display: flex;
  column-gap: 8px;
`

export const Link = styled.a`
  color: ${colors.pink};
  text-decoration: none;
`

export const FooterSection = styled.div`
  margin-bottom: 32px;
`
