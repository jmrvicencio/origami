import { useWidthCheck } from '@/hooks/useWidthCheck.ts';
import { appWidthAtom } from '@/store/screenWidth.ts';
import { appStore } from '@/store/store.ts';
import { Provider, useAtomValue } from 'jotai';
import { ReactNode } from 'react';

// images
import Logo from '/LogoWhite.svg';

//region Sidebar Item
const SideBarItem = ({ active = false, children }: { active?: boolean; children?: ReactNode }) => {
	return (
		<div className={`${active && 'active'} [.active]:bg-folds-700 hover:bg-folds-700/50 cursor-pointer px-4 py-3`}>
			{children}
		</div>
	);
};

//region Sidebar
const Sidebar = () => {
	return (
		<aside className="sticky top-20 h-fit w-60 px-4">
			<div className="flex flex-row gap-2 px-4 py-6">
				<img src={Logo} className="w-8" />
				<h3 className="font-rubik text-lg font-bold">My Budget</h3>
			</div>
			<div className="flex flex-col pt-2 font-bold">
				<SideBarItem active>Debts</SideBarItem>
				<SideBarItem>All Accounts</SideBarItem>
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

//region App
const App = () => {
	useWidthCheck();
	const { isMd, isLg, isXl } = useAtomValue(appWidthAtom);

	return (
		<Provider store={appStore}>
			<div className="bg-folds-900 from-accent-500/30 to-accent-500/0 h-dvh w-dvw overflow-hidden bg-radial-[at_5%_-24%] to-60%">
				{/* Default container, Set default values */}
				<div className="font-quicksand flex h-full w-full overflow-scroll text-white">
					{/* <div className="from-accent-500 to-accent-500/0 absolute h-220 w-550 bg-radial to-70% opacity-30" /> */}
					{!isMd && <Sidebar />}
					<main className="flex h-2000 grow justify-center justify-self-center align-middle">
						<div className="border-folds-700 w-full max-w-220 border-x"></div>
					</main>
					{!isXl && <div className="w-60"></div>}
				</div>
			</div>
		</Provider>
	);
};
//endregion

export default App;
