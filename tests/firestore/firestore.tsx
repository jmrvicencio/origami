import { initializeApp } from 'firebase/app';
import {
	initializeFirestore,
	connectFirestoreEmulator,
	memoryLocalCache,
} from 'firebase/firestore';

const app = initializeApp({ projectId: 'demo-origami' });
export const db = initializeFirestore(app, { localCache: memoryLocalCache() });
connectFirestoreEmulator(db, '127.0.0.1', 8080);
