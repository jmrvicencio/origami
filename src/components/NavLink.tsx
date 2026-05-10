import { ROUTES } from '@/app/Routes.tsx';
import { navigatingAtom } from '@/store/store.ts';
import { useSetAtom } from 'jotai';
import { MouseEvent, ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavLink = ({ to, children }: { to: string; children?: ReactNode }) => {
	const location = useLocation();
	const setNavigating = useSetAtom(navigatingAtom);

	const handleLinkClicked = (e: MouseEvent) => {
		if (to == location.pathname) {
			e.preventDefault();
			e.stopPropagation();
			return;
		}

		setNavigating(true);
	};

	return (
		<Link to={to} onClick={handleLinkClicked}>
			{children}
		</Link>
	);
};

export default NavLink;
