import { auth, provider } from '@/lib/firebase/auth.ts';
import { getAdditionalUserInfo, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '@/app/Routes.tsx';
import { FirebaseError } from 'firebase/app';
import { toast } from 'react-hot-toast';

const Home = () => {
	const nav = useNavigate();
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
			setUser(currentUser);
		});

		return unsubscribe;
	}, [auth]);

	const handleSignInClicked = async () => {
		try {
			const result = await signInWithPopup(auth, provider);
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const idp = getAdditionalUserInfo(result);

			console.log(result.user);
			console.log(idp);

			nav(`/${ROUTES.APP}`);
		} catch (err) {
			const error = err as FirebaseError;
			console.error(error);
			toast.error(error.message);

			throw err;
		}
	};

	return (
		<main className="bg-folds-900 flex h-dvh w-dvw items-center justify-center text-white">
			<div className="cursor-pointer" onClick={handleSignInClicked}>
				Welcome to index!
			</div>
		</main>
	);
};

export default Home;
