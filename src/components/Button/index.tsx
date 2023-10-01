import { Btn, WrapperBtn } from './styles'

interface IProps {
  text: string
  to: string
}

export function Button({ text, to }: IProps) {
  return (
    <WrapperBtn to={to}>
      <Btn>{text}</Btn>
    </WrapperBtn>
  )
}
