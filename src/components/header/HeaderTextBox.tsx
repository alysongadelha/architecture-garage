interface Props {
  pageName: string;
}

const HeaderTextBox = ({ pageName }: Props) => (
  <div className="grid grid-cols-6 items-center gap-4 text-center">
    <div className="col-span-3">
      <div className="mt-2">
        <div className="">
          <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-gray-500">
            <h3 className="relative text-logoColor-grayAG">{pageName}</h3>
          </span>
        </div>
        <span className="text-logoColor-grayAG">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis
          fugit harum sapiente praesentium consequatur accusamus, adipisci
          voluptas illum dicta esse debitis, optio eius, nesciunt veniam odit
          quae tempore autem nisi!
        </span>
      </div>
    </div>
  </div>
);

export default HeaderTextBox;
