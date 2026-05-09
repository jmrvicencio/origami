import { createHashRouter } from 'react-router-dom';

const router = createHashRouter([
	{
		path: '/',
		children: [
			{
				index: true,
				lazy: async () => {
					let Home = await import('@/app/Index.js');
					return { Component: Home.default };
				},
			},
		],
	},
]);

export default router;
