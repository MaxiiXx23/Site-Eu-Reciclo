import styled from 'styled-components'

export const ContainerMain = styled.main`
  width: 100;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;

  box-sizing: border-box;
`
export const Title = styled.h1`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize['text-5xl']};
`
export const ContainerSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerInfos = styled.div`
  width: 31rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  gap: 3rem;

  margin-left: 3rem;
`
export const SubContainerInfoBase = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  flex-direction: column;

  gap: 1.5rem;
  /* 
  top: 0;
  left: 0; */

  p {
    font-size: ${({ theme }) => theme.fontSize['text-base']};
  }
`

export const SubContainerInfoText = styled(SubContainerInfoBase)`
  justify-content: flex-start;
`

export const SubContainerInfoBtns = styled(SubContainerInfoBase)`
  justify-content: center;
`

export const TitleInfo = styled.h5`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize['text-xl']};
`

export const WrapperBtns = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.5rem;
`
