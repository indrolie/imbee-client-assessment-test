importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

try {
    firebase.initializeApp({
        apiKey: 'AIzaSyAiqB6GYIbZeEpZ9cdnnr9b6qZJpAzOguA',
        authDomain: 'imbee-assessment-test.firebaseapp.com',
        projectId: 'imbee-assessment-test',
        storageBucket: 'imbee-assessment-test.appspot.com',
        messagingSenderId: '158649144617',
        appId: '1:158649144617:web:758acc9699a9a736869338'
    });

    const messaging = firebase.messaging();

    messaging.onBackgroundMessage((payload) => {
        console.log('Received background message: ', payload);
        
        const notificationTitle = payload.notification.title || 'Background Message';
        const notificationOptions = {
            body: payload.notification.body || 'You have a new message!',
            icon: '/imbee-logo.png'
        };

        self.registration.showNotification(notificationTitle, notificationOptions);
    });
} catch (error) {
    console.log('[Firebase-messaging-sw Error] ', error)
}