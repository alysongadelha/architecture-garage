type Props = {
  children: React.ReactNode;
};

const CardContainer = ({ children }: Props) => {
  return (
    <section className=" grid grid-cols-1 gap-x-3 gap-y-14  md:grid-cols-2 lg:grid-cols-3">
      {children}
    </section>
  );
};

export default CardContainer;
