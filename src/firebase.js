import {initializeApp} from 'firebase/app' 
import {getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from 'firebase/auth' 

const firebaseConfig = {
  apiKey: "AIzaSyC9X859Ht_-l3_yTIEsygMwyn8akVDNzYU",
  authDomain: "whatsapp-clone-e746e.firebaseapp.com",
  projectId: "whatsapp-clone-e746e",
  storageBucket: "whatsapp-clone-e746e.appspot.com",
  messagingSenderId: "55678962546",
  appId: "1:55678962546:web:28cbc46a318f0af3a46beb",
  measurementId: "G-5H9S79LJ7Q"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth()
const provider = new GoogleAuthProvider()

export default db
export {auth, provider}
