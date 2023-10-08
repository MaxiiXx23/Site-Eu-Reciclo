import { Button } from '@/components/Button'
import {
  ImagemApp,
  CardLeft,
  CardRight,
  ContainerHowSolicitation,
  ContainerInfoHowWork,
  ContainerInfoMain,
  ContainerSection,
  Title,
  WrapperCards,
  WrapperTitle,
} from './styles'

import ImageHowWork from '@/assets/imagens/ImageHowWork.svg'
import ImageHowWorking1 from '@/assets/imagens/ImageColeta1.svg'
import ImageHowWorking2 from '@/assets/imagens/ImageColeta02.svg'
import ImageHowWorking3 from '@/assets/imagens/ImageColeta3.svg'
import ImageHowWorking4 from '@/assets/imagens/ImageRegister.svg'
import ImageHowWorking5 from '@/assets/imagens/ImageColeta04.svg'
import ImageHowWorking6 from '@/assets/imagens/ImageColeta05.svg'
import ImageHowWorking7 from '@/assets/imagens/ImageColeta07.svg'
import ImageHowWorking8 from '@/assets/imagens/ImageColeta08.svg'

export function HowWork() {
  return (
    <ContainerSection>
      <Title>Como funciona o EuReciclo?</Title>
      <ContainerInfoHowWork>
        <ContainerInfoMain
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, ease: 'easeOut' }}
          variants={{
            hidden: { opacity: 0, x: 0 },
            visible: { opacity: 1, x: 100 },
          }}
        >
          <p>
            Nosso grande objetivo é conectar catadores indíviduais e empresas de
            coleta de materiais recicláveis em só lugar à pessoas que desejam
            reciclar seus materiais de forma simples e sustentável.
          </p>
          <p>
            O aplicativo possibilita que as pessoas encontrem e solicitem a
            coleta de materiais recicláveis na sua residência ou comércio, ao
            ver uma lista de catadores indíviduais e empresas da sua cidade.
          </p>
          <p>
            Tanto Catadores Autônomos ou empresas do ramo, conseguem divulgar
            seus serviços de forma simples e rápida, assim, alavancando seus
            serviços além de ajudar o meio ambiente ainda mais.
          </p>
          <p>
            O EuReciclo presa pela simplicidade de uso e segurança para ambas as
            partes que usam o aplicativo, sendo você uma pessoa que deseja
            descartar seus materiais recicláveis, quanto a pessoa ou empresa que
            coletará os materiais.
          </p>
          <Button to="/" text="Saiba mais sobre cada categoria" />
        </ContainerInfoMain>
        <ImagemApp
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, ease: 'easeOut' }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          src={ImageHowWork}
          alt="Imagem aplicativo"
          title="Imagem do aplicativo"
        />
      </ContainerInfoHowWork>
      <ContainerHowSolicitation>
        <WrapperTitle>
          <Title>Como socilitar uma coleta?</Title>
          <p>
            Você é uma pessoa que deseja descartar seus materiais recicláveis no
            app? Então esse guia é para você.
          </p>
        </WrapperTitle>
        <WrapperCards>
          <CardLeft
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, ease: 'easeOut' }}
            variants={{
              hidden: { opacity: 0, x: 0 },
              visible: { opacity: 1, x: 100 },
            }}
          >
            <p>
              Para solicitar um coleta na sua residência ou comércio,
              primeiramente é necessário postar a sua coleta. Para isso você
              precisa tirar algumas fotos dos materiais recicláveis que deseja
              descartar e preencher algumas informações para que o Coletor
              consiga ir até você.
            </p>
            <img
              src={ImageHowWorking1}
              alt="Imagem ilustrativa"
              title="Imagem ilustrativa do app"
            />
          </CardLeft>
          <CardRight
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, ease: 'easeOut' }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p>
              Ao realizar a postagem da sua coleta, ela ficará visível aos
              Coletores que poderam socilitar a coleta. Nesse momente, você
              consegue visualizar o perfil do Coletor com suas informações e
              avaliações de outras pessoas que receberam os seus serviços.
              Assim, ao aceitar que a coleta seja realizada o Coletor irá até
              você.
            </p>
            <img
              src={ImageHowWorking2}
              alt="Imagem ilustrativa"
              title="Imagem ilustrativa do app"
            />
          </CardRight>

          <CardLeft
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, ease: 'easeOut' }}
            variants={{
              hidden: { opacity: 0, x: 0 },
              visible: { opacity: 1, x: 100 },
            }}
          >
            <p>
              Após a coleta ser realizada pelo Coletor é possível avaliar o seu
              serviço, assim como ele avaliará você no aplicativo. Ajudando
              ambos a ficarem ainda mais visíveis no aplicativo e terem maior
              confiança. Ao final, você terá ajudado o nosso planeta de forma
              simples e segura.
            </p>
            <img
              src={ImageHowWorking3}
              alt="Imagem ilustrativa"
              title="Imagem ilustrativa do app"
            />
          </CardLeft>
        </WrapperCards>
      </ContainerHowSolicitation>
      <ContainerHowSolicitation>
        <WrapperTitle>
          <Title>Como tornar-se um Catador Indívidual?</Title>
          <p>
            Você é uma pessoa que deseja se tornar um Catador Indívidual no app?
            Então esse guia é para você.
          </p>
        </WrapperTitle>
        <WrapperCards>
          <CardLeft
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, ease: 'easeOut' }}
            variants={{
              hidden: { opacity: 0, x: 0 },
              visible: { opacity: 1, x: 100 },
            }}
          >
            <p>
              Para tornar-se um Catador Indívidual no aplicativo é necessário
              realizar um cadastro na aba “Coletor Indívidual”, ali você
              preencherá suas informações pessoais que serão validadas pelo
              nosso sistema. Essa validação trará maior credibilidade aos seus
              serviços e segurança ao seus clientes.
            </p>
            <img
              src={ImageHowWorking4}
              alt="Imagem ilustrativa"
              title="Imagem ilustrativa do app"
            />
          </CardLeft>
          <CardRight
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, ease: 'easeOut' }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p>
              Após realizar o cadastro, é a hora de preencher o seu perfil com
              suas informações que serão visíveis aos usuários do aplicativo,
              nesse momento é importante para divulgar o seu serviço e mostrar
              confiança aos usuários.
            </p>
            <img
              src={ImageHowWorking5}
              alt="Imagem ilustrativa"
              title="Imagem ilustrativa do app"
            />
          </CardRight>

          <CardLeft
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, ease: 'easeOut' }}
            variants={{
              hidden: { opacity: 0, x: 0 },
              visible: { opacity: 1, x: 100 },
            }}
          >
            <p>
              A última etapa é pegar uma coleta, para isso, é só ir na aba
              “Coletas” e você visualizará as solicitações de coleta da sua
              região. Agora é sua vez de requisitar a coleta ao cliente, se ele
              aceitar, basta ir até sua residência ou comércio e realizar o seu
              serviço.
            </p>
            <img
              src={ImageHowWorking6}
              alt="Imagem ilustrativa"
              title="Imagem ilustrativa do app"
            />
          </CardLeft>
        </WrapperCards>
      </ContainerHowSolicitation>
      <ContainerHowSolicitation>
        <WrapperTitle>
          <Title>Como prestar serviços como empresa de coleta?</Title>
          <p>
            Você é uma empresa de coleta de materiais recicláveis e deseja
            prestar seus serviços no app? Então, esse guia é para você.
          </p>
        </WrapperTitle>
        <WrapperCards>
          <CardLeft
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, ease: 'easeOut' }}
            variants={{
              hidden: { opacity: 0, x: 0 },
              visible: { opacity: 1, x: 100 },
            }}
          >
            <p>
              Para oferecer e prestar serviços é necessário realizar o cadastro
              de sua empresa no aplicativo. Após o preenchimento validaremos as
              informações em nosso sistema o mais rápido possível e com
              segurança.
            </p>
            <img
              src={ImageHowWorking4}
              alt="Imagem ilustrativa"
              title="Imagem ilustrativa do app"
            />
          </CardLeft>
          <CardRight
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, ease: 'easeOut' }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p>
              Após o cadastro e dados serem validados, é a hora de preencher as
              informações da sua empresa no aplicativo, essas informações
              ficarão visíveis aos clientes, assim como, informações dos seus
              funcionário que prestaram o serviço de coleta.
            </p>
            <img
              src={ImageHowWorking7}
              alt="Imagem ilustrativa"
              title="Imagem ilustrativa do app"
            />
          </CardRight>

          <CardLeft
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, ease: 'easeOut' }}
            variants={{
              hidden: { opacity: 0, x: 0 },
              visible: { opacity: 1, x: 100 },
            }}
          >
            <p>
              A única diferença entre Catador Indívidual e Empresa de Coleta é
              que a empresa precisa informar as informações de seus
              colaboradores(Catadores) que prestaram o serviço de coleta. Tanto
              empresa como colaborador serão avaliados pelo cliente.
            </p>
            <img
              src={ImageHowWorking8}
              alt="Imagem ilustrativa"
              title="Imagem ilustrativa do app"
            />
          </CardLeft>
        </WrapperCards>
      </ContainerHowSolicitation>
    </ContainerSection>
  )
}
