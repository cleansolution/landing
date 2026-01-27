import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC-PjUJ5Pl8lIN2NlTvPogHwJw_mAzCRfc",
  authDomain: "cleansolution-d9c89.firebaseapp.com",
  projectId: "cleansolution-d9c89",
  storageBucket: "cleansolution-d9c89.firebasestorage.app",
  messagingSenderId: "906024334018",
  appId: "1:906024334018:web:2a93b96b0c3d5e0273415b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;
