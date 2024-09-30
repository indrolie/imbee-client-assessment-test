import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_CLIENT_APIKEY,
    authDomain: process.env.REACT_APP_FIREBASE_CLIENT_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_CLIENT_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_CLIENT_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_CLIENT_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_CLIENT_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_CLIENT_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./firebase-messaging-sw.js')
    .then((registration) => {
        console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch((err) => {
        console.error('Service Worker registration failed:', err);
    });
}

export { messaging };