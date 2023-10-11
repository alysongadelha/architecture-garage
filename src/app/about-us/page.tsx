import { Container } from "@/components/container/Container";

const AboutUs = () => {
  return (
    <Container>
      <div className="flex w-full flex-col gap-5 py-10">
        <h2 className="text-heading2 uppercase">Sobre nós</h2>
        {/* <div className="flex flex-col gap-10 lg:flex-row"> */}
        {/* <div className="flex flex-col gap-4">
            <div className="bg-slate-400 p-4 text-lg lg:min-h-[401px] lg:w-[214px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              suscipit placeat dicta, dolore vero beatae molestiae fugit
              repellendus quaerat.
            </div>
          </div> */}
        <main className="flex flex-col gap-4">
          <div className="flex flex-col justify-center gap-6 bg-logoColor-surfaceMuted p-4 lg:h-96">
            <p className="text-LargeP">
              A Architecture Garage é uma empresa 100% digital e trabalha com
              projetos de arquitetura, focado em residências, planejando com
              toda a acessibilidade e prevendo o maior conforto para dar uma
              longevidade no uso e facilidade de manutenção, criando assim casas
              à “prova de futuro”.
            </p>
            <p className="text-LargeP">
              Nosso intuito é de proporcionar aos nossos clientes a escolha
              entre vários tipos de casas, para que possa se decidir pensando no
              futuro de maneira segura que o projeto terá um planejamento
              consistente e adaptável.
            </p>
          </div>
        </main>
        {/* </div> */}
      </div>
      <div className="flex w-full flex-col gap-5 py-10">
        <h2 className="text-heading2 uppercase">O Que Fazemos</h2>
        <main className="flex flex-col gap-4">
          <div className="lg:min-h-96 flex flex-col justify-center gap-6 bg-logoColor-surfaceMuted p-4">
            <p className="text-LargeP">
              A Loja de Projetos é uma empresa de arquitetura inovadora que
              oferece aos seus clientes a oportunidade de contratar projetos de
              arquitetura de um modo fácil, seguro e atual. Somos uma empresa
              especializada na elaboração de projetos de arquitetura pela
              internet, com atendimento moderno e 100% online. Através do nosso
              catálogo de ideias, os clientes podem encontrar soluções
              inteligentes a adequadas ao seu perfil, para iniciar de modo
              prático a realização do seu sonho de construir. Trabalhamos com um
              conceito diferente dos demais sites especializados em projetos
              arquitetônicos. Não vendemos os famosos projetos prontos, que além
              de ser uma forma ilegal de trabalhar com projetos de arquitetura,
              em sua maioria traz ao cliente que os adquire um conceito frio,
              impessoal e inadequado ao local onde será construído, fazemos
              Arquitetura de Qualidade. Oferecemos aos visitantes do site um
              catálogo de ideias que funcionam como uma exposição de
              inspirações, permitindo ao cliente imaginar as possibilidades que
              terá para realizar seu sonho de construir. Navegue e conheça nosso
              catálogo de ideias! Inspire-se! Depois é só solicitar seu
              orçamento. Vamos identificar suas características, avaliar a
              viabilidade, ajustar o projeto e entregar um produto completo, com
              alta qualidade e com todas as informações técnicas necessárias
              para você iniciar sua obra.
            </p>
          </div>
        </main>
      </div>
      <div className="flex w-full flex-col gap-5 py-10">
        <h2 className="text-heading2 uppercase">Missão</h2>
        <main className="flex flex-col gap-4">
          <div className="lg:min-h-96 flex flex-col justify-center gap-6 bg-logoColor-surfaceMuted p-4">
            <p className="text-LargeP">
              Inovar a Forma de Oferecer Serviços de Arquitetura. A Loja de
              Projetos oferece aos seus clientes um produto, desenvolvido de
              forma 100% online, com alta qualidade técnica e pronto para ser
              utilizado por qualquer profissional (engenheiro civil ou
              arquiteto) que assumir a responsabilidade técnica pela execução ou
              direção técnica da futura obra. Nosso trabalho se pauta na
              qualidade dos serviços oferecidos, na qualidade do atendimento
              oferecido à nossos clientes, no cumprimento dos prazos e no
              respeito às Leis e ao Código de Ética Profissional vigentes.
            </p>
            <p className="text-LargeP">
              Muito diferente da enorme quantidade de sites que oferecem apenas
              plantas de casas ou projetos prontos com preços definidos, o que
              fere à legislação vigente, a Loja de Projetos se propõe a oferecer
              serviços de arquitetura, com alta qualidade e não projetos
              prontos, padronizados e sem nenhuma preocupação com o cliente.
              Outro dado importante é que todos os projetos desenvolvidos pela
              Loja de Projetos são elaborados por arquitetos legalmente
              habilitados e são entregues ao cliente com a RRT (Registro de
              Responsabilidade Técnica - junto ao Conselho de Arquitetura e
              Urbanismo - CAU).
            </p>
          </div>
        </main>
      </div>
      <div className="flex w-full flex-col gap-5 py-10">
        <h2 className="text-heading2 uppercase">O Que Não Fazemos</h2>
        <main className="flex flex-col gap-4">
          <div className="lg:min-h-96 flex flex-col justify-center gap-6 bg-logoColor-surfaceMuted p-4">
            <p className="text-LargeP">
              Por oferecer um serviço realizado de forma 100% online, a Loja de
              Projetos não executa a obra e nem oferece o acompanhamento técnico
              da mesma. Não vendemos projetos arquitetônicos prontos, prática
              que consideramos incompatível com a arquitetura de boa qualidade
              que oferecemos. Não desenvolvemos também os seguintes tipos de
              projetos: Projetos e Levantamentos Planialtimétricos, Projeto de
              Combate e Detecção de incêndio, Projeto de Contenção de Encostas e
              Muros de Arrimos, etc.
            </p>
          </div>
        </main>
      </div>
      <div className="flex w-full flex-col gap-5 py-10">
        <h2 className="text-heading2 uppercase">Quem Somos</h2>
        <main className="flex flex-col gap-4">
          <div className="lg:min-h-96 flex flex-col justify-center gap-6 bg-logoColor-surfaceMuted p-4">
            <p className="text-LargeP">
              A Loja de Projetos é um departamento da Hamilton Turola
              Arquitetura e Design (Turola & Turola Arquitetura Ltda - ME),
              empresa com 19 anos de experiencia em desenvolvimento de projetos,
              gerenciamento de obras e consultorias. Somos a Inovação na forma
              de prestar serviços de arquitetura.
            </p>
          </div>
        </main>
      </div>
    </Container>
  );
};

export default AboutUs;
