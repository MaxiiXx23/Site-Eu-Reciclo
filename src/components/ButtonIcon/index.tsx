import { Btn, WrapperBtn } from './styles'

import {
  GooglePlayLogo,
  AppStoreLogo,
  DownloadSimple,
} from '@phosphor-icons/react'

type iconsType = 'GooglePlayLogo' | 'AppStoreLogo' | 'DownloadSimple'

interface IProps {
  text: string
  to: string
  icon: iconsType
}

export function ButtonIcon({ text, to, icon }: IProps) {
  const icons = {
    GooglePlayLogo: <GooglePlayLogo size={40} color="#FFFF" />,
    AppStoreLogo: <AppStoreLogo size={40} color="#FFFF" />,
    DownloadSimple: <DownloadSimple size={40} color="#FFFF" />,
  }

  return (
    <WrapperBtn to={to}>
      <Btn>
        {icons[icon]}
        {text}
      </Btn>
    </WrapperBtn>
  )
}
