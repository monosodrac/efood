import styled from 'styled-components'
import { colors } from '../../styles'

import type { Props } from '.'

export const TagContainer = styled.div<Props>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: ${(props) => (props.size === 'big' ? '4px 6px' : '6px 4px')};
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: bold;
  background-color: ${colors.pink};
  color: ${colors.white};
`
