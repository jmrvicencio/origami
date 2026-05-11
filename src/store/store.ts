import { createStore, atom } from 'jotai';
import { ValueKeyframesDefinition } from 'motion/react';
import { v4 as uuid } from 'uuid';

export const appStore = createStore();

// Loading Bar Navigation
export const navigatingAtom = atom<boolean>(false);
export const navigationFinishedAtom = atom<boolean>(false);

// Page Animation Atoms
export const pageStartAtom = atom<{ x?: ValueKeyframesDefinition }>({});
export const pageExitAtom = atom<{ x?: ValueKeyframesDefinition }>({});

// Modal Scroll Lock
export const ScrollLockAtom = atom<boolean>(false);
