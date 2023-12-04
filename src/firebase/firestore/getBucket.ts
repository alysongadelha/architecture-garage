import { firebase_app } from "../config";
import { getDownloadURL, getStorage, listAll, ref } from "firebase/storage";

const storage = getStorage(firebase_app);
type FileExtension = ".jpg" | ".jpeg" | ".png";

export const getDefaultImage = async (
  folder: string,
  fileExtension: FileExtension
) => {
  const pathReference = ref(
    storage,
    `projects/${folder}/01_${folder}${fileExtension}`
  );
  let image;
  let error;

  try {
    image = await getDownloadURL(pathReference);
  } catch (error) {
    error = error;
  }

  return { image, error };
};

export const getImageList = async (folder: string) => {
  const listRef = ref(storage, `projects/${folder}`);
  let imageArray: Array<any> = [];
  let error;
  try {
    const response = await listAll(listRef);
    const requests = response.items.map(async (itemRef) =>
      getDownloadURL(itemRef)
    );
    imageArray = await Promise.all(requests);
  } catch (error) {
    error = error;
  }
  return { imageArray, error };
};
