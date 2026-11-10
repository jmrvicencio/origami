import {
	addDoc,
	collection,
	doc,
	DocumentReference,
	Firestore,
	setDoc,
	updateDoc,
} from 'firebase/firestore';
import { v4 as uuid } from 'uuid';
import { Fold } from '../types.ts';
import { FOLDS } from '../constants.ts';

export const useAddFolds = (db: Firestore) => {
	const foldCol = collection(db, FOLDS);

	const addFold = async (fold: Fold): Promise<[result: Promise<void>, id: string]> => {
		const id = uuid();
		const foldRef = doc(foldCol, id);
		fold.id = id;

		return await [setDoc(foldRef, fold), id];
	};

	const setFold = async (id: string, fold: Fold) => {
		const foldRef = doc(foldCol, id);
		return await setDoc(foldRef, fold);
	};

	const updateFold = async (id: string, data: { [x: string]: any }) => {
		const foldRef = doc(foldCol, id) as DocumentReference<Fold>;
		return await updateDoc(foldRef, data);
	};

	return { addFold, setFold, updateFold };
};
