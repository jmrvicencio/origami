import { ChevronLeft, ChevronRight } from 'lucide-react';

// Images
import Header from '/budget/header.jpg';

const Budget = () => {
	return (
		<div className="flex max-w-200 flex-col gap-8 py-8">
			<section className="flex items-center justify-center">
				<div className="flex h-10 w-fit items-center justify-center">
					<div className="border-muted-folds-300 px flex h-full cursor-pointer items-center justify-center rounded-full border">
						<ChevronLeft />
					</div>
					<h2 className="font-rubik mx-4 text-2xl font-normal">
						Aug <span className="text-folds-300 font-bold">2024</span>
					</h2>
					<div className="border-muted-folds-300 px flex h-full cursor-pointer items-center justify-center rounded-full border">
						<ChevronRight />
					</div>
				</div>
			</section>
			<section
				className="border-folds-700 flex items-center justify-between rounded-3xl border bg-cover bg-center px-4 py-2"
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
