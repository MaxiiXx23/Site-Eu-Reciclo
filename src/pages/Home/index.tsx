import { DeviceMobile } from '@phosphor-icons/react'

import {
  CardLeft,
  CardRight,
  ContainerInfo,
  ContainerMain,
  ContainerSection,
  ContainerSubInfo,
  ImageApp,
  SubInfo,
  Title,
  WrapperTitle,
} from './styles'

import SplashApp from '@/assets/imagens/Image.svg'
import ImageIcons from '@/assets/imagens/Icons.svg'

import { Button } from '@/components/Button'

export function Home() {
  return (
    <ContainerMain>
      <ContainerSection>
        <WrapperTitle>
          <Title>Junte-se a nós à ajudar o nosso lindo planeta Terra</Title>
        </WrapperTitle>
        <ContainerInfo>
          <CardLeft>
            <img
              src={ImageIcons}
              alt="ícones"
              title="ciclo da vida e recilagem"
            />
            <p>
              Somos um aplicativo que conecta catadores e empresas de materiais
              recicláveis e pessoas que desejam descartar seus resíduos de
              maneira sustentável.
            </p>
          </CardLeft>
          <ImageApp
            src={SplashApp}
            alt="app Eu Reciclo"
            title="Aplicação Eu Reciclo"
          />
          <CardRight>
            <DeviceMobile size={48} />
            <p>
              Descarte seus materiais recicláveis com apenas alguns cliques, uma
              forma extremamente simples e dinâmica para ajudar o nosso maior
              bem: O Planeta Terra.
            </p>
          </CardRight>
        </ContainerInfo>
        <ContainerSubInfo>
          <SubInfo>
            Conecte-se a diversos catadores individuais e empresas de materiais
            recicláveis de sua cidade!
          </SubInfo>
          <Button to="/" text="Saiba como o aplicativo funciona" />
        </ContainerSubInfo>
      </ContainerSection>
    </ContainerMain>
  )
}
