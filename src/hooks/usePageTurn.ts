import { pageExitAtom, pageId as pageIdAtom, pageInitAtom, pageStartAtom } from '@/store/store.ts';
import { useAtom } from 'jotai';
import { v4 as uuid } from 'uuid';

export const usePageTurn = () => {
	const [start, setStart] = useAtom(pageStartAtom);
	const [exit, setExit] = useAtom(pageExitAtom);

	const animate = { x: '0%' };

	const turnPage = (dir: 'left' | 'right' | 'none') => {
		if (dir == 'left') {
			setStart({ x: '100%' });
			setExit({ x: '-100%' });
		} else if (dir == 'right') {
			setStart({ x: '-100%' });
			setExit({ x: '100%' });
		} else {
			setStart({});
			setExit({});
		}
	};

	return {
		start,
		exit,
		animate,
		turnPage,
	};
};
