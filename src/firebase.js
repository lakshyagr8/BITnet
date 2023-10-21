import {initializeApp} from "firebase/app"
import { getAuth } from "firebase/auth"
import { GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDETGYi5o8PLQlMcKGWtFj0P6jwKnFApF0",
    authDomain: "bitbook-a6c64.firebaseapp.com",
    projectId: "bitbook-a6c64",
    storageBucket: "bitbook-a6c64.appspot.com",
    messagingSenderId: "827095050990",
    appId: "1:827095050990:web:f1f909e0dac9e0980161ff",
    measurementId: "G-4QT4QCNNSV"
};
const firebaseApp=initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider= new GoogleAuthProvider();
const db=getFirestore(firebaseApp);
export {auth,provider}
export default db;
