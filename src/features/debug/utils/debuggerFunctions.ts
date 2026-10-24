import useRefresh from '@/hooks/useRefresh.ts';
import { useDebug } from '../hooks/useDebug.tsx';
import { useEffect } from 'react';

export const useDashboardDebugOptions = () => {
	const { addOption, removeOption } = useDebug();
	const { refresh } = useRefresh();

	useEffect(() => {
		addOption('Refresh Page', refresh);

		return () => removeOption('Refresh Page');
	}, []);
};
