import { ProjectsData } from "@/interface/Project";
import { firebase_app } from "@firebase/config";
import {
  getFirestore,
  doc,
  getDoc,
  collectionGroup,
  getDocs,
} from "firebase/firestore";

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
  let result = null;
  let error = null;

  try {
    const response = await getDocs(CollectionRef);
    result = response.docs.map((doc) => doc.data() as ProjectsData);
  } catch (error) {
    error = error;
  }

  return { result, error };
}
