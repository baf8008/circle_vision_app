import firebase from 'firebase/app';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyAZR9xhoAZqCfzCrWavhQ5XrL3DH0gfjeE',
	authDomain: 'circle-of-vision.firebaseapp.com',
	projectId: 'circle-of-vision',
	storageBucket: 'circle-of-vision.appspot.com',
	messagingSenderId: '310859737949',
	appId: '1:310859737949:web:26db5bbb4b81a1af5296b4',
	measurementId: 'G-4J1X9N1346',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
