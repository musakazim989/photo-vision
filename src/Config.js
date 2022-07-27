import { initializeApp } from "firebase/app"
import { getStorage, ref } from "firebase/storage"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCprYlDK8_Knp2t7MX9DZ3dZ-mjhX8dPjk",
  authDomain: "photo-vison.firebaseapp.com",
  projectId: "photo-vison",
  storageBucket: "photo-vison.appspot.com",
  messagingSenderId: "364400388402",
  appId: "1:364400388402:web:92575f9205f402d048cf2b",
}

const app = initializeApp(firebaseConfig)

const storage = getStorage(app)

export { storage, ref, getAuth, createUserWithEmailAndPassword }
