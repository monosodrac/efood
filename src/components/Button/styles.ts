import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  padding: 8px 16px;
  border: 2px solid ${cores.branca};
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  color: ${cores.branca};
`

export const ButtonLink = styled(Link)`
  padding: 8px 16px;
  border: 2px solid ${cores.branca};
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  background-color: transparent;
  color: ${cores.branca};
  text-decoration: none;
`
