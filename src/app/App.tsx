import { useWidthCheck } from '@/hooks/useWidthCheck.ts';
import { appWidthAtom } from '@/store/screenWidth.ts';
import { useAtomValue } from 'jotai';
import { ReactNode, useEffect } from 'react';
import { useLocation, useOutlet } from 'react-router-dom';
import { useNav } from '@/hooks/useNav.ts';
import { motion } from 'motion/react';
import Modal from '@/components/ui/modal/Modal.tsx';

// images
import Logo from '/LogoWhite.svg';
import { ROUTES } from './Routes.tsx';
import { auth } from '@/lib/firebase/auth.ts';
import { Plus } from 'lucide-react';
import BudgetIcon from '@/resources/icons/budget.svg?react';
import AccountIcon from '@/resources/icons/account.svg?react';
import NavLink from '@/components/navigation/NavLink.tsx';
import { AnimatePresence } from 'motion/react';
import { usePageTurn } from '@/hooks/usePageTurn.ts';
import { ScrollLockAtom } from '@/store/store.ts';

//region Sidebar Item
const SideBarItem = ({
	onClick: handleClick,
	active = false,
	children,
}: {
	onClick?: () => any;
	active?: boolean;
	children?: ReactNode;
}) => {
	return (
		<div
			onClick={handleClick}
			className={`${active && 'active'} [.active]:bg-folds-700 hover:bg-folds-700/50 cursor-pointer
				rounded-xl px-4 py-3`}
		>
			{children}
		</div>
	);
};

//region Sidebar
const Sidebar = () => {
	const { turnPage } = usePageTurn();
	const location = useLocation();
	const nav = useNav();

	const onBudget = location.pathname == ROUTES.BUDGET;
	const onAccounts = location.pathname.includes(ROUTES.ACCOUNTS);

	const handleLogoutClicked = () => {
		auth.signOut();
		nav(ROUTES.HOME);
	};

	return (
		<aside className="sticky top-20 h-fit w-60 px-4">
			<div className="flex flex-row gap-2 px-4 py-6">
				<img src={Logo} className="w-8" />
				<h3 className="font-rubik text-lg font-bold">My Budget</h3>
			</div>
			<div className="flex flex-col pt-2 font-bold">
				<NavLink to={ROUTES.BUDGET}>
					<SideBarItem active={onBudget}>Budget</SideBarItem>
				</NavLink>
				<SideBarItem onClick={handleLogoutClicked}>Logout</SideBarItem>
			</div>
			<div className="pt-8">
				<NavLink to={ROUTES.ACCOUNTS}>
					<h4 className="text-folds-200 px-4 text-sm hover:underline">All Acounts</h4>
				</NavLink>
				<div className="border-folds-700 mt-3 flex flex-col border-t">
					<SideBarItem>
						<div>
							<p className="font-bold">Primary Account</p>
							<p className="text-folds-200 font-extralight">₱50,000</p>
						</div>
					</SideBarItem>
					<SideBarItem>
						<div>
							<p className="font-bold">Secondary Account</p>
							<p className="text-folds-200 font-extralight">₱50,000</p>
						</div>
					</SideBarItem>
					<SideBarItem>
						<div>
							<p className="font-bold">E-Wallet</p>
							<p className="text-folds-200 font-extralight">₱50,000</p>
						</div>
					</SideBarItem>
				</div>
			</div>
		</aside>
	);
};

//region FAB

const FAB = () => {
	const { turnPage } = usePageTurn();
	const location = useLocation();

	const onBudget = location.pathname == ROUTES.BUDGET;
	const onAccounts = location.pathname.includes(ROUTES.ACCOUNTS);

	return (
		<div
			className="bg-folds-900 border-folds-700 absolute bottom-4 left-1/2 flex -translate-x-1/2
				flex-row items-center gap-4 overflow-hidden rounded-full border px-6 py-1"
		>
			<NavLink to={ROUTES.BUDGET} onClick={() => turnPage('right')}>
				<div className={`${onBudget && 'active'} group relative`}>
					<BudgetIcon
						width={24}
						className={`fill-muted-folds-300 transition-colors duration-100 ease-in-out
							group-[.active]:fill-white`}
					/>
					<div
						className="bg-muted-folds-300 absolute left-1/2 h-1 w-1 -translate-x-1/2 translate-y-8
							rounded-full transition-transform group-[.active]:translate-y-0.5"
					/>
				</div>
			</NavLink>
			<div
				className="bg-folds-300 flex aspect-square h-10 w-10 cursor-pointer items-center
					justify-center rounded-full"
			>
				<Plus className="text-folds-900" />
			</div>
			<NavLink to={ROUTES.ACCOUNTS} onClick={() => turnPage('left')}>
				<div className={`${onAccounts && 'active'} group relative`}>
					<AccountIcon
						width={24}
						className={`fill-muted-folds-300 transition-colors duration-100 ease-in-out
							group-[.active]:fill-white`}
					/>
					<div
						className="bg-muted-folds-300 absolute left-1/2 h-1 w-1 -translate-x-1/2 translate-y-8
							rounded-full transition-transform group-[.active]:translate-y-0.5"
					/>
				</div>
			</NavLink>
		</div>
	);
};

//region App
const App = () => {
	// Hooks
	useWidthCheck();
	const { start, exit, animate, turnPage } = usePageTurn();
	const { isMd, isXl } = useAtomValue(appWidthAtom);
	const lockScroll = useAtomValue(ScrollLockAtom);
	const nav = useNav();
	const location = useLocation();

	// Computed
	const element = useOutlet();

	useEffect(() => {
		if (location.pathname === ROUTES.APP || location.pathname === `${ROUTES.APP}/`)
			nav(ROUTES.BUDGET);
	}, [location]);

	return (
		<div
			className="bg-folds-900 from-accent-500/30 to-accent-500/0 h-dvh w-dvw overflow-hidden
				bg-radial-[at_5%_-24%] to-60%"
		>
			{/* Default container, Set default values */}
			<div
				className={`${lockScroll && 'scrollLock'} font-quicksand flex h-full w-full overflow-auto
					overflow-x-clip text-white [.scrollLock]:overflow-hidden`}
			>
				<Modal />
				{isMd && <Sidebar />}
				<main className="flex h-2000 grow justify-center justify-self-center align-middle">
					<div className="border-folds-700 relative w-full max-w-220 md:border-x">
						<AnimatePresence onExitComplete={() => turnPage('none')}>
							<motion.div
								key={location.pathname}
								exit={exit}
								animate={animate}
								initial={start}
								transition={{ ease: [0, 0, 0.4, 1], type: 'keyframes', duration: 0.25 }}
								className="absolute flex w-full flex-col px-2 sm:px-4 lg:px-12"
							>
								{element}
							</motion.div>
						</AnimatePresence>
					</div>
				</main>
				{isXl && <div className="w-60"></div> /* Filler element */}
				{!isMd && <FAB />}
			</div>
		</div>
	);
};
//endregion

export default App;
