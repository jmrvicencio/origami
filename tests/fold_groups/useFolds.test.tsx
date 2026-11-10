import { beforeEach, describe, expect, it, vi } from 'vitest';
import { db } from '../firestore/firestore.tsx';
import { useFolds } from '@/features/fold_groups/api/useFolds.tsx';
import { renderHook, waitFor } from '@testing-library/react';
import { Provider, createStore } from 'jotai';
import { ReactNode } from 'react';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { Fold } from '@/features/fold_groups/types.ts';
import { useRemoveFold } from '@/features/fold_groups/api/useRemoveFold.tsx';
import { useAddFolds } from '@/features/fold_groups/api/useAddFold.tsx';

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

describe('[Integration] Folds hooks are working together', async () => {
	it('onSnapshot is only subscribed to once', async () => {
		const foldsRef = collection(db, 'Folds');
		const foldData: Fold = { id: '', groupId: '1', name: 'First Group' };
		const { result: addFold } = renderHook(() => useAddFolds(db), { wrapper });

		const [result1, fold1Id] = await addFold.current.addFold(foldData);
		const [result2, fold2Id] = await addFold.current.addFold({
			id: '',
			groupId: '2',
			name: 'Second Group',
		} as Fold);

		const { result: first } = renderHook(() => useFolds(db), { wrapper });
		const { result: second } = renderHook(() => useFolds(db), { wrapper });

		await waitFor(() => {
			expect(Object.keys(first.current)).toHaveLength(2);
			expect(Object.keys(second.current)).toHaveLength(2);
			expect(first.current[fold1Id].name).toBe('First Group');
			expect(first.current[fold1Id].id).toBe(fold1Id);
			expect(first.current[fold1Id].groupId).toBe('1');
			expect(onSnapshotSpy).toHaveBeenCalledTimes(1);
		});

		const { result: removeFold } = renderHook(() => useRemoveFold(db), { wrapper });
		await removeFold.current.removeFold(fold1Id);

		await waitFor(() => {
			expect(Object.keys(first.current)).toHaveLength(1);
		});

		await removeFold.current.removeFold(fold2Id);

		await waitFor(() => {
			expect(Object.keys(first.current)).toHaveLength(0);
		});
	});
});
