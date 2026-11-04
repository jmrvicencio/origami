import * as firestore from 'firebase/firestore';
import test, { beforeEach } from 'node:test';
import { describe, expect, it, vi } from 'vitest';
import { db } from '../firestore/firestore.tsx';
import { useFolds } from '@/features/fold_groups/api/useFolds.tsx';
import { renderHook, waitFor } from '@testing-library/react';
import { Provider, createStore } from 'jotai';
import { ReactNode } from 'react';

vi.mock('firebase/firestore', async (importOriginal) => {
	const actual = await importOriginal<typeof import('firebase/firestore')>();
	return { ...actual, onSnapshot: vi.fn(actual.onSnapshot) };
});

let store: ReturnType<typeof createStore>;
beforeEach(() => {
	store = createStore();
});
const wrapper = ({ children }: { children: ReactNode }) => (
	<Provider store={store}>{children}</Provider>
);

const onSnapshotSpy = vi.mocked(firestore.onSnapshot);
beforeEach(() => onSnapshotSpy.mockClear());

describe('[Unit] useFolds hook', async () => {
	it('onSnapshot is only subscribed to once', async () => {
		const { result: first } = renderHook(() => useFolds(db), { wrapper });
		const { result: second } = renderHook(() => useFolds(db), { wrapper });

		await waitFor(() => {
			expect(first.current).toHaveLength(0);
			expect(second.current).toHaveLength(0);
			expect(onSnapshotSpy).toHaveBeenCalledTimes(1);
		});
	});
});
