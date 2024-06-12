import { Container } from '@/components/container/Container'

const ReturnPolicy = () => {
  return (
    <Container>
      <div className='flex w-full flex-col gap-5 py-10'>
        <h2 className='text-heading2 uppercase'>POLÍTICA DE DEVOLUÇÃO</h2>
        <main className='flex flex-col gap-4'>
          <div className='flex flex-col justify-center gap-6 bg-logoColor-surfaceMuted p-4 lg:h-96'>
            <p className='text-LargeP'>
              Todas as transações são FINAIS. Não há reembolsos ou trocas. Por
              favor, certifique-se de escolher o projeto que melhor atenda às
              suas necessidades antes de finalizar a compra.
            </p>
            <p className='text-LargeP'>
              Você também pode entrar em contato conosco pelo e-mail “contato”
            </p>
          </div>
        </main>
      </div>
    </Container>
  )
}

export default ReturnPolicy
