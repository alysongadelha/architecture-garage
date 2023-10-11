"use client";

import { useState } from "react";
import ItemsIncluded from "./ItemsIncluded";
import Optionals from "./Optionals";
import ProjectDefinition from "./ProjectDefinition";
import SectionContainer from "./SectionContainer";
import Modal from "../Modal";
import { AdditionalOptions, ProjectType } from "@/interfaces/Project";

type Props = {
  projectTypes: ProjectType;
  additionalOptions: AdditionalOptions;
};

const weDontOffer = [
  "Planta de Locação (Deve ser providenciado localmente por um profissional habilitado);",
  "RRT - Registro de Responsabilidade técnica para Construção (Deve ser providenciado por um engenheiro que irá ser responsável por construir);",
  "Projeto de Estrutura (Deve ser providenciado localmente por um profissional habilitado);",
  "Projeto Hidráulico (Deve ser providenciado localmente por um profissional habilitado);",
  "Projeto Sanitário (Deve ser providenciado localmente por um profissional habilitado);",
  "Projeto de Climatização (Deve ser providenciado localmente por um profissional habilitado);",
  "Projeto Elétrico (Deve ser providenciado localmente por um profissional habilitado);",
  "Projeto de Combate a incêndio (Deve ser providenciado localmente por um profissional habilitado);",
  "Projeto de Rede lógica  e comunicação (Deve ser providenciado localmente por um profissional habilitado);",
];

const BuySection = ({ projectTypes, additionalOptions }: Props) => {
  const [selectValue, setSelectValue] = useState<number>(0);
  const [isShowModal, setIsShowModal] = useState(false);

  const handleSelectChange = (value: number) => {
    setSelectValue(value);
  };

  return (
    <>
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <ProjectDefinition
            projectTypeOptions={projectTypes}
            selectionAction={handleSelectChange}
          />
          <ItemsIncluded />
          <Optionals
            additionalOptions={additionalOptions}
            projectTypeValue={selectValue}
            setModal={() => setIsShowModal((isShowModal) => !isShowModal)}
          />
        </div>
      </SectionContainer>
      <Modal
        isShowModal={isShowModal}
        onRequestClose={() => setIsShowModal(false)}
        title="O que não fornecemos:"
      >
        <div>
          <p>Os itens abaixo, não são fornecidos pela “AG”, </p>
          <ul className="bullet my-4">
            {weDontOffer.map((offer, index) => (
              <li
                key={index}
                className="ml-4 before:top-[4px] before:h-3 before:w-3"
              >
                {offer}
              </li>
            ))}
          </ul>
        </div>
      </Modal>
    </>
  );
};

export default BuySection;
