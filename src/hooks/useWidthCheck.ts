import { appWidthAtom } from '@/store/screenWidth.ts';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

export const useWidthCheck = () => {
	const setAppWidth = useSetAtom(appWidthAtom);

	useEffect(() => {
		const small = window.matchMedia('(min-width: 640px)');
		const medium = window.matchMedia('(min-width: 768px)');
		const large = window.matchMedia('(min-width: 1024px)');
		const extraLarge = window.matchMedia('(min-width: 1280px)');

		const listener = () => {
			setAppWidth({
				isSm: small.matches,
				isMd: medium.matches,
				isLg: large.matches,
				isXl: extraLarge.matches,
			});

			console.log(
				`sm ${small.matches ? '🟩' : '🟥'} : md ${medium.matches ? '🟩' : '🟥'} : lg ${large.matches ? '🟩' : '🟥'} : xl ${extraLarge.matches ? '🟩' : '🟥'}`,
			);
		};

		listener();

		small.addEventListener('change', listener);
		medium.addEventListener('change', listener);
		large.addEventListener('change', listener);
		extraLarge.addEventListener('change', listener);

		return () => {
			small.removeEventListener('change', listener);
			medium.removeEventListener('change', listener);
			large.removeEventListener('change', listener);
			extraLarge.removeEventListener('change', listener);
		};
	}, []);
};
