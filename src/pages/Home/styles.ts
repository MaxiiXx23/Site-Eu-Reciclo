import styled from 'styled-components'

export const ContainerMain = styled.main`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ContainerSection = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 0 3.625rem;
  box-sizing: border-box;
`

export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50.125rem;
  text-align: center;
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['text-5xl']};
`

export const ContainerInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
`
export const ImageApp = styled.img`
  z-index: -1;
`
const Card = styled.div`
  width: 20.75rem;
  height: 15rem;

  position: absolute;

  top: 0;

  margin-top: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 1.25rem;

  p {
    text-align: center;
  }
`

export const CardLeft = styled(Card)`
  left: 0;
`
export const CardRight = styled(Card)`
  right: 0;
`

export const ContainerSubInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;

  margin-top: 1.5rem;
`

export const SubInfo = styled.p`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize['text-xl']};
`
