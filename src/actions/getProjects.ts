'use server'

import { getCollection } from '@/firebase/firestore/getData'
import { ProjectsData } from '@/interfaces/Project'
import { unstable_cache } from 'next/cache'

export async function getProjectsActionImplementation() {
  const { projects, error } = await getCollection('projects')

  if (error) throw new Error(error)

  return projects
}

export const getProjectsAction = unstable_cache(
  getProjectsActionImplementation,
  ['getProjectsAction'],
  {
    tags: ['getProjectsAction'],
    revalidate: 60,
  },
)

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
