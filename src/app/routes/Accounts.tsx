import { navigationFinishedAtom } from '@/store/store.ts';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';

const Accounts = () => {
	const setNavFinished = useSetAtom(navigationFinishedAtom);

	useEffect(() => {
		setNavFinished(true);
	}, []);

	return (
		<>
			<div>Accounts Page</div>
		</>
	);
};

export default Accounts;
