import { useWidthCheck } from '@/hooks/useWidthCheck.ts';
import { appWidthAtom } from '@/store/screenWidth.ts';
import { Provider, useAtomValue } from 'jotai';
import { ReactNode, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useNav } from '@/hooks/useNav.ts';

// images
import Logo from '/LogoWhite.svg';
import { ROUTES } from './Routes.tsx';
import { auth } from '@/lib/firebase/auth.ts';
import { Plus } from 'lucide-react';
// import AccountIcon from '/icons/account.svg?react';
import BudgetIcon from '@/resources/icons/budget.svg?react';
import AccountIcon from '@/resources/icons/account.svg?react';

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
	const nav = useNav();

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
				<SideBarItem active>Budget</SideBarItem>
				<SideBarItem onClick={handleLogoutClicked}>Logout</SideBarItem>
			</div>
			<div className="pt-8">
				<h4 className="text-folds-200 px-4 text-sm">All Acounts</h4>
				<div className="border-folds-700 mt-3 flex flex-col border-t">
					<SideBarItem>
						<div>
							<p className="font-bold">Primary Account</p>
							<p className="text-folds-200 text-sm font-extralight">₱50,000</p>
						</div>
					</SideBarItem>
					<SideBarItem>
						<div>
							<p className="font-bold">Primary Account</p>
							<p className="text-folds-200 text-sm font-extralight">₱50,000</p>
						</div>
					</SideBarItem>
					<SideBarItem>
						<div>
							<p className="font-bold">Primary Account</p>
							<p className="text-folds-200 text-sm font-extralight">₱50,000</p>
						</div>
					</SideBarItem>
				</div>
			</div>
		</aside>
	);
};

const FAB = () => {
	const location = useLocation();

	const onBudget = location.pathname == ROUTES.BUDGET;
	const onGroups = location.pathname.includes(ROUTES.GROUPS);

	return (
		<div
			className="bg-folds-900 border-folds-700 absolute bottom-4 left-1/2 flex -translate-x-1/2
				flex-row items-center gap-4 overflow-hidden rounded-full border px-6 py-1"
		>
			<Link to={ROUTES.BUDGET}>
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
			</Link>
			<div
				className="bg-folds-300 flex aspect-square h-10 w-10 cursor-pointer items-center
					justify-center rounded-full"
			>
				<Plus className="text-folds-900" />
			</div>
			<Link to={ROUTES.GROUPS}>
				<div className={`${onGroups && 'active'} group relative`}>
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
			</Link>
		</div>
	);
};

//region App
const App = () => {
	useWidthCheck();

	const nav = useNav();
	const location = useLocation();
	const { isMd, isLg, isXl } = useAtomValue(appWidthAtom);

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
			<div className="font-quicksand flex h-full w-full overflow-auto text-white">
				{isMd && <Sidebar />}
				<main className="flex h-2000 grow justify-center justify-self-center align-middle">
					<div
						className="border-folds-700 flex w-full max-w-220 flex-col px-2 sm:px-4 md:border-x
							lg:px-12"
					>
						<Outlet />
					</div>
				</main>
				{isXl && <div className="w-60"></div>}
				{!isMd && <FAB />}
			</div>
		</div>
	);
};
//endregion

export default App;
