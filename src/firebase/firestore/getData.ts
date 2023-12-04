import { ProjectData, ProjectsData } from "@/interfaces/Project";
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
    const response = (await getDoc(docRef)).data() as ProjectData;
    const { imageArray } = await getImageList(response.imageCluster);
    result = { ...response, imageArray };
  } catch (error) {
    error = error;
  }

  return { result, error };
}

export async function getCollection(collection: string) {
  let CollectionRef = collectionGroup(db, collection);
  let result = null;
  let error = null;

  try {
    const response = await getDocs(CollectionRef);
    const projectsData = response.docs.map((doc) => doc.data() as ProjectsData);
    const projectsDataFull = projectsData.map(async (project) => {
      const { image, error } = await getDefaultImage(project.image, ".jpg");
      return {
        ...project,
        image,
      };
    });
    result = await Promise.all(projectsDataFull);
  } catch (error) {
    error = error;
  }

  return { result, error };
}
