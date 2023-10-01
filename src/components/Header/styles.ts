import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const ContainerHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-direction: row;

  width: 100%;
  height: 5.375rem;

  padding: 0.75rem 1.5rem;

  box-sizing: border-box;
`
export const Logo = styled(NavLink)`
  text-decoration: none;
`

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1.5rem;

  list-style-type: none;
`

export const OptionNav = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;

  color: ${({ theme }) => theme.black};
`
