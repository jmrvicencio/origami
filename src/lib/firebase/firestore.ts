import {
	connectFirestoreEmulator,
	initializeFirestore,
	persistentLocalCache,
	persistentMultipleTabManager,
} from 'firebase/firestore';
import app from './app.ts';

export const db = initializeFirestore(app, {
	localCache: persistentLocalCache({
		/*settings*/
		tabManager: persistentMultipleTabManager(),
	}),
});

// Run emulator if enabled in .env
if (import.meta.env.VITE_USE_EMULATORS === 'true') {
	console.log('using firestore emulator');
	connectFirestoreEmulator(db, 'localhost', 8080);
}
