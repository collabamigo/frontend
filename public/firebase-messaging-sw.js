importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');
const firebaseConfig = {
  apiKey: 'AIzaSyBGsVMVNqqMgutGKJXEG13r6oGcEtN3hBY',
  authDomain: 'collabamigo-testing.firebaseapp.com',
  projectId: 'collabamigo-testing',
  storageBucket: 'collabamigo-testing.appspot.com',
  messagingSenderId: '109135106784',
  appId: '1:109135106784:web:98615d77bf7c49dc59f685',
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/img/avatar.png',
  };
  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});
