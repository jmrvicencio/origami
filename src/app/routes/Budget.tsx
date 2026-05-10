import { useEffect, useState } from 'react';
import { addMonths, format } from 'date-fns';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Images
import Header from '/budget/header.jpg';
import { useAtom, useSetAtom } from 'jotai';
import { dateAtom } from '@/store/budget.ts';
import { useLocation } from 'react-router-dom';
import { navigationFinishedAtom } from '@/store/store.ts';

//region Date Picker

const DatePicker = () => {
	const [date, setDate] = useAtom(dateAtom);

	// Computed Values
	const month = format(date, 'MMM');
	const year = format(date, 'yyyy');

	useEffect(() => {
		const date = new Date(Date.now());
		setDate(date);
	}, []);

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
					className="border-muted-folds-300 px flex h-full cursor-pointer items-center justify-center rounded-full border"
				>
					<ChevronLeft />
				</div>
				<h2 className="font-rubik font-norma4 mx-4 w-34 text-center text-2xl select-none">
					{month} <span className="text-folds-300 font-bold">{year}</span>
				</h2>
				<div
					onClick={handleDateChevronClicked(1)}
					className="border-muted-folds-300 px flex h-full cursor-pointer items-center justify-center rounded-full border"
				>
					<ChevronRight />
				</div>
			</div>
		</section>
	);
};

//region Main

const Budget = () => {
	const location = useLocation();
	const setNavFinished = useSetAtom(navigationFinishedAtom);

	useEffect(() => {
		console.log('location changed');
		setNavFinished(true);
	}, [location]);

	return (
		<div className="flex max-w-200 flex-col gap-8 py-8">
			<DatePicker />
			<section
				className="border-folds-700 flex items-center justify-between rounded-3xl border bg-cover bg-center px-4 py-2 select-none"
				style={{ backgroundImage: `url('${Header}')` }}
			>
				<p className="text-xl font-medium">To Budget</p>
				<div className="bg-folds-300 text-folds-900 flex w-40 flex-col items-center gap-0 rounded-2xl py-1.5 text-center">
					<p className="text-sm leading-4 font-medium">Available</p>
					<p className="text-sm font-bold">1,000,000</p>
				</div>
			</section>
		</div>
	);
};

export default Budget;
