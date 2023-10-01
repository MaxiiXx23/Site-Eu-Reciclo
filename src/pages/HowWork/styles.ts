import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ContainerSection = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow-x: hidden;
`
export const Title = styled.h1`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize['text-5xl']};
`

export const ContainerInfoHowWork = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const ContainerInfoMain = styled(motion.div)`
  width: 19.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 1.5rem;
`

export const ImagemApp = styled(motion.img)``

export const ContainerHowSolicitation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding-top: 5rem;
`
export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.75rem;
`
export const WrapperCards = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  padding-top: 5rem;
`

const CardBase = styled(motion.div)`
  width: 44.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const CardLeft = styled(CardBase)`
  margin-right: 30%;
`

export const CardRight = styled(CardBase)`
  margin-left: 30%;
`
