importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');


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

messaging.setBackgroundMessageHandler(function (payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.data.title;
    const notificationOptions = {
        body: payload.data.body,
        icon: './firebase-logo.png'
    };
    return self.registration.showNotification(notificationTitle,
        notificationOptions);
});

// self.addEventListener("push", (event) => {
//     localStorage.setItem("message", event.data.json())
// })

self.addEventListener('notificationclick', event => {
    console.log(event)
    return event;
});

