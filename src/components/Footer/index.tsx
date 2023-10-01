import { Container } from './styles'

import LogoFooter from '@/assets/icons/LogoFooter.svg'

export function Footer() {
  return (
    <Container>
      <img src={LogoFooter} alt="Logo" title="Logo Eu Reciclo" />
      <p>© 2023 EuReciclo, Todos os direitos reservados.</p>
    </Container>
  )
}
