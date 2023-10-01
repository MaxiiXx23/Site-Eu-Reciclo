import { ButtonIcon } from '@/components/ButtonIcon'
import {
  ContainerInfos,
  ContainerMain,
  ContainerSection,
  SubContainerInfoText,
  SubContainerInfoBtns,
  Title,
  TitleInfo,
  WrapperBtns,
} from './styles'

import ImageDownload from '@/assets/imagens/ImageDownloadApp.svg'

export function DownloadApp() {
  return (
    <ContainerMain>
      <Title>Baixe o APP nas principais plataformas!</Title>
      <ContainerSection>
        <ContainerInfos>
          <SubContainerInfoText>
            <TitleInfo>O EuReciclo apenas alguns cliques de você!</TitleInfo>
            <p>
              O Aplicativo EuReciclo está disponível para download tanto para
              IOS quanto Android. Baixe agora mesmo e começe a sua jornada para
              melhorar o nosso planeta Terra. Comece a reciclar hoje mesmo!
            </p>
          </SubContainerInfoText>
          <SubContainerInfoBtns>
            <TitleInfo>
              Em qual plataforma deseja baixar o aplicativo?
            </TitleInfo>
            <WrapperBtns>
              <ButtonIcon
                text="Google Play Store"
                to="/"
                icon="GooglePlayLogo"
              />
              <ButtonIcon text="App Store" to="/" icon="AppStoreLogo" />
              <ButtonIcon text="Site oficial" to="/" icon="DownloadSimple" />
            </WrapperBtns>
          </SubContainerInfoBtns>
        </ContainerInfos>
        <img
          src={ImageDownload}
          alt="Imagem download"
          title="Imagem Download"
        />
      </ContainerSection>
    </ContainerMain>
  )
}
