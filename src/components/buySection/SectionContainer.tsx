type Props = {
  children: React.ReactNode
}
const SectionContainer = ({ children }: Props) => {
  return (
    <section className=' w-full justify-center bg-[#D9D9D9]'>
      <div className='container mx-auto w-10/12 py-11'>{children}</div>
    </section>
  )
}

export default SectionContainer
