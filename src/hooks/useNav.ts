import { navigatingAtom, navigationFinishedAtom } from '@/store/store.ts';
import { useSetAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

export const useNav = () => {
	const nav = useNavigate();
	const setNavigating = useSetAtom(navigatingAtom);
	const setNavFinished = useSetAtom(navigationFinishedAtom);

	return (path: string) => {
		setNavigating(true);
		setNavFinished(false);
		nav(path);
	};
};
