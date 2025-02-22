import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;

  padding: 2.25rem 0;

  p {
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize['text-xl']};
  }

  @media ${({ theme }) => theme.device.tabletL} {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize['text-base']};
  }
`
