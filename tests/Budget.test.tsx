import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from '@/app/Routes.tsx';

import Budget from '@/app/routes/Budget.tsx';
import { format } from 'date-fns';
import { createStore, Provider } from 'jotai';
import { beforeEach } from 'node:test';
import { act, ReactNode } from 'react';

const MemoryRouterElement = (
	<MemoryRouter initialEntries={[ROUTES.BUDGET]}>
		<Routes>
			<Route path={ROUTES.BUDGET} element={<Budget />} />
		</Routes>
	</MemoryRouter>
);

describe('[UNIT] Budget page', () => {
	const { container } = render(MemoryRouterElement);
	const user = userEvent.setup();

	it('displays the current Month/Year at the top of the screen', async () => {
		const dateDisplay = screen.getByTestId('date-display');

		expect(dateDisplay).toBeInTheDocument();
		expect(dateDisplay).toHaveTextContent(format(new Date(Date.now()), 'MMMyyyy'));

		// const foldGroup = screen.findByRole('heading');
	});

	it('Can rename fold groups', async () => {
		render(MemoryRouterElement);
		const [foldGroup] = await screen.findAllByRole('heading', { level: 3, name: 'Group Name' });
		expect(foldGroup).toBeInTheDocument();

		// Press the first FoldGroup
		await act(async () => {
			await user.click(foldGroup);
		});

		// Expect a modal with rename
		const renameButton = await screen.getByLabelText('Rename');
	});
});

// let store: ReturnType<typeof createStore>;
// beforeEach(async () => {
// 	store = createStore();
// 	await fetch(
// 		'http://127.0.0.1:8080/emulator/v1/projects/demo-origami/databases/(default)/documents',
// 		{ method: 'DELETE' },
// 	);
// });
// const wrapper = ({ children }: { children: ReactNode }) => (
// 	<Provider store={store}>{children}</Provider>
// );
