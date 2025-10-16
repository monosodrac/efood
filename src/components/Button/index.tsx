import type { ReactNode } from 'react';
import { ButtonContainer } from './styles';

export type Props = {
  type?: 'button' | 'submit'
  onClick?: () => void
  children: ReactNode
}

const Button = ({
  type,
  onClick,
  children,
}: Props) => {
  return (
    <ButtonContainer type={type} onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}

export default Button
