import { ProjectData, ProjectsData } from '@/interfaces/Project'
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
  const docRef = doc(db, collection, id)
  let result = null
  let responseError = null

  try {
    const response = (await getDoc(docRef)).data() as ProjectData
    const { imageArray } = await getImageList(response.imageCluster)
    result = { ...response, imageArray }
  } catch (error) {
    responseError = error
  }

  return { result, responseError }
}

export async function getCollection(collection: string) {
  const collectionRef = collectionGroup(db, collection)
  let result = null
  let responseError = null

  try {
    const response = await getDocs(collectionRef)
    const projectsData = response.docs.map((doc) => doc.data() as ProjectsData)
    const projectsDataFull = projectsData.map(async (project) => {
      const { image } = await getDefaultImage(project.image, '.jpg')
      return {
        ...project,
        image,
      }
    })
    result = await Promise.all(projectsDataFull)
  } catch (error) {
    responseError = error
  }

  return { result, responseError }
}
