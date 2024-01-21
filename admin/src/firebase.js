import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDj-i3orNXdIojUjFV8sKoMVNu_Hsv-G2c",
    authDomain: "netflix-3359f.firebaseapp.com",
    projectId: "netflix-3359f",
    storageBucket: "netflix-3359f.appspot.com",
    messagingSenderId: "1074000604397",
    appId: "1:1074000604397:web:6e975c00969a50a91430e4",
    measurementId: "G-NZTWYLCYDG",
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

export {storage};
