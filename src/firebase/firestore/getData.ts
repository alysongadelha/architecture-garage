import {
  ProjectData,
  ProjectFullData,
  ProjectsData,
} from '@/interfaces/Project'
import { firebase_app } from '@firebase/config'
import {
  getFirestore,
  doc,
  getDoc,
  collectionGroup,
  getDocs,
} from 'firebase/firestore'
import { getDefaultImage, getImageList } from './getBucket'

const db = getFirestore(firebase_app)

export async function getDocument(collection: string, id: string) {
  let project: ProjectFullData | null = null
  const error = ''

  const docRef = doc(db, collection, id)

  try {
    const fetchProject = (await getDoc(docRef)).data() as ProjectData

    if (!fetchProject) throw new Error(`Cannot find project with id ${id}`)

    const { imageArray } = await getImageList(fetchProject.imageCluster)

    project = { ...fetchProject, imageArray }
  } catch (error) {
    console.error(error)

    if (error instanceof Error) {
      error = error.message
    }
  }

  return { project, error }
}

export async function getCollection(collection: string) {
  let projects: ProjectsData[] = []
  const error = ''

  const collectionRef = collectionGroup(db, collection)

  try {
    const response = await getDocs(collectionRef)
    const fetchProjects = response.docs.map((doc) => doc.data() as ProjectsData)
    const projectsDataFull = fetchProjects.map(async (project) => {
      const { image = '' } = await getDefaultImage(project.image, '.jpg')
      return {
        ...project,
        image,
      } as ProjectsData
    })

    projects = await Promise.all(projectsDataFull)

    if (!projects) throw new Error('Error when getting project data')
  } catch (error) {
    if (error instanceof Error) error = error.message
  }

  return { projects, error }
}
