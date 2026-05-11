import { LucideIcon } from 'lucide-react';
import { ReactNode, RefObject } from 'react';

enum AnchorPositions {
	Top,
	Bottom,
	Left,
	Right,
}

enum AnchorAlignment {
	Start,
	Center,
	end,
}

interface BaseModal {
	overlay?: boolean;
}

interface IPositionable {
	anchorRef?: RefObject;
	anchor?: AnchorPositions;
	alignment?: AnchorAlignment;
	offset?: number;
}

interface Anchor {
	ref: RefObject;
	anchor: AnchorPositions;
	alignment: AnchorAlignment;
	offset?: number;
}

interface MenuItem {
	option: string;
	icon?: LucideIcon;
	action?: () => any;
}

export interface MenuModal extends BaseModal {
	type: 'menu';
	items: MenuItem[];
	anchor?: Anchor;
}

export type Modal = MenuModal;
