import React, { ReactNode, RefObject } from 'react';

const ThumbButton = ({
	onClick: handleClick,
	ref,
	children,
	solid = false,
}: {
	onClick?: () => any;
	ref?: RefObject<HTMLElement | null>;
	children?: ReactNode;
	solid?: boolean;
}) => {
	return (
		<div
			ref={ref as RefObject<HTMLDivElement>}
			onClick={handleClick}
			className={`${solid && 'solid'} ${handleClick != undefined && 'interactable'}
				[.solid]:bg-folds-300 [.solid]:border-folds-300 border-muted-folds-300 h-fit rounded-full
				border px-1 py-2 [.interactable]:cursor-pointer`}
		>
			{children}
		</div>
	);
};

export default ThumbButton;
