import { useSetAtom } from 'jotai';
import { modalAtom } from './modalAtom.ts';

export const useModal = () => {
	const setModal = useSetAtom(modalAtom);

	const resetModal = () => {
		setModal(undefined);
	};

	return {
		resetModal,
	};
};
