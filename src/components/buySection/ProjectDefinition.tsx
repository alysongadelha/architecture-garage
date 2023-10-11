import React from "react";
import Select from "../form/Select";
import { ProjectType } from "@/interfaces/Project";

type Props = {
  selectionAction: (value: number) => void;
  projectTypeOptions: ProjectType;
};

const ProjectDefinition = ({ selectionAction, projectTypeOptions }: Props) => {
  return (
    <div className="col-span-1 flex flex-col gap-10 lg:col-span-4">
      <div className="flex flex-col gap-3">
        <h5 className="text-heading5 font-bold">
          Defina que tipo de projeto deseja
        </h5>
        <Select
          id="project-definition"
          options={projectTypeOptions}
          // @ts-ignore comment above the line of code that is causing the error
          selectionAction={selectionAction}
        />
      </div>
      <div className="flex flex-col gap-3">
        <h4 className="text-heading4 font-bold">Descrição</h4>
        <p className="text-xs">
          Arquivos digitais em PDF para que seja impresso ou visualizado em meio
          digita l (*Vem com uma permissão legal para alterar o projeto).
          Entregue digitalmente, normalmente entre 1 e 2 dias úteis.
        </p>
      </div>
    </div>
  );
};

export default ProjectDefinition;
