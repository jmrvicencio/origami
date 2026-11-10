import { useEffect } from 'react';
import { collection, Firestore, onSnapshot } from 'firebase/firestore';
import { Fold } from '../types.ts';
import { toast } from 'react-hot-toast';
import { useAtom } from 'jotai';
import { foldAtom, foldFetchedAtom } from '../store/foldAtom.tsx';

export const useFolds = (db: Firestore) => {
	const [folds, setFolds] = useAtom(foldAtom);
	const [foldsFetched, setFoldsFetched] = useAtom(foldFetchedAtom);

	useEffect(() => {
		if (!foldsFetched) {
			const foldsRef = collection(db, 'Folds');
			const unsub = onSnapshot(
				foldsRef,
				(snap) => {
					setFolds(
						snap.docs.reduce<Record<string, Fold>>((acc, curr) => {
							acc[curr.id] = { id: curr.id, ...curr.data() } as Fold;
							return acc;
						}, {}),
					);
				},
				(err) => {
					toast.error(err.message);
					console.error(err);
				},
			);
			setFoldsFetched(true);

			return unsub;
		} else {
			return () => {};
		}
	}, []);

	return folds;
};
