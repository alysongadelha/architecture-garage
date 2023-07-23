import { Container } from "@/components/container/Container";

const AboutUs = () => {
  return (
    <Container>
      <div className="flex w-full flex-col gap-5">
        <div className="flex w-full  justify-center px-10">
          <h1 className="text-heading1 uppercase">Sobre Nós</h1>
        </div>
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="flex flex-col gap-4">
            <div className="bg-slate-400 p-4 text-lg lg:min-h-[401px] lg:w-[214px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              suscipit placeat dicta, dolore vero beatae molestiae fugit
              repellendus quaerat.
            </div>
          </div>
          <main className="flex flex-col gap-4">
            <div className="flex min-h-[401px] flex-col gap-2 bg-slate-400 p-4">
              <p className="text-lg ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                quae deleniti maiores sit sed excepturi iusto praesentium cum,
                neque veritatis illum nisi quaerat. Saepe quisquam eligendi
                voluptates ducimus accusamus delectus.
              </p>
              <p className="text-lg ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                quae deleniti maiores sit sed excepturi iusto praesentium cum,
                neque veritatis illum nisi quaerat. Saepe quisquam eligendi
                voluptates ducimus accusamus delectus.
              </p>
              <p className="text-lg ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                quae deleniti maiores sit sed excepturi iusto praesentium cum,
                neque veritatis illum nisi quaerat. Saepe quisquam eligendi
                voluptates ducimus accusamus delectus.
              </p>
              <p className="text-lg ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                quae deleniti maiores sit sed excepturi iusto praesentium cum,
                neque veritatis illum nisi quaerat. Saepe quisquam eligendi
                voluptates ducimus accusamus delectus.
              </p>
            </div>
          </main>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
