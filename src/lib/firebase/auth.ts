import app from './app.ts';
import { GoogleAuthProvider, getAuth, connectAuthEmulator } from 'firebase/auth';

export const auth = getAuth(app);
auth.languageCode = 'en';

// Check to use emulators
if (import.meta.env.VITE_USE_EMULATORS === 'true') {
	connectAuthEmulator(auth, 'http://localhost:9099');
}

export const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account',
});
