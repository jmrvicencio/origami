import { useAtomValue, useSetAtom } from 'jotai';
import { modalAtom } from './modalAtom.ts';
import React, { MouseEvent, ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { AnchorAlignment, AnchorPositions, Modal as ModalType } from './modal.types.js';
import { useModal } from './useModal.ts';
import { ZINDEX } from '@/config/zindex.ts';
import { ScrollLockAtom } from '@/store/store.ts';
import { useScroll } from 'motion/react';

const preventClick = (e: MouseEvent) => {
	e.stopPropagation();
	e.preventDefault();
};

// region Menu Modal

const MenuModal = ({ modal }: { modal: ModalType }) => {
	const modalRef = useRef<HTMLDivElement>(null);
	const { scrollY } = useScroll();
	const { resetModal } = useModal();
	const [position, setPosition] = useState<React.CSSProperties>({});

	useLayoutEffect(() => {
		if (!modal.anchor)
			setPosition({
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
			});
		else {
			const anchor = modal.anchor;
			const offset = anchor.offset ?? 0;
			const refRect = modal.anchor.ref.current!.getBoundingClientRect();
			const modalWidth = modalRef.current?.getBoundingClientRect().width ?? 0;

			console.log(`Layout update ${refRect.right} ${modalWidth}`);
			console.log(scrollY);
			setPosition({
				top: anchor.anchor == AnchorPositions.Bottom ? refRect.bottom + offset : 0,
				left: refRect.right - modalWidth,
			});
		}
	}, [modalRef]);

	console.log(position);

	return (
		<div
			ref={modalRef}
			onClick={preventClick}
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
	const [overlayHeight, setOverlayHeight] = useState<number>(0);

	useLayoutEffect(() => {
		if (modal !== undefined) {
			setOverlayHeight(document.documentElement.scrollHeight);
		}
	}, [modal]);

	// // Lock Scroll
	// useLayoutEffect(() => {
	// 	setScrollLock(modal !== undefined);
	// 	if (modal !== undefined) {
	// 		document.body.style.overflow = 'hidden';
	// 		document.body.style.scrollbarGutter = 'stable';
	// 	} else {
	// 		document.body.style.overflow = '';
	// 		document.body.style.paddingRight = '';
	// 	}

	// 	return () => {
	// 		document.body.style.overflow;
	// 	};
	// }, [modal]);

	if (!modal) return <></>;

	console.log(`overlay height: ${overlayHeight}`);

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
			id="modal-overlay"
			className={`${hasOverlay} [.overlay]:bg-folds-900/80 absolute w-full`}
			style={{ zIndex: ZINDEX.modal, height: overlayHeight }}
			onClick={handleOverlayClicked}
		>
			{modalElement}
		</div>
	);
};

export default Modal;
