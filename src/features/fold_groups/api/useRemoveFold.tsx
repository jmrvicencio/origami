import { collection, deleteDoc, doc, Firestore } from 'firebase/firestore';
import { FOLDS } from '../constants.ts';

export const useRemoveFold = (db: Firestore) => {
	const removeFold = async (id: string) => {
		const foldCol = collection(db, FOLDS);
		const foldRef = doc(foldCol, id);
		return await deleteDoc(foldRef);
	};

	return { removeFold };
};
