import logo from '@/assets/icons/Logo.svg'
import { ContainerHeader, Logo, NavList, OptionNav } from './styles'

export function Header() {
  return (
    <ContainerHeader>
      <Logo to="/">
        <img src={logo} alt="Logo" title="Logo Eu Reciclo" />
      </Logo>
      <NavList>
        <OptionNav to="/">Home</OptionNav>
        <OptionNav to="/">Como funciona</OptionNav>
        <OptionNav to="/">Baixe o App</OptionNav>
        <OptionNav to="/">Quem somos</OptionNav>
      </NavList>
    </ContainerHeader>
  )
}
