import { useState, MouseEvent, Fragment, useEffect } from 'react';

import { useDebug } from '@/features/debug/hooks/useDebug.tsx';

function Debug() {
	const [showDebug, setShowDebug] = useState(false);
	const [initialPos, setInitialPos] = useState<number[]>([]);
	const [debugPos, setDebugPos] = useState([12, 12]);
	const [oldDebugPos, setOldDebugPos] = useState(debugPos);
	const { options } = useDebug();

	const style = {
		top: `${debugPos[1]}px`,
		left: `${debugPos[0]}px`,
	};

	const handleMouseDown = (e: MouseEvent) => {
		setInitialPos([e.clientX, e.clientY]);
		setOldDebugPos(debugPos);
	};

	const handleMouseMove = (e: MouseEvent) => {
		if (e.buttons != 1) return;

		const newPos = [
			oldDebugPos[0] + (e.clientX - initialPos[0]),
			oldDebugPos[1] + (e.clientY - initialPos[1]),
		];
		setDebugPos(newPos);
	};

	// Event Listeners

	const handleKeyDown = (e: KeyboardEvent) => {
		if (e.key === '`') {
			setShowDebug((prev) => {
				console.log(!prev);
				return !prev;
			});
		}
	};

	useEffect(() => {
		const onKeyDown = (e: KeyboardEvent) => {
			const t = e.target as HTMLElement;
			if (t.closest('input, textarea, select, [contenteditable="true"]')) return; // don't hijack typing
			handleKeyDown(e);
		};
		window.addEventListener('keydown', onKeyDown);
		return () => window.removeEventListener('keydown', onKeyDown);
	}, []);

	return (
		<>
			{showDebug == true ? (
				<div
					style={style}
					className={'bg-folds-300 absolute z-20 p-4'}
					onMouseDown={handleMouseDown}
					onMouseMove={handleMouseMove}
				>
					{Object.entries(options).map(([text, action]) => (
						<DebugItem key={text} text={text} action={action} />
					))}
				</div>
			) : (
				<></>
			)}
		</>
	);
}

const DebugItem = ({ text, action }: { text: string; action: () => void }) => {
	return (
		<p className="cursor-pointer" onClick={action}>
			{text}
		</p>
	);
};

export default Debug;
