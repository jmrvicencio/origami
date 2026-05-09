// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBrN3xcDqdVAJEGYpvXb-3r_hKIL_UrqCA',
	authDomain: 'origami-ddde3.firebaseapp.com',
	projectId: 'origami-ddde3',
	storageBucket: 'origami-ddde3.firebasestorage.app',
	messagingSenderId: '11246339329',
	appId: '1:11246339329:web:2d68441056aa4351c80700',
	measurementId: 'G-N0WJN4VJ51',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
