import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';

import routes from '@/app/Routes.tsx';
import './index.css';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={routes} />
		<Toaster />
	</StrictMode>,
);
