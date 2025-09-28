import type { ReactNode } from 'react';
import { ButtonContainer } from './styles';

export type Props = {
  onClick?: () => void
  children: ReactNode
}

const Button = ({
  onClick,
  children,
}: Props) => {
  return (
    <ButtonContainer onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}

export default Button
