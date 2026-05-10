import { createHashRouter, Navigate } from 'react-router-dom';

export const ROUTES = {
	HOME: 'home',
	APP: 'app',
};

const router = createHashRouter([
	{
		path: '/',
		children: [
			{
				index: true,
				element: <Navigate to={ROUTES.HOME} replace={true} />,
			},
			{
				path: 'home',
				lazy: async () => {
					let Home = await import('@/app/Home.tsx');
					return { Component: Home.default };
				},
			},
			{
				path: 'app',
				lazy: async () => {
					let App = await import('@/app/App.tsx');
					return { Component: App.default };
				},
			},
		],
	},
]);

export default router;
