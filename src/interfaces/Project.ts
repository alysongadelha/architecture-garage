import { StaticImageData } from "next/image";

type customFields = {
  label: string;
  value: number;
};

export type ProjectsData = {
  projectId: number;
  image: string;
  stories: number;
  description: string;
  beds: number;
  squareMeters: number;
  baths: number;
  name: string;
};

type icon = {
  id: string;
  iconName: string;
  iconValue: string | number;
  alt: string;
};

export type ProjectType = customFields[];
export type AdditionalOptions = customFields[];

export type ProjectData = {
  additionalOptions: AdditionalOptions;
  projectType: ProjectType;
  imageCluster: string;
  stories: number;
  description: string[];
  beds: number;
  squareMeters: string;
  baths: number;
  name: string;
  landSize: string;
  garage: number;
  gourmetArea: boolean;
  office: boolean;
  pool: boolean;
  icons: icon[];
};

export type ProjectFullData = ProjectData & {
  imageArray: StaticImageData[] | string[];
};
