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

        const response = await fetch(process.env.REACT_APP_IMBEE_BACKEND + '/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token })
        });
        if (!response.ok) {
            throw new Error('Failed to subscribe');
        }
        return await response.json();
    },
    broadcastMessage: async(message) => {
        console.log('Broadcasting this message: ', message)

        const response = await fetch(process.env.REACT_APP_IMBEE_BACKEND + '/broadcast', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message })
        });
        if (!response.ok) {
            throw new Error('Failed to broadcast');
        }
        return await response.json();
    }
};

export default api;