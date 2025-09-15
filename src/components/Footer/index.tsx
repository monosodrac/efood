import { Container, FooterSection, Link, Links } from './styles'

import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <img src={logo} alt="efood" />
      </FooterSection>
      <FooterSection>
        <Links>
          <li>
            <Link href='https://www.instagram.com/'>
              <img src={instagram} alt="Instagram" />
            </Link>
          </li>
          <li>
            <Link href='https://www.facebook.com/'>
              <img src={facebook} alt="Facebook" />
            </Link>
          </li>
          <li>
            <Link href='https://x.com/'>
              <img src={twitter} alt="Twitter" />
            </Link>
          </li>
        </Links>
      </FooterSection>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a responsabilidade pela entrega, qualidade <br />
        dos produtos é toda do estabelecimento contratado. 
      </p>
    </div>
  </Container>
)

export default Footer
