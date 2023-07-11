import { ProjectsData } from "@/interface/Project";
import { firebase_app } from "@firebase/config";
import {
  getFirestore,
  doc,
  getDoc,
  collectionGroup,
  getDocs,
} from "firebase/firestore";
import { getDefaultImage, getImageList } from "./getBucket";

const db = getFirestore(firebase_app);
export async function getDocument(collection: string, id: string) {
  let docRef = doc(db, collection, id);
  let result = null;
  let error = null;

  try {
    result = await getDoc(docRef);
  } catch (error) {
    error = error;
  }

  return { result, error };
}

export async function getCollection(collection: string) {
  let CollectionRef = collectionGroup(db, collection);
  let projects = null;
  let error = null;

  try {
    const response = await getDocs(CollectionRef);
    const projectsData = response.docs.map((doc) => doc.data() as ProjectsData);
    const projectsDataFull = projectsData.map(async (project) => {
      const { imageArray } = await getImageList(project.image);
      return {
        ...project,
        image: imageArray[0],
      };
    });
    projects = await Promise.all(projectsDataFull);
  } catch (error) {
    error = error;
  }

  return { projects, error };
}
