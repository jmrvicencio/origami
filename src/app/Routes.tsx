import LoadingBar from '@/components/LoadingBar.tsx';
import { appStore, navigationFinishedAtom } from '@/store/store.ts';
import { createHashRouter, Navigate } from 'react-router-dom';

export const PATH = {
	HOME: 'home',
	APP: 'app',
	BUDGET: 'budget',
};

export const ROUTES = {
	HOME: `/${PATH.HOME}`,
	APP: `/${PATH.APP}`,
	BUDGET: `/${PATH.APP}/${PATH.BUDGET}`,
};

const router = createHashRouter([
	{
		path: '/',
		element: <LoadingBar />,
		children: [
			{
				index: true,
				element: <Navigate to={ROUTES.HOME} replace={true} />,
			},
			{
				path: PATH.HOME,
				lazy: async () => {
					let Home = await import('@/app/Home.tsx');
					return { Component: Home.default };
				},
			},
			{
				path: PATH.APP,
				loader: async () => {
					appStore.set(navigationFinishedAtom, false);
					await new Promise((resolve) =>
						setTimeout(() => {
							resolve(true);
						}, 1000),
					);
				},
				lazy: async () => {
					let App = await import('@/app/App.tsx');
					return { Component: App.default };
				},
				children: [
					{
						path: PATH.BUDGET,
						loader: async () => {
							await setTimeout(() => {}, 1000);
						},
						lazy: async () => {
							let Budget = await import('@/app/routes/Budget.tsx');
							return { Component: Budget.default };
						},
					},
				],
			},
		],
	},
]);

export default router;
