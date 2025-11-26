importScripts("https://www.gstatic.com/firebasejs/12.6.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.6.0/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyA5daFUKCFePdkZ1Zn1YmhAk39bHu0A6UM",
    authDomain: "newchatapp-e7614.firebaseapp.com",
    projectId: "newchatapp-e7614",
    storageBucket: "newchatapp-e7614.firebasestorage.app",
    messagingSenderId: "122269204382",
    appId: "1:122269204382:web:feac24c3b6f2f2ca9b608f",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log("Background Message:", payload);
    self.registration.showNotification(payload.notification.title, {
        body: payload.notification.body,
        icon: "final_image.png"
    });
});

