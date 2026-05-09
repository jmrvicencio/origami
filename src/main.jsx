import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import routes from '@/app/routes.js';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={routes} />
		<Toaster />
	</StrictMode>,
);
