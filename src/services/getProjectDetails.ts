import { ProjectFullData } from "@/interfaces/Project";

export const getProject = async (id: string, basePath: string) => {
  const protocol = basePath === "localhost:3236" ? "http://" : "https://";
  const result = await fetch(
    `${protocol}${basePath}/api/shop/projects/images`,
    {
      method: "GET",
    }
  );
  const json = await result.json();

  return json;
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
