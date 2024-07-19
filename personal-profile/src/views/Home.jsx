import React, { useState } from "react";
import SquareAnimation from "../layout/SquareAnimation";
import MediaHeader from "../layout/MediaHeader";
import SectionBanner from "../layout/SectionBanner";

function Home() {
	const [lineStat, setLineStat] = useState(1003);
	const [dayStat, setDayStat] = useState(1003);
	const [bugStat, setBugStat] = useState(1003);

	return (
		<>
			<section className="relative overflow-hidden clear-both w-full bg-primary text-white font-heading-font">
				<div className="p-12 flex flex-col gap-6 xl:gap-10 justify-center items-center overflow-hidden lg:p-24">
					<div className="relative z-10 rounded-full w-32 h-32 lg:w-48 lg:h-48 xl:w-64 xl:h-64 bg-secondary"></div>
					<div
						id="biography"
						className="relative z-10 flex flex-col gap-0 lg:gap-2">
						<h1 className="text-3xl lg:text-5xl xl:text-7xl">
							Hey, I'm Le Tuan Hy
						</h1>
						<h4 className="text-xl lg:text-2xl xl:text-4xl">
							Studet, Developer, Sportstes
						</h4>
					</div>
					{MediaHeader(".")}
					{SquareAnimation(null)}
				</div>
			</section>
			<section className="mt-10">
				<div className="main-section ">
					<div className="card">
						<div className="card-body-single-column gap-1 text-left">
							<h2 className="card-header">Hello there!</h2>
							<p className="text-xs font-body-font lg:text-sm lg:mt-2">
								My name is Le Tuan Hy and I’m a student from
								Vietnam. I’m currently working towards
								fulfilling my dream of being a computer science
								researcher and engineer. Apart from programming,
								I also love designing website, making 3D assets
								and play sports.
							</p>
						</div>
					</div>
					<div className="card-split-title lg:card lg:col-start-1 lg:mb-0">
						<div className="grid grid-cols-4 auto-cols-max place-items lg:flex lg:flex-col lg:p-0 lg:gap-1">
							<div className="col-span-1 flex items-center justify-center bg-accent lg:bg-transparent lg:justify-start lg:items-start">
								<h2 className="card-header font-heading-font text-white lg:text-accent lg:text-left">
									About this site
								</h2>
							</div>
							<div className="col-span-3 ml-4 text-left py-4 overflow-hidden flex justify-center items-center lg:justify-start lg:items-start lg:text-left lg:ml-0 lg:mt-2 lg:p-0">
								<ul className="list-disc list-inside font-body-font text-xs marker:text-accent lg:text-sm lg:text-left">
									<li className="mb-2">
										The Homepage is all about my journey of
										becoming an engineer.
									</li>
									<li className="mb-2">
										The Active Project page will contain
										live progression trackings of the
										projects that I’m currently working on.
									</li>
									<li className="mb-2">
										The Portfolio page will be a showcase of
										my completed projects.
									</li>
									<li className="">
										The Blogs page will contain blogs about
										technological topics and solutions to
										problems that you can find on LeetCode,
										Codeforces ...
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="card lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:mb-0">
						<div className="card-body-single-column gap-4 text-left lg:gap-10">
							<h2 className="card-header">
								How about some statistics?
							</h2>
							<div className="statistic-row">
								<h4 className="text-base text-accent lg:text-xl">
									{lineStat}
								</h4>
								<h4 className="text-base text-white lg:text-xl">
									Lines of code written this past year
								</h4>
							</div>
							<div className="statistic-row">
								<h4 className="text-base text-accent lg:text-xl">
									{dayStat}
								</h4>
								<h4 className="text-base text-white lg:text-xl">
									Days of continuous programming
								</h4>
							</div>
							<div className="statistic-row">
								<h4 className="text-base text-accent lg:text-xl">
									{bugStat}
								</h4>
								<h4 className="text-base text-white lg:text-xl">
									Bugs encountered and resolved
								</h4>
							</div>
							<div className="bg-primary w-full h-32 lg:h-36"></div>
						</div>
					</div>
				</div>
				<div className="hidden lg:m-0 lg:p-0 lg:block">
					{SectionBanner(10, "Journey Checkpoint")}
				</div>
				<div className="main-section lg:mb-12">
					<div className="card lg:col-span-2">
						<div className="flex flex-col gap-4 justify-center text-center lg:grid lg:grid-cols-3 lg:gap-y-4">
							<h2 className="card-header lg:hidden">
								Journey Checkpoints
							</h2>
							<div className="flex gap-3 lg:col-span-1">
								<img
									src="./src/assets/mark_location.svg"
									alt="location mark"
									className="w-6 h-6"
								/>
								<div className="">
									<h4 className="text-left text-base font-heading-font lg:text-2xl">
										How it started
									</h4>
									<p className="text-xs text-left lg:text-sm">
										I picked up programming as a hobby to
										relax in high school. The first language
										I ever learnt was Python! What the hell
									</p>
								</div>
							</div>
							<div className="flex gap-3 lg:col-span-1">
								<img
									src="./src/assets/mark_location.svg"
									alt="location mark"
									className="w-6 h-6"
								/>
								<div className="">
									<h4 className="text-left text-base font-heading-font lg:text-2xl">
										How it started
									</h4>
									<p className="text-xs text-left lg:text-sm">
										I picked up programming as a hobby to
										relax in high school. The first language
										I ever learnt was Python!
									</p>
								</div>
							</div>
							<div className="flex gap-3 lg:col-span-1">
								<img
									src="./src/assets/mark_location.svg"
									alt="location mark"
									className="w-6 h-6"
								/>
								<div className="">
									<h4 className="text-left text-base font-heading-font lg:text-2xl">
										How it started
									</h4>
									<p className="text-xs text-left lg:text-sm">
										I picked up programming as a hobby to
										relax in high school. The first language
										I ever learnt was Python!
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Home;
