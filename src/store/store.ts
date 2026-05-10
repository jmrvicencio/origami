import { createStore, atom } from 'jotai';
import { ValueKeyframesDefinition } from 'motion/react';
import { v4 as uuid } from 'uuid';

export const appStore = createStore();

export const navigatingAtom = atom<boolean>(false);
export const navigationFinishedAtom = atom<boolean>(false);
export const pageInitAtom = atom<boolean>(false);
export const pageId = atom<string>(uuid());
export const pageStartAtom = atom<{ x?: ValueKeyframesDefinition }>({});
export const pageExitAtom = atom<{ x?: ValueKeyframesDefinition }>({});
