import { Container } from '@/components/container/Container'

type Props = {}

const ShippingPolicy = (props: Props) => {
  return (
    <Container>
      <div className='flex w-full flex-col gap-5 py-10'>
        <h2 className='text-heading2 uppercase'>POLÍTICA DE ENVIO</h2>
        <main className='flex flex-col gap-4'>
          <div className='flex flex-col justify-center gap-6 bg-logoColor-surfaceMuted p-4 lg:h-96'>
            <p className='text-LargeP'>
              A “AG” trabalha somente com arquivos digitais, portanto o envio se
              deve somente por meio de formato digital, o cliente pode escolher
              entre receber por e-mail e/ou por link para download.
            </p>
            <p className='text-LargeP'>
              O tempo de envio dos arquivos digitais é de 1 a 2 dias úteis,
              certifique-se que nos forneceu um e-mail válido para que possa
              receber seu projeto sem demoras ou problemas.
            </p>
            <p className='text-LargeP'>
              Caso haja a demora no recebimento, pedimos que chequem as caixas
              de “spam” por garantia, se mesmo assim não tiver recebido dentro
              do prazo estipulado de 1 a 2 dias úteis, entre em contato conosco
              pela nossa página de contato com as informações em mãos, que
              faremos nossos maiores esforços para que receba seu projeto o mais
              rápido possivel.
            </p>
          </div>
        </main>
      </div>
    </Container>
  )
}

export default ShippingPolicy
