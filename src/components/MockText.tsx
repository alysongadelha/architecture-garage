interface Props {
  page: string;
}

const MockText = ({ page }: Props) => (
  <main className="flex min-h-screen flex-col items-center justify-around">
    <h1 className="font-heading text-2xl text-logoColor-grayAG">{page}</h1>
    <div className="items-center justify-around self-center">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        voluptates alias saepe, ducimus, cupiditate sit voluptatem quae deserunt
        eum omnis vero error maxime quibusdam ut odit dignissimos, velit
        officiis rerum?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        voluptates alias saepe, ducimus, cupiditate sit voluptatem quae deserunt
        eum omnis vero error maxime quibusdam ut odit dignissimos, velit
        officiis rerum?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        voluptates alias saepe, ducimus, cupiditate sit voluptatem quae deserunt
        eum omnis vero error maxime quibusdam ut odit dignissimos, velit
        officiis rerum?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        voluptates alias saepe, ducimus, cupiditate sit voluptatem quae deserunt
        eum omnis vero error maxime quibusdam ut odit dignissimos, velit
        officiis rerum?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        voluptates alias saepe, ducimus, cupiditate sit voluptatem quae deserunt
        eum omnis vero error maxime quibusdam ut odit dignissimos, velit
        officiis rerum?
      </p>
    </div>
  </main>
);

export default MockText;
