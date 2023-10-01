import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const WrapperBtn = styled(NavLink)`
  text-decoration: none;
`

export const Btn = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 26.125rem;

  padding: 0.625rem 0;

  background-color: ${({ theme }) => theme['green-400']};

  border: 0px;
  border-radius: 16px;
  transition: 3ms;

  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize['text-xl']};
  color: ${({ theme }) => theme.white};

  &:hover {
    opacity: 0.9;
  }
`
