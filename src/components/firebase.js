import Firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyB4xCoqkSHV6zzkiUjaEmuIGMsrFbAHchI',
  authDomain: 'andreas-naustdal-website.firebaseapp.com',
  databaseURL: 'https://andreas-naustdal-website.firebaseio.com',
  projectId: 'andreas-naustdal-website',
  storageBucket: 'andreas-naustdal-website.appspot.com',
  messagingSenderId: '539013099091',
};
export const firebaseApp = Firebase.initializeApp(config);

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database();
