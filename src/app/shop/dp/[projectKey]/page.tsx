"use client";
import MaintenanceDiv from "@/components/MaintenanceDiv";
import { NextPage } from "next";

interface Props {
  params: {
    [key: string]: string;
  };
}

const ProjectDetailsPage: NextPage<Props> = ({ params }) => {
  const { projectKey } = params;

  return <MaintenanceDiv page={`PRODUCT DETAILS WITH CODE: ${projectKey}`} />;
};

export default ProjectDetailsPage;
