import { atom } from 'jotai';

interface ScreenWidth {
	isSm: boolean;
	isMd: boolean;
	isLg: boolean;
	isXl: boolean;
}

export const appWidthAtom = atom<ScreenWidth>({ isSm: false, isMd: false, isLg: false, isXl: false });
