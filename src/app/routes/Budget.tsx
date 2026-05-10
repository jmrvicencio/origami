import React, { ReactNode, useEffect, useState } from 'react';
import { addMonths, format } from 'date-fns';
import { ChevronDown, ChevronLeft, ChevronRight, ListFilter, Plus } from 'lucide-react';

// Images
import Header from '/budget/header.jpg';
import { useAtom, useSetAtom } from 'jotai';
import { dateAtom } from '@/store/budget.ts';
import { useLocation } from 'react-router-dom';
import { navigationFinishedAtom } from '@/store/store.ts';
import { EllipsisVertical } from 'lucide-react';

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
					className="border-muted-folds-300 px flex h-full cursor-pointer items-center
						justify-center rounded-full border"
				>
					<ChevronLeft />
				</div>
				<h2 className="font-rubik font-norma4 mx-4 w-34 text-center text-2xl select-none">
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

//region Thumb Button

const ThumbButton = ({ children, solid = false }: { children?: ReactNode; solid?: boolean }) => {
	return (
		<div
			className={`${solid && 'solid'} [.solid]:bg-folds-300 [.solid]:border-folds-300
				border-muted-folds-300 h-fit rounded-full border px-1 py-2`}
		>
			{children}
		</div>
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

	useEffect(() => {
		setNavFinished(true);
	}, [location]);

	return (
		<div className="flex max-w-200 flex-col gap-6 py-8">
			<DatePicker />
			<section
				className="border-folds-700 flex items-center justify-between rounded-3xl border bg-cover
					bg-center px-4 py-2 select-none"
				style={{ backgroundImage: `url('${Header}')` }}
			>
				<p className="text-xl font-medium">To Budget</p>
				<div
					className="bg-folds-300 text-folds-900 flex w-40 flex-col items-center gap-0 rounded-2xl
						py-1.5 text-center text-sm md:py-2 md:text-xl"
				>
					<p className="leading-4 font-medium md:leading-5">Available</p>
					<p className="font-bold">1,000,000</p>
				</div>
			</section>
			<section>
				<div className="flex flex-row justify-between px-3">
					<div>
						<h2 className="font-bold">Folds</h2>
						<p className="text-folds-200 text-sm font-light">Organize your Budget</p>
					</div>
					<div className="flex items-end gap-3">
						<ThumbButton>
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
		</div>
	);
};

export default Budget;
