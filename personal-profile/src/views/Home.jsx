import React, { useState } from "react";
import SquareAnimation from "../layout/SquareAnimation";
import MediaHeader from "../layout/MediaHeader";

function Home() {
	const [lineStat, setLineStat] = useState(1003);
	const [dayStat, setDayStat] = useState(1003);
	const [bugStat, setBugStat] = useState(1003);

	return (
		<>
			<section className="relative overflow-hidden clear-both w-full bg-primary text-white font-heading-font">
				<div className="p-12 flex flex-col gap-6 justify-center items-center overflow-hidden">
					<div className="relative z-10 rounded-full w-32 h-32 bg-secondary"></div>
					<div
						id="biography"
						className="relative z-10 flex flex-col gap-0">
						<h1 className="text-3xl">Hey, I'm Le Tuan Hy</h1>
						<h4 className="text-xl">
							Studet, Developer, Sportster
						</h4>
					</div>
					{MediaHeader(".")}
					{SquareAnimation(null)}
				</div>
			</section>
			<section className="mt-10">
				<div className="main-section">
					<div className="card">
						<div className="card-body-single-column gap-1 text-left">
							<h1 className="card-header">Hello there!</h1>
							<p className="text-xs font-body-font">
								My name is Le Tuan Hy and I’m a student from
								Vietnam. I’m currently working towards
								fulfilling my dream of being a computer science
								researcher and engineer. Apart from programming,
								I also love designing website, making 3D assets
								and play sports.
							</p>
						</div>
					</div>
					<div className="card-split-title">
						<div className="grid grid-cols-4 auto-cols-max place-items">
							<div className="col-span-1 flex items-center justify-center bg-accent">
								<h1 className="font-heading-font text-white text-2xl">
									About this site
								</h1>
							</div>
							<div className="col-span-3 ml-4 text-left py-4 overflow-hidden flex justify-center items-center">
								<ul className="list-disc list-inside font-body-font text-xs marker:text-accent">
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
					<div className="card">
						<div className="card-body-single-column gap-4 text-left">
							<h2 className="card-header">
								How about some statistics?
							</h2>
							<div className="statistic-row">
								<h4 className="text-base text-accent">
									{lineStat}
								</h4>
								<h4 className="text-base text-white">
									Lines of code written this past year
								</h4>
							</div>
							<div className="statistic-row">
								<h4 className="text-base text-accent">
									{dayStat}
								</h4>
								<h4 className="text-base text-white">
									Days of continuous programming
								</h4>
							</div>
							<div className="statistic-row">
								<h4 className="text-base text-accent">
									{bugStat}
								</h4>
								<h4 className="text-base text-white">
									Bugs encountered and resolved
								</h4>
							</div>
							<div className="bg-primary w-full h-32"></div>
						</div>
					</div>
					<div className="card">
						<div className="flex flex-col gap-4 justify-center text-center">
							<h2 className="card-header">Journey Checkpoints</h2>
							<div className="flex gap-3">
								<img
									src="./src/assets/mark_location.svg"
									alt="location mark"
									className="w-6 h-6"
								/>
								<div className="">
									<h4 className="text-left text-base font-heading-font">
										How it started
									</h4>
									<p className="text-xs text-left">
										I picked up programming as a hobby to
										relax in high school. The first language
										I ever learnt was Python!
									</p>
								</div>
							</div>
							<div className="flex gap-3">
								<img
									src="./src/assets/mark_location.svg"
									alt="location mark"
									className="w-6 h-6"
								/>
								<div className="">
									<h4 className="text-left text-base font-heading-font">
										How it started
									</h4>
									<p className="text-xs text-left">
										I picked up programming as a hobby to
										relax in high school. The first language
										I ever learnt was Python!
									</p>
								</div>
							</div>
							<div className="flex gap-3">
								<img
									src="./src/assets/mark_location.svg"
									alt="location mark"
									className="w-6 h-6"
								/>
								<div className="">
									<h4 className="text-left text-base font-heading-font">
										How it started
									</h4>
									<p className="text-xs text-left">
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
