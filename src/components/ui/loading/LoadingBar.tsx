import { navigatingAtom, navigationFinishedAtom } from '@/store/store.ts';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, useAnimationControls } from 'motion/react';

const LoadingBar = () => {
	const location = useLocation();
	const [navigating, setNavigating] = useAtom(navigatingAtom);
	const [finished, _] = useAtom(navigationFinishedAtom);
	const controls = useAnimationControls();

	useEffect(() => {
		setNavigating(true);
	}, [location]);

	useEffect(() => {
		controls.set({ width: '0%' });
	}, []);

	useEffect(() => {
		// console.log(finished + ': finish state');
		if (navigating == false) return;

		if (finished == false) {
			controls.set({ width: '0%' });
			controls.start({ width: '80%', transition: { duration: 0.8 } });
		} else if (finished == true) {
			controls.set({ width: '80%' });
			controls.start({ width: '100%', transition: { duration: 0.05 } });
		}
	}, [navigating, finished]);

	const handleAnimationComplete = () => {
		if (finished) setNavigating(false);
	};

	return (
		<>
			{navigating && (
				<div className="bg-folds-700 absolute top-0 z-20 h-1 w-dvw">
					<motion.div
						animate={controls}
						className="bg-folds-300 h-full"
						onAnimationComplete={handleAnimationComplete}
					/>
				</div>
			)}
			<Outlet />
		</>
	);
};

export default LoadingBar;
