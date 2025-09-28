import styled from 'styled-components';
import { colors } from '../../styles';

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 1;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
    position: relative;
    max-width: 1024px;
    z-index: 1;


    .modal {
        display: flex;
        flex-direction: column;
        align-items: end;
        width: 100%;
        background-color: ${colors.pink};
        
        .fechar-modal {
            justify-self: end;
            margin: 8px;
            height: 16px;
            width: 16px;
            cursor: pointer;
        }

        .card-modal {
            display: flex;
            column-gap: 24px;
            margin: 32px;
            color: #fff;

            .foto-modal {
                height: 280px;
                width: 280px;
                object-fit: cover;
            }

            h3 {
                font-weight: 900;
                font-size: 18px;
                line-height: 100%;
            }
            
            p {
                margin: 16px 0;
                height: 176px;
                font-weight: 400;
                font-size: 14px;
                line-height: 22px;
            }
        }
    }
`
