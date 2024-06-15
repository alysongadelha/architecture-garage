'use server'
import { getDocument } from '@/firebase/firestore/getData'
import { ProjectFullData } from '@/interfaces/Project'

export const getProjectDetailsAction = async (
  projectKey: string,
): Promise<ProjectFullData> => {
  const { project, error } = await getDocument('projectDetail', projectKey)

  if (error) throw new Error(error)
  if (project === null) throw new Error(error)

  return project
}

export const getProjectDetails = async (
  projectKey: string,
  basePath: string,
) => {
  const protocol = basePath === 'localhost:3236' ? 'http://' : 'https://'
  const fetchProject = await fetch(
    `${protocol}${basePath}/api/shop/projects/${projectKey}`,
    {
      method: 'GET',
    },
  )

  const { result, error }: { result: ProjectFullData; error: unknown } =
    await fetchProject.json()

  return { result, error }
}
