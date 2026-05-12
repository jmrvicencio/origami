import { LucideIcon } from 'lucide-react';
import { ReactNode, RefObject } from 'react';

export enum AnchorPositions {
	Top,
	Bottom,
	Left,
	Right,
}

export enum AnchorAlignment {
	Start,
	Center,
	end,
}

interface BaseModal {
	overlay?: boolean;
}

interface IOverlay {
	overlay?: boolean;
}

// interface IPositionable {
// 	anchorRef?: RefObject;
// 	anchor?: AnchorPositions;
// 	alignment?: AnchorAlignment;
// 	offset?: number;
// }

interface Anchor {
	ref: RefObject<HTMLElement | null>;
	anchor: AnchorPositions;
	alignment: AnchorAlignment;
	offset?: number;
}

interface MenuItem {
	option: string;
	icon?: LucideIcon;
	action?: () => any;
}

export interface MenuModal extends IOverlay {
	type: 'menu';
	items: MenuItem[];
	anchor?: Anchor;
}

export type Modal = MenuModal;
