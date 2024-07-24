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
			<section className="relative overflow-hidden clear-both w-full bg-primary">
				<div className="main-banner">
					<div className="relative z-10 rounded-full w-32 h-32 lg:w-48 lg:h-48 xl:w-64 xl:h-64 bg-secondary"></div>
					<div className="biography">
						<h1 className="display">Hey, I'm Le Tuan Hy</h1>
						<h4>Studet, Developer, Sportstes</h4>
					</div>
					<hr className="banner-hr" />
					{MediaHeader(".")}
					{SquareAnimation(null)}
				</div>
			</section>
			<section className="section-container">
				<div className="main-section">
					<div className="card">
						<div className="card-body-single-column">
							<div className="normal-card-cluster">
								<h1 className="card-header">Hello there!</h1>
								<p className="text-black">
									My name is Le Tuan Hy and I’m a student from
									Vietnam. I’m currently working towards
									fulfilling my dream of being a computer
									science researcher and engineer. Apart from
									programming, I also love designing website,
									making 3D assets and play sports.
								</p>
							</div>
						</div>
					</div>
					<div className="card-split-title md:col-start-1 md:card">
						<div className="grid grid-cols-4 auto-cols-max place-items md:card-body-single-column">
							<div className="col-span-1 flex items-center justify-center bg-accent md:hidden">
								<h1 className="card-header text-white">
									About this site
								</h1>
							</div>

							<div className="hidden md:normal-card-cluster">
								<h1 className="card-header text-accent">
									About this site
								</h1>
								<div className="col-span-3 ml-4 text-left py-2 overflow-hidden flex justify-center items-center md:grid-cols-none md:p-0 md:m-0">
									<ul className="font-body-font">
										<li className="mb-2">
											The Homepage is all about my journey
											of becoming an engineer.
										</li>
										<li className="mb-2">
											The Active Project page will contain
											live progression trackings of the
											projects that I’m currently working
											on.
										</li>
										<li className="mb-2">
											The Portfolio page will be a
											showcase of my completed projects.
										</li>
										<li className="">
											The Blogs page will contain blogs
											about technological topics and
											solutions to problems that you can
											find on LeetCode, Codeforces ...
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="card md:row-span-2 md:col-start-2 md:row-start-1">
						<div className="card-body-single-column text-left">
							<h1 className="card-header text-accent">
								How about some statistics?
							</h1>
							<div className="statistic-row">
								<h4 className=" text-accent ">{lineStat}</h4>
								<h4 className="text-white">
									Lines of code written this past year
								</h4>
							</div>
							<div className="statistic-row">
								<h4 className="text-accent">{dayStat}</h4>
								<h4 className="text-white">
									Days of continuous programming
								</h4>
							</div>
							<div className="statistic-row">
								<h4 className="text-accent">{bugStat}</h4>
								<h4 className="text-white">
									Bugs encountered and resolved
								</h4>
							</div>
							<div className="bg-primary w-full h-32 md:flex-grow md:h-48 lg:h-72"></div>
						</div>
					</div>
				</div>
			</section>
			<div className="hidden md:block p-0">
				{SectionBanner(10, "Journey Checkpoint")}
			</div>
			<section className="section-container">
				<div className="main-section">
					<div className="card md:col-span-2">
						<div className="card-body-single-column md:!grid md:!grid-cols-3">
							<h1 className="card-header md:hidden">
								Journey Checkpoints
							</h1>
							<div className="flex flex-col items-start gap-1 md:!col-span-1">
								<div className="flex flex-row gap-2 items-center xl:gap-2">
									<img
										src="./src/assets/mark_location.svg"
										alt="location mark"
										className="location-icon"
									/>
									<h4>How it started</h4>
								</div>
								<p className="text-left">
									I picked up programming as a hobby to relax
									in high school. The first language I ever
									learnt was Python! What the hell
								</p>
							</div>
							<div className="flex flex-col items-start gap-1 md:!col-span-1">
								<div className="flex flex-row gap-2 items-center xl:gap-2">
									<img
										src="./src/assets/mark_location.svg"
										alt="location mark"
										className="location-icon"
									/>
									<h4>How it started</h4>
								</div>
								<p className="text-left">
									I picked up programming as a hobby to relax
									in high school. The first language I ever
									learnt was Python! What the hell
								</p>
							</div>
							<div className="flex flex-col items-start gap-1 md:!col-span-1">
								<div className="flex flex-row gap-2 items-center xl:gap-2">
									<img
										src="./src/assets/mark_location.svg"
										alt="location mark"
										className="location-icon"
									/>
									<h4>How it started</h4>
								</div>
								<p className="text-left">
									I picked up programming as a hobby to relax
									in high school. The first language I ever
									learnt was Python! What the hell
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Home;
