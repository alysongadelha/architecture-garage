type WrapperProps = { children: React.ReactNode }

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <main className='container mx-auto flex w-10/12 flex-col items-center'>
      {children}
    </main>
  )
}

export default Wrapper
