import { createStore, atom } from 'jotai';

export const appStore = createStore();

export const navigatingAtom = atom<boolean>(false);
export const navigationFinishedAtom = atom<boolean>(false);
