import { useAtomValue, useSetAtom } from 'jotai';
import { modalAtom } from './modalAtom.ts';
import React, { MouseEvent, ReactNode, useEffect, useRef } from 'react';
import { AnchorAlignment, AnchorPositions, Modal as ModalType } from './modal.types.js';
import { useModal } from './useModal.ts';
import { ZINDEX } from '@/config/zindex.ts';
import { ScrollLockAtom } from '@/store/store.ts';
import { useScroll } from 'motion/react';

const blockClick = (e: MouseEvent) => {
	e.stopPropagation();
	e.preventDefault();
};

// region Menu Modal

const MenuModal = ({ modal }: { modal: ModalType }) => {
	const modalRef = useRef<HTMLDivElement>(null);
	const { scrollY } = useScroll();
	const { resetModal } = useModal();

	let position: React.CSSProperties;

	if (!modal.anchor)
		position = {
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
		};
	else {
		const anchor = modal.anchor;
		const offset = anchor.offset ?? 0;
		const refPos = modal.anchor.ref.current!.getBoundingClientRect();

		console.log(scrollY);
		position = {
			top: anchor.anchor == AnchorPositions.Bottom ? refPos.bottom + offset : 0,
			left: refPos.right - modalRef.current!.getBoundingClientRect().width,
		};
	}

	console.log('modal is refreshing');

	return (
		<div
			ref={modalRef}
			onClick={blockClick}
			className="bg-folds-700 absolute flex w-fit flex-col rounded-2xl px-8"
			style={{ ...position }}
		>
			{modal.items.map((item, i) => (
				<div
					key={i}
					className="cursor-pointer py-2"
					onClick={() => {
						item.action?.();
						resetModal();
					}}
				>
					{item.option}
				</div>
			))}
		</div>
	);
};

// region Main

const Modal = () => {
	const modal = useAtomValue(modalAtom);
	const setScrollLock = useSetAtom(ScrollLockAtom);
	const { resetModal } = useModal();

	useEffect(() => {
		setScrollLock(modal !== undefined);
	}, [modal]);

	if (!modal) return <></>;

	const hasOverlay = modal.overlay !== false ? 'overlay' : '';
	let modalElement: ReactNode;

	switch (modal.type) {
		case 'menu':
			modalElement = <MenuModal modal={modal} />;
			break;
		default:
			throw new Error('Modal type out of scope.');
	}

	const handleOverlayClicked = () => {
		resetModal();
	};

	return (
		<div
			className={`${hasOverlay} [.overlay]:bg-folds-900/80 absolute h-dvh w-full`}
			style={{ zIndex: ZINDEX.modal }}
			onClick={handleOverlayClicked}
		>
			{modalElement}
		</div>
	);
};

export default Modal;
