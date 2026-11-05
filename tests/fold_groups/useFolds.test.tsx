import { beforeEach, describe, expect, it, vi } from 'vitest';
import { db } from '../firestore/firestore.tsx';
import { useFolds } from '@/features/fold_groups/api/useFolds.tsx';
import { renderHook, waitFor } from '@testing-library/react';
import { Provider, createStore } from 'jotai';
import { ReactNode } from 'react';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { Fold } from '@/features/fold_groups/types.ts';

vi.mock('firebase/firestore', async (importOriginal) => {
	const actual = await importOriginal<typeof import('firebase/firestore')>();
	return { ...actual, onSnapshot: vi.fn(actual.onSnapshot) };
});

const onSnapshotSpy = vi.mocked(onSnapshot);

let store: ReturnType<typeof createStore>;
beforeEach(async () => {
	store = createStore();
	await fetch(
		'http://127.0.0.1:8080/emulator/v1/projects/demo-origami/databases/(default)/documents',
		{ method: 'DELETE' },
	);
});
const wrapper = ({ children }: { children: ReactNode }) => (
	<Provider store={store}>{children}</Provider>
);

describe('[Unit] useFolds hook', async () => {
	it('onSnapshot is only subscribed to once', async () => {
		const foldsRef = collection(db, 'Folds');
		await addDoc(foldsRef, { id: '1', groupId: '1', name: 'Main Group' } as Fold);
		await addDoc(foldsRef, { id: '2', groupId: '2', name: 'Main Group' } as Fold);
		const { result: first } = renderHook(() => useFolds(db), { wrapper });
		const { result: second } = renderHook(() => useFolds(db), { wrapper });

		await waitFor(() => {
			expect(first.current).toHaveLength(2);
			expect(second.current).toHaveLength(2);
			expect(onSnapshotSpy).toHaveBeenCalledTimes(1);
		});
	});
});
