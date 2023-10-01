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
        <OptionNav to="/como-funciona">Como funciona</OptionNav>
        <OptionNav to="/baixe-o-app">Baixe o App</OptionNav>
        <OptionNav to="/quem-somos">Quem somos</OptionNav>
      </NavList>
    </ContainerHeader>
  )
}
