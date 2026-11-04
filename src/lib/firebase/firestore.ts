import {
	connectFirestoreEmulator,
	Firestore,
	getFirestore,
	initializeFirestore,
	persistentLocalCache,
	persistentMultipleTabManager,
} from 'firebase/firestore';
import app from './app.ts';

let db: Firestore;
try {
	db = initializeFirestore(app, {
		localCache: persistentLocalCache({
			/*settings*/
			tabManager: persistentMultipleTabManager(),
		}),
	});
} catch {
	// Handles hot reloading during dev. If Firestore
	// has already been initialized, get Firestore instead.
	db = getFirestore(app);
}

export { db };

// Run emulator if enabled in .env
if (import.meta.env.VITE_USE_EMULATORS === 'true') {
	console.log('using firestore emulator');
	connectFirestoreEmulator(db, 'localhost', 8080);
}
