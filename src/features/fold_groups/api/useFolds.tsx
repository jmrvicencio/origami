import { useEffect } from 'react';
import { collection, onSnapshot, Firestore } from 'firebase/firestore';
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
					setFolds(snap.docs.map((d) => ({ id: d.id, ...d.data() }) as Fold));
				},
				(err) => {
					toast.error(err.message);
					console.error(err);
				},
			);
			setFoldsFetched(true);

			return unsub;
		} else {
			return;
		}
	}, []);

	return folds;
};
