import { atom } from 'jotai';
import { Fold } from '../types.ts';

export const foldAtom = atom<Fold[]>([]);
export const foldFetchedAtom = atom(false);
