import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import routes from '@/app/routes.js';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={routes} />
	</StrictMode>,
);
