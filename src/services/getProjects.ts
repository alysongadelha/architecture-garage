import { ProjectsData } from '@/interfaces/Project'

export const getProjects = async (basePath: string) => {
  const protocol = basePath === 'localhost:3236' ? 'http://' : 'https://'

  const fetchProject = await fetch(`${protocol}${basePath}/api/shop/projects`, {
    method: 'GET',
    cache: 'no-store',
  })

  const { result, error }: { result: ProjectsData[]; error: string } =
    await fetchProject.json()

  return { result, error }
}
