"use client";
import MockText from "@/components/MockText";
import { NextPage } from "next";

interface Props {
  params: {
    [key: string]: string;
  };
}

const ProjectDetailsPage: NextPage<Props> = ({ params }) => {
  const { projectKey } = params;

  return <MockText page={`PRODUCT DETAILS WITH CODE: ${projectKey}`} />;
};

export default ProjectDetailsPage;
