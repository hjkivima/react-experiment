import { initializeApp } from "firebase/app";
import {
  DocumentData,
  WithFieldValue,
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "4",
  appId: "",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export type Page = "consent" | "instruction";

export type SendDataType = {
  username: string;
  pageNumber: number;
  currentPage: Page;
};

export const sendData = async function <
  T extends WithFieldValue<DocumentData> & SendDataType
>(
  data: T,
  collectionName: string,
  setDataError: React.Dispatch<React.SetStateAction<unknown>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setPageNumber: React.Dispatch<React.SetStateAction<number>>,
  stopLoading: boolean = true
) {
  try {
    const collectionRef = collection(db, collectionName);

    const dataWithTimestamp = {
      ...data,
      createdAt: serverTimestamp(),
    };

    await addDoc(collectionRef, dataWithTimestamp);
    setPageNumber(p => p + 1);
  } catch (error) {
    setDataError(error);
    console.log(error);
  } finally {
    if (stopLoading) setLoading(false);
  }
};
