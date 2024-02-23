import { v4 } from "uuid"
import { initializeApp } from "firebase/app"
import { browserSessionPersistence, getAuth } from "firebase/auth"
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage"
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  orderBy,
  updateDoc,
  deleteDoc,
} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA2nhtKwaqfSH3guh7ACQXPchv_w7uW7ko",
  authDomain: "hectorapp-3a24d.web.app",
  projectId: "hectorapp-3a24d",
  storageBucket: "hectorapp-3a24d.appspot.com",
  messagingSenderId: "952480705318",
  appId: "1:952480705318:web:e3f0f946273554e8d7afe7",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const storage = getStorage(app)
export const auth = getAuth(app, {
  persistence: browserSessionPersistence,
})
export const db = getFirestore(app)

export async function uploadFile(file) {
  const refToUpload = v4()
  const storageRef = ref(storage, refToUpload)
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  return { url, ref: refToUpload }
}

export async function deleteFile(reference) {
  const storageRef = ref(storage, reference)
  await deleteObject(storageRef)
}

export async function add(collectionName, doc) {
  await addDoc(collection(db, collectionName), doc)
}

export async function update(collectionName, id, document) {
  const docRef = doc(db, collectionName, id)
  await updateDoc(docRef, document)
}
export async function remove(collectionName, id) {
  await deleteDoc(doc(db, collectionName, id))
}
export async function getAll(collectionName) {
  const q = query(collection(db, collectionName), orderBy("createdAt", "asc"))
  const querySnapshot = await getDocs(q)
  const data = []
  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), id: doc.id })
  })
  return data
}

export async function getById(collectionName, id) {
  const docRef = doc(db, collectionName, id)
  const docSnap = await getDoc(docRef)
  const document = docSnap.data()
  return { ...document, id: docSnap.id }
}
