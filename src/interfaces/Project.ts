import { StaticImageData } from "next/image";

type customFields = {
  label: string;
  value: number;
};

export type ProjectsData = {
  id: string;
  projectId: string;
  name: string;
  image: string;
  teaser: string;
  baths: string;
  beds: string;
  squareMeters: string;
  stories: string;
  createdAt: string;
  status: string;
};

type icon = {
  id: string;
  iconName: string;
  iconValue: string | number;
  alt: string;
};

export type ProjectTypes = customFields[];
export type AdditionalOptions = customFields[];

export type ProjectData = {
  additionalOptions: AdditionalOptions;
  projectTypes: ProjectTypes;
  imageCluster: string;
  longDescription: string[];
  name: string;
  assets: icon[];
};

export type ProjectFullData = ProjectData & {
  imageArray: StaticImageData[] | string[];
};
