import { getToken } from "firebase/messaging";
import { messaging } from "../helpers/firebase";

async function getFirebaseToken() {
    try {
        const token = await getToken(messaging, { vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY });
        
        if (token) return token
        else throw new Error('No registration token available. Request permission to generate one.')
    } catch (error) {
        console.error('Error generating FCM token: ', error);
    }
}

const api = {
    subscribeToNotification: async () => {
        const token = await getFirebaseToken()
        console.log('The token: ', token)
    }
};

export default api;