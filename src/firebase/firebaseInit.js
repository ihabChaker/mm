import firebase from 'firebase/app';
import 'firebase/messaging';

const config = {
    apiKey: "AIzaSyCI-IiPrkkHBN_2GW4NOaiyak1MjtDweEU",
    authDomain: "fir-tuto-5baa4.firebaseapp.com",
    projectId: "fir-tuto-5baa4",
    storageBucket: "fir-tuto-5baa4.appspot.com",
    messagingSenderId: "392972077634",
    appId: "1:392972077634:web:ae0753d29d90265d7f7bdb",
    measurementId: "G-5WE88XS4XS"
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

// next block of code goes here
export const requestFirebaseNotificationPermission = () =>
    new Promise((resolve, reject) => {
        messaging
            .requestPermission()
            .then(() => messaging.getToken())
            .then((firebaseToken) => {
                resolve(firebaseToken);
            })
            .catch((err) => {
                console.log(err)
                reject(err);
            });
    });

export const onMessageListener = () =>
    new Promise((resolve) => {
        messaging.onMessage((payload) => {
            console.log(payload)
            resolve(payload);
        });
    });