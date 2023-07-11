type Props = { children: React.ReactNode };

const Wrapper = (props: Props) => {
  return (
    <main className="container mx-auto flex w-10/12 flex-col items-center">
      {props.children}
    </main>
  );
};

export default Wrapper;
