import Button from '../Button'
import AsideBar from '../AsideBar'
import { Content, InputGroup, Row } from './styles'

const Checkout = () => (
  <AsideBar>
    <>
      <h2>Entrega</h2>
      <Content>
        <InputGroup>
          <label htmlFor="fullName">Quem irá receber</label>
          <input id="fullName" type="text" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="address">Endereço</label>
          <input id="address" type="text" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="city">Cidade</label>
          <input id="city" type="text" />
        </InputGroup>
        <Row>
          <InputGroup>
            <label htmlFor="deliveryEmail">CEP</label>
            <input id="deliveryEmail" type="email" />
          </InputGroup>
          <InputGroup>
            <label htmlFor="confirmDeliveryEmail">Número</label>
            <input id="confirmDeliveryEmail" type="email" />
          </InputGroup>
        </Row>
        <InputGroup>
          <label htmlFor="comp">Complemento (opcional)</label>
          <input id="comp" type="text" />
        </InputGroup>
      </Content>
      <div className="cta-button">
        <Button>
          Continuar com o pagamento
        </Button>
        <Button>
          Voltar para o carrinho
        </Button>
      </div>
    </>
  </AsideBar>
)

export default Checkout
