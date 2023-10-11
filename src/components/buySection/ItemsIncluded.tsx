import React from "react";

type Props = {};

const bulletItems = [
  {
    id: 1,
    name: "Plantas Baixas",
    insideItems: [
      { id: 6, name: "Layout Padrão", insideItems: [] },
      { id: 7, name: "Paginação de Piso", insideItems: [] },
      { id: 8, name: "Planta de Forro", insideItems: [] },
      { id: 9, name: "Planta de Alvenaria", insideItems: [] },
      { id: 10, name: "Ptos Elétricos", insideItems: [] },
      { id: 11, name: "Ptos Hidraulicos", insideItems: [] },
    ],
  },
  { id: 2, name: "Planta de Cobertura", insideItems: [] },
  { id: 3, name: "Cortes", insideItems: [] },
  { id: 4, name: "Fachadas", insideItems: [] },
  { id: 5, name: "Resumo de Esquadrias", insideItems: [] },
];

const bulletItemsDetails = [
  {
    id: 1,
    name: "Detalhes Construtivos",
    insideItems: [],
  },
  { id: 2, name: "Detalhes de Esquadrias", insideItems: [] },
  { id: 3, name: "Detalhes de Bancadas", insideItems: [] },
  { id: 4, name: "Quadro de Esquadrias", insideItems: [] },
  { id: 5, name: "Quadro de Bancadas", insideItems: [] },
  { id: 6, name: "Quadro de Acabamentos", insideItems: [] },
  { id: 7, name: "Perspectivas internas", insideItems: [] },
  { id: 8, name: "Planta Humanizada", insideItems: [] },
];

const ItemsIncluded = (props: Props) => {
  return (
    <div className="col-span-1 flex flex-col gap-10 lg:col-span-4">
      <div className="flex flex-col gap-3">
        <h4 className="text-heading4 font-bold">O que esta incluído</h4>
        <div className="flex gap-6">
          <ul className="bullet">
            {bulletItems.map(({ id, name, insideItems }) => (
              <li
                key={id}
                className="ml-4 text-xs before:top-[1px] before:h-3 before:w-3"
              >
                {name}
                {!!insideItems.length ? (
                  <ul>
                    {insideItems.map(({ id, name, insideItems }) => (
                      <li
                        key={id}
                        className="ml-4 text-[9px] leading-3 before:top-[2px] before:h-2 before:w-2"
                      >
                        {name}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
          <ul className="bullet">
            {bulletItemsDetails.map(({ id, name, insideItems }) => (
              <li
                key={id}
                className="ml-4 text-xs before:top-[1px] before:h-3 before:w-3"
              >
                {name}
                {!!insideItems.length ? (
                  <ul>
                    {insideItems.map(({ id, name, insideItems }) => (
                      <li
                        key={id}
                        className="ml-4 text-sm before:top-[5px] before:h-2 before:w-2"
                      >
                        {name}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItemsIncluded;
