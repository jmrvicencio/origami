import { ReactNode, useEffect } from 'react';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { dateAtom } from '@/store/budget.ts';
import { addMonths, format } from 'date-fns';
import { useLocation } from 'react-router-dom';
import { navigationFinishedAtom } from '@/store/store.ts';
import { motion } from 'motion/react';
import ThumbButton from '@/components/ui/button/ThumbButton.tsx';

// Images
import { ChevronDown, ChevronLeft, ChevronRight, ListFilter, Plus } from 'lucide-react';
import { EllipsisVertical } from 'lucide-react';
import Header from '/budget/header.jpg';
import { modalAtom } from '@/components/ui/modal/modalAtom.ts';

//region Date Picker

const DatePicker = () => {
	const [date, setDate] = useAtom(dateAtom);

	// Computed Values
	const month = format(date, 'MMM');
	const year = format(date, 'yyyy');

	// Event Listeners
	const updateDate = (step: number) => {
		setDate((prev) => addMonths(prev, step));
	};

	const handleDateChevronClicked = (step: number) => () => {
		updateDate(step);
	};

	return (
		<section className="flex items-center justify-center">
			<div className="flex h-10 w-fit items-center justify-center">
				<div
					onClick={handleDateChevronClicked(-1)}
					className="border-muted-folds-300 px flex h-full cursor-pointer items-center
						justify-center rounded-full border"
				>
					<ChevronLeft />
				</div>
				<h2
					data-testid="date-display"
					className="font-rubik font-norma4 mx-4 w-34 text-center text-2xl select-none"
				>
					{month} <span className="text-folds-300 font-bold">{year}</span>
				</h2>
				<div
					onClick={handleDateChevronClicked(1)}
					className="border-muted-folds-300 px flex h-full cursor-pointer items-center
						justify-center rounded-full border"
				>
					<ChevronRight />
				</div>
			</div>
		</section>
	);
};

//region Budget Header

const BudgetHeader = () => {
	return (
		<section
			className="border-folds-700 flex items-center justify-between rounded-3xl border bg-cover
				bg-center px-4 py-2 select-none"
			style={{ backgroundImage: `url('${Header}')` }}
		>
			<p className="text-xl font-medium">To Budget</p>
			<div
				className="bg-folds-300 text-folds-900 flex w-40 flex-col items-center gap-0 rounded-2xl
					py-1.5 text-center text-base md:py-2 md:text-xl"
			>
				<p className="leading-4 font-medium md:leading-5">Available</p>
				<p className="text-lg font-bold">1,000,000</p>
			</div>
		</section>
	);
};
//region Fold Group

const FoldGroup = () => {
	return (
		<div className="border-folds-700 bg-folds-900 rounded-xl border p-2 pt-3">
			<div className="flex items-center justify-between">
				<div className="flex h-fit flex-row items-center gap-2">
					<div className="border-muted-folds-300 h-fit rounded-full border">
						<ChevronDown className="h-4 w-4" />
					</div>
					<h3 className="text-lg font-medium">Group Name</h3>
				</div>
				<div className="flex flex-col">
					<p className="text-muted-folds-200 leading-4">Available</p>
					<p>1,000,000</p>
				</div>
			</div>
		</div>
	);
};

//region Main

const Budget = () => {
	const location = useLocation();
	const setNavFinished = useSetAtom(navigationFinishedAtom);
	const setModal = useSetAtom(modalAtom);

	useEffect(() => {
		setNavFinished(true);
	}, [location]);

	const handleOptionsclicked = () => {
		setModal({
			type: 'menu',
			items: [
				{
					option: 'Option 1',
				},
				{
					option: 'Option 2',
				},
			],
		});
	};

	return (
		<motion.div key="budget" className="flex w-full max-w-200 flex-col gap-6 py-8">
			<DatePicker />
			<BudgetHeader />
			<section>
				<div className="flex flex-row justify-between px-3">
					<div>
						<h2 className="text-lg font-bold">Folds</h2>
						<p className="text-folds-200 font-light">Organize your Budget</p>
					</div>
					<div className="flex items-end gap-3">
						<ThumbButton onClick={handleOptionsclicked}>
							<EllipsisVertical className="h-4 w-4" />
						</ThumbButton>
						<ThumbButton>
							<ListFilter className="h-4 w-4" />
						</ThumbButton>
						<ThumbButton solid>
							<Plus className="text-folds-900 h-4 w-4" />
						</ThumbButton>
					</div>
				</div>
				<div className="mt-4 flex flex-col gap-2">
					<FoldGroup></FoldGroup>
					<FoldGroup></FoldGroup>
					<FoldGroup></FoldGroup>
					<FoldGroup></FoldGroup>
					<FoldGroup></FoldGroup>
				</div>
			</section>
		</motion.div>
	);
};

export default Budget;
