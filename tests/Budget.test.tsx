import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from '@/app/Routes.tsx';

import Budget from '@/app/routes/Budget.tsx';
import { format } from 'date-fns';

describe('[UNIT] Budget Page', () => {
	const { container } = render(
		<MemoryRouter initialEntries={[ROUTES.BUDGET]}>
			<Routes>
				<Route path={ROUTES.BUDGET} element={<Budget />} />
			</Routes>
		</MemoryRouter>,
	);
	const user = userEvent.setup();

	it('test', async () => {
		const dateDisplay = screen.getByTestId('date-display');

		expect(dateDisplay).toBeInTheDocument();
		expect(dateDisplay).toHaveTextContent(format(new Date(Date.now()), 'MMM yyyy'));
	});
});
