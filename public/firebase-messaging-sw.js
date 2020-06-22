
// importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/5.9.4/firebase-messaging.js");

// firebase.initializeApp({
//   apiKey: "AIzaSyDQ-sDFP703_3PseNEWctxOCoBs27EKwpA",
//   authDomain: "agroline-9e9fb.firebaseapp.com",
//   databaseURL: "https://agroline-9e9fb.firebaseio.com",
//   projectId: "agroline-9e9fb",
//   storageBucket: "agroline-9e9fb.appspot.com",
//   messagingSenderId: "483433064425",
//   appId: "1:483433064425:web:bd3a957d80aece21058d78",
//   measurementId: "G-GBFWBG3TCL"
// });

// const messaging = firebase.messaging();

// messaging.setBackgroundMessageHandler(function(payload) {
//   const promiseChain = clients
//     .matchAll({
//       type: "window",
//       includeUncontrolled: true
//     })
//     .then(windowClients => {
//       for (let i = 0; i < windowClients.length; i++) {
//         const windowClient = windowClients[i];
//         windowClient.postMessage(payload);
//       }
//     })
//     .then(() => {
//       return registration.showNotification("my notification title");
//     });
//   return promiseChain;
// });

// self.addEventListener('notificationclick', function(event) {
//   // do what you want
//   // ...
// });
