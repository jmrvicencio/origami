import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'jotai';

import { appStore } from '@/store/store.ts';
import routes from '@/app/Routes.tsx';
import './index.css';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Provider store={appStore}>
			<RouterProvider router={routes} />
			<Toaster />
		</Provider>
	</StrictMode>,
);
