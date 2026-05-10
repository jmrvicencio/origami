import { navigationFinishedAtom } from '@/store/store.ts';
import { useSetAtom } from 'jotai';
import { useEffect } from 'react';
import { motion } from 'motion/react';

const Accounts = () => {
	const setNavFinished = useSetAtom(navigationFinishedAtom);

	useEffect(() => {
		setNavFinished(true);
	}, []);

	return (
		<>
			<motion.div>Accounts Page</motion.div>
		</>
	);
};

export default Accounts;
