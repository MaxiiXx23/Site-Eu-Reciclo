import { ContainerInfo, ContainerMain, ContainerSection, Title } from './styles'

import ImageLogo from '@/assets/imagens/ImageLogo.svg'

export function AboutUs() {
  return (
    <ContainerMain>
      <Title>Quem somos?</Title>
      <ContainerSection>
        <ContainerInfo>
          <p>
            O EuReciclo nasceu com objetivo de ajudar a diminuir o impacto no
            meio ambiente devido ao mal descarte de materiais recicláveis.
            Vizando esse grande problema que atingue nosso planeta, foi criado o
            EuReciclo que conecta Catadores e Empresas de materiais recicláveis
            com pessoas que desejam descartar de forma correta e simples.
          </p>
          <p>
            ossa equipe de desenvolvedores altamente capacitados, criou uma
            aplicação simples, dinâmica e segura para nossos usuários, desde
            clientes, Cotadores Indíviduais quanto para Empresas de materiais
            recicláveis.
          </p>
          <p>
            Atualmente atuamos com nosso aplicativo apenas na cidade de
            Itaquaquecetuba, porém, pensamos além e queremos expandir para todo
            estado de São Paulo e futuramente o Brasil inteiro. A nossa grande
            paixão por tecnologia e ao Planeta Terra nos fará ir além do
            infinito para tornar nosso lar melhor e mais saudável de se viver.
          </p>
        </ContainerInfo>
        <img src={ImageLogo} alt="Logo EuReciclo" title="Logo EuReciclo" />
      </ContainerSection>
    </ContainerMain>
  )
}
