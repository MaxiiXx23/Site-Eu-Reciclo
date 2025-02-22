import styled from 'styled-components'

export const ContainerMain = styled.main`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const Title = styled.h1`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize['text-5xl']};

  @media ${({ theme }) => theme.device.tabletL} {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize['text-2xl']};
  }

  @media ${({ theme }) => theme.device.mobileL} {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize['text-xl']};
  }
`

export const ContainerSection = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 14.375rem;

  @media ${({ theme }) => theme.device.tabletL} {
    gap: 4rem;
    flex-direction: column-reverse;

    img {
      margin-top: 2rem;
      width: 40rem;
      height: 30rem;
    }
  }
`

export const ContainerInfo = styled.div`
  width: 19.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 1.5rem;
`
