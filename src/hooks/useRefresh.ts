import { useState } from 'react';

const useRefresh = () => {
	const [_, setRefresh] = useState(false);

	const refresh = () => {
		console.log('refreshing page');
		setRefresh((state) => !state);
	};

	return { refresh };
};

export default useRefresh;
