import { ClockLoader } from 'react-spinners'
import { colors } from '../../styles'

import { Container } from './styles'

const Loader = () => (
  <Container>
    <ClockLoader color={colors.pink} />
  </Container>
)

export default Loader
