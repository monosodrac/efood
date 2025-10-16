import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

import Button from '../Button';
import AsideBar from '../AsideBar';

import { usePurchaseMutation } from '../../services/api';
import type { RootReducer } from '../../store';
import {
  clear,
  closeOrder,
  closePaying,
  openPaying
} from '../../store/reducers/cart';

import { Content, InputGroup, Row } from './styles';

const Checkout = () => {
  const navigate = useNavigate();
  const { isPaying, items } = useSelector((state: RootReducer) => state.cart);
  const [purchase, { data, isSuccess }] = usePurchaseMutation();
  const dispatch = useDispatch();

  const closePay = () => dispatch(closePaying());
  const closeOrd = () => dispatch(closeOrder());
  const openPay = () => dispatch(openPaying());
  const clearOrd = () => dispatch(clear());

  const FinishOrder = () => {
    closePay();
    navigate("/");
    clearOrd();
  }

  const formDelivery = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      comp: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .required('O campo é obrigatório'),
      city: Yup.string()
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .required('O campo é obrigatório'),
      number: Yup.string()
        .required('O campo é obrigatório'),
      comp: Yup.string(),
    }),
    onSubmit: () => {
      openPay();
    }
  });

  const formPayment = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string()
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .required('O campo é obrigatório'),
      cardCode: Yup.string()
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .required('O campo é obrigatório'),
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: formDelivery.values.fullName,
          address: {
            zipcode: formDelivery.values.cep,
            city: formDelivery.values.city,
            number: Number(formDelivery.values.number),
            complement: formDelivery.values.comp,
            description: formDelivery.values.address
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  });

  return (
    <AsideBar>
      <>
        {data && isSuccess ? (
          <>
            <h2>Pedido realizado - {data.orderId}</h2>
            <>
              <p>
                Estamos felizes em informar que seu pedido já está em processo de preparação e, em breve, será entregue no endereço fornecido.
              </p>
              <p className="margin-top">
                Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras.
              </p>
              <p className="margin-top">
                Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
              </p>
              <p className="margin-top">
                Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
              </p>
              <div className="cta-button">
                <Button onClick={FinishOrder}>
                  Concluir
                </Button>
              </div>
            </>
          </>
        ) : (
          <>
            {isPaying ? (
              <form>
                <h2>Pagamento - Valor a pagar R$ 190,90</h2>
                <Content>
                  <InputGroup>
                    <label htmlFor="cardName">Nome no cartão</label>
                    <input
                      id="cardName"
                      type="text"
                      value={formPayment.values.cardName}
                      onChange={formPayment.handleChange}
                      onBlur={formPayment.handleBlur}
                    />
                  </InputGroup>
                  <Row>
                    <InputGroup>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <input
                        id="cardNumber"
                        type="text"
                        value={formPayment.values.cardNumber}
                        onChange={formPayment.handleChange}
                        onBlur={formPayment.handleBlur}
                      />
                    </InputGroup>
                    <InputGroup style={{ maxWidth: '86px' }}>
                      <label htmlFor="cardCode">CVV</label>
                      <input
                        id="cardCode"
                        type="text"
                        value={formPayment.values.cardCode}
                        onChange={formPayment.handleChange}
                        onBlur={formPayment.handleBlur}
                      />
                    </InputGroup>
                  </Row>
                  <Row>
                    <InputGroup>
                      <label htmlFor="expiresMonth">Mês de vencimento</label>
                      <input
                        id="expiresMonth"
                        type="text"
                        value={formPayment.values.expiresMonth}
                        onChange={formPayment.handleChange}
                        onBlur={formPayment.handleBlur}
                      />
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="expiresYear">Ano de vencimento</label>
                      <input
                        id="expiresYear"
                        type="text"
                        value={formPayment.values.expiresYear}
                        onChange={formPayment.handleChange}
                        onBlur={formPayment.handleBlur}
                      />
                    </InputGroup>
                  </Row>
                </Content>
                <div className="cta-button">
                  <Button type='submit' onClick={formPayment.handleSubmit}>
                    Finalizar pagamento
                  </Button>
                  <Button type='button' onClick={closePay}>
                    Voltar para a edição de endereço
                  </Button>
                </div>
              </form>
            ) : (
              <form onSubmit={formDelivery.handleSubmit}>
                <h2>Entrega</h2>
                <Content>
                  <InputGroup>
                    <label htmlFor="fullName">Quem irá receber</label>
                    <input
                      id="fullName"
                      type="text"
                      value={formDelivery.values.fullName}
                      onChange={formDelivery.handleChange}
                      onBlur={formDelivery.handleBlur}
                    />
                    {formDelivery.touched.fullName &&
                      formDelivery.errors.fullName && (
                        <small>{formDelivery.errors.fullName}</small>
                      )
                    }
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="address">Endereço</label>
                    <input
                      id="address"
                      type="text"
                      value={formDelivery.values.address}
                      onChange={formDelivery.handleChange}
                      onBlur={formDelivery.handleBlur}
                    />
                    {formDelivery.touched.address &&
                      formDelivery.errors.address && (
                        <small>{formDelivery.errors.address}</small>
                      )
                    }
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="city">Cidade</label>
                    <input
                      id="city"
                      type="text"
                      value={formDelivery.values.city}
                      onChange={formDelivery.handleChange}
                      onBlur={formDelivery.handleBlur}
                    />
                    {formDelivery.touched.city &&
                      formDelivery.errors.city && (
                        <small>{formDelivery.errors.city}</small>
                      )
                    }
                  </InputGroup>
                  <Row>
                    <InputGroup>
                      <label htmlFor="cep">CEP</label>
                      <input
                        id="cep"
                        type="email"
                        value={formDelivery.values.cep}
                        onChange={formDelivery.handleChange}
                        onBlur={formDelivery.handleBlur}
                      />
                      {formDelivery.touched.cep &&
                        formDelivery.errors.cep && (
                          <small>{formDelivery.errors.cep}</small>
                        )
                      }
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="number">Número</label>
                      <input
                        id="number"
                        type="email"
                        value={formDelivery.values.number}
                        onChange={formDelivery.handleChange}
                        onBlur={formDelivery.handleBlur}
                      />
                      {formDelivery.touched.number &&
                        formDelivery.errors.number && (
                          <small>{formDelivery.errors.number}</small>
                        )
                      }
                    </InputGroup>
                  </Row>
                  <InputGroup>
                    <label htmlFor="comp">Complemento (opcional)</label>
                    <input
                      id="comp"
                      type="text"
                      value={formDelivery.values.comp}
                      onChange={formDelivery.handleChange}
                      onBlur={formDelivery.handleBlur}
                    />
                  </InputGroup>
                </Content>
                <div className="cta-button">
                  <Button type='submit' onClick={formDelivery.handleSubmit}>
                    Continuar com o pagamento
                  </Button>
                  <Button type='button' onClick={closeOrd}>
                    Voltar para o carrinho
                  </Button>
                </div>
              </form>
            )}
          </>
        )}
      </>
    </AsideBar>
  )
}

export default Checkout
