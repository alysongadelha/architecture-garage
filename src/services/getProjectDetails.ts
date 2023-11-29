import { ProjectFullData, ProjectsData } from "@/interfaces/Project";

export const getProjects = async (basePath: string) => {
  const protocol = basePath === "localhost:3236" ? "http://" : "https://";

  const fetchProject = await fetch(`${protocol}${basePath}/api/shop/projects`, {
    method: "GET",
    next: { revalidate: 300 },
  });

  const { result, error }: { result: ProjectsData[]; error: any } =
    await fetchProject.json();

  return { result, error };
};

export const getProjectDetails = async (
  projectKey: string,
  basePath: string
) => {
  const protocol = basePath === "localhost:3236" ? "http://" : "https://";
  const fetchProject = await fetch(
    `${protocol}${basePath}/api/shop/projects/${projectKey}`,
    {
      method: "GET",
    }
  );

  const { result, error }: { result: ProjectFullData; error: any } =
    await fetchProject.json();

  return { result, error };
};
