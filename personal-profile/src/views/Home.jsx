import React, { useState, useEffect } from "react";
import SquareAnimation from "../layout/SquareAnimation";
import MediaHeader from "../layout/MediaHeader";
import chartStats from "/src/data/home/stats.json";
import checkpoint from "/src/data/home/checkpoint.json";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";

function Home() {
	const [bodyFontSize, setBodyFontSize] = useState(14);
	const [headerFontSize, setHeaderFontSize] = useState(16);

    const [axesSpacing, setAxesSpacing] = useState(24); 
    const [titleSpacing, setTitleSpacing] = useState(8); 

	const onScreenSizeChange = () => {
		const width = window.innerWidth;

		if (width < 768) {
            // set font size 
			setBodyFontSize(14);
			setHeaderFontSize(16);

            // set spacing
            setAxesSpacing(8); 
            setTitleSpacing(2); 
		} else if (width >= 1024 && width < 1280) {
            // set font size
			setBodyFontSize(16);
			setHeaderFontSize(20);
            
            // set spacing
            setAxesSpacing(20); 
            setTitleSpacing(4); 
		} else if (width >= 1280) {
            // set font size 
			setBodyFontSize(20);
			setHeaderFontSize(30);

            // set spacing
            setAxesSpacing(24); 
            setTitleSpacing(12); 
		}
	};

	const options = {
		elements: {
			point: {
				radius: 3,
			},
		},
		plugins: {
			legend: {
				display: true,
				labels: {
			font: {
						fmily: "Montserrat, sans-serif",
						size: `${bodyFontSize}px`,
					},
				},
			},
			title: {
				display: true,
				text: "Number of CP problems solved",
				position: "bottom",
				align: "center",
				font: {
					family: "Montserrat, sans-serif",
					size: `${headerFontSize}px`,
				},
				color: "#000",
				padding: {
					top: `${titleSpacing}`,
				},
			},
		},
		scales: {
			x: {
				ticks: {
					font: {
						family: "Montserrat, sans-serif",
						size: `${bodyFontSize}px`,
					},
                    padding: axesSpacing,
				},
			},
			y: {
				ticks: {
					font: {
						family: "Montserrat, sans-serif",
						size: `${bodyFontSize}px`,
					},
                    padding: axesSpacing,
				},
			},
		},
	};

	useEffect(() => {
		onScreenSizeChange();
		window.addEventListener("resize", onScreenSizeChange);

		return () => {
			window.removeEventListener("resize", onScreenSizeChange);
		};
	}, []);

	return (
		<>
			<section className="relative overflow-hidden clear-both w-full bg-primary">
				<div className="main-banner">
					<div className="relative z-10 rounded-full w-32 h-32 lg:w-36 lg:h-36 xl:w-44 xl:h-44 bg-secondary"></div>
					<div className="biography">
						<h1 className="display">Hey, I'm Le Tuan Hy</h1>
						<h4>Studet, Developer, Sportstes</h4>
					</div>
					<hr className="banner-hr" />
					{MediaHeader(".")}
					{SquareAnimation(null)}
				</div>
			</section>
			<section className="section-container bg-white">
				<div className="flex flex-col w-full">
					<h5 className="text-neutral-400">WELCOME</h5>
					<h1>
						Let me <br className="md:hidden lg:block xl:hidden" />{" "}
						show you around
					</h1>
				</div>
				<div className="main-section mt-12 gap-9 lg:mt-20 lg:gap-11 xl:mt-24 xl:gap-14">
					<div className="row">
						<div className="card bg-primary md:w-3/5">
							<header className="flex items-center gap-3 xl:gap-5">
								<h2 className="text-white text-left">
									Who am I
								</h2>
								<img
									src="/src/assets/page-icons/question_mark.svg"
									alt="question mark icon"
									className="w-6 h-6 xl:h-8 xl:w-8"
								/>
							</header>
							<div className="card-body-single-column mt-6 xl:mt-8">
								<p className="text-white">
									Hi there, my name is Le Tuan Hy and I’m an
									undergraduate from Vietnam. I’m currently
									working towards fulfilling my dream of being
									a computer scientist and an engineer.
								</p>
							</div>
							<footer className="mt-6 xl:mt-8">
								<p className="text-neutral-400 text-xs text-left lg:text-sm xl:text-xl">
									Apart from programming, I also love
									designing websites, play music and sending
									tennis balls flying.
								</p>
							</footer>
						</div>
					</div>
					<div className="row">
						<div className="card bg-white border-[0.5px] border-black xl:px-12">
							<div className="m-0 p-0 md:grid md:grid-cols-2 md:gap-x-5 md:place-items-center xl:gap-x-12">
								<img
									src="/src/assets/images/about_this_site_illustration.png"
									alt="about this site illustration"
									className="md:col-span-1 md:row-start-1 md:col-start-2 md:row-span-1"
								/>
								<div className="m-0 p-0 md:col-span-1 md:col-start-1 md:row-start-1 md:row-span-1">
									<header className="mt-6 md:mt-0">
										<h2 className="text-left">
											About this site
										</h2>
									</header>
									<div className="card-body-single-column mt-6 gap-6 xl:gap-10 xl:mt-10">
										<p className="text-left">
											This site is my own portfolio page,
											a page where I can show off my
											passion and hopefully impress
											visitors.
										</p>
										<ul className="flex flex-col gap-4 xl:gap-7">
											<li className="flex gap-3 items-center justify-start lg:gap-4">
												<img
													src="/src/assets/page-icons/info.svg"
													alt=""
													className="h-4 w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6"
												/>
												<p>
													The Homepage is my self
													introduction.
												</p>
											</li>
											<li className="flex gap-3 items-center justify-start lg:gap-4">
												<img
													src="/src/assets/page-icons/info.svg"
													alt=""
													className="h-4 w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6"
												/>
												<p>
													The Profile page contains my
													completed projects.
												</p>
											</li>
											<li className="flex gap-3 items-center justify-start lg:gap-4">
												<img
													src="/src/assets/page-icons/info.svg"
													alt=""
													className="h-4 w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6"
												/>
												<p>
													The Active page contains
													projects I’m currently
													working on.
												</p>
											</li>
											<li className="flex gap-3 items-center justify-start lg:gap-4">
												<img
													src="/src/assets/page-icons/info.svg"
													alt=""
													className="h-4 w-4 lg:h-5 lg:w-5 xl:h-6 xl:w-6"
												/>
												<p>
													The Blogs page has blogs
													about interesting topics
													technology topics.
												</p>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section-container bg-neutral-100">
				<div className="w-full m-0 p-0 md:w-3/4 md:mx-auto">
					<div className="flex flex-col w-full gap-3">
						<h5 className="text-neutral-400 text-left">
							Programming Statistics
						</h5>
						<h1 className="text-left">
							How about some coding statistics?
						</h1>
					</div>
					<div className="main-section gap-9 mt-12 lg:mt-18 xl:mt-24 xl:gap-12">
						<Line
							data={chartStats}
							options={options}
							className="justify-self-center self-center"
						/>
						<div className="flex flex-col gap-4 md:gap-6 lg:mt-4 lg:gap-6 xl:gap-8">
							<div className="flex justify-between items-center pt-1 pb-2 border-black border-b-[0.5px] lg:pb-3 xl:pb-5">
								<h4 className="text-accent">1003</h4>
								<h4>Lines of code written this year</h4>
							</div>
							<div className="flex justify-between items-center pt-1 pb-2 border-black border-b-[0.5px] lg:pb-3 xl:pb-5">
								<h4 className="text-accent">1003</h4>
								<h4>Days of continuous programming</h4>
							</div>
							<div className="flex justify-between items-center pt-1 pb-2 border-black border-b-[0.5px] lg:pb-3 xl:pb-5">
								<h4 className="text-accent">1003</h4>
								<h4>Bugs encountered and solved</h4>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section-container bg-primary">
				<div className="flex flex-col w-full gap-3">
					<h5 className="text-neutral-400 text-left">
						Journey Checkpoints
					</h5>
					<h1 className="text-left text-white">
						My memorable coding checkpoints
					</h1>
				</div>
				<div className="main-section mt-12 xl:mt-24">
					<div className="m-0 p-0 md:grid md:grid-cols-2 md:gap-x-5 md:gap-y-8 lg:gap-x-10 lg:gap-y-12 xl:gap-x-12 xl:gap-y-20">
						{checkpoint?.checkpoints.map((c, index) => (
							<div key={index}>
								<Disclosure>
									<div className="flex gap-4 items-center justify-between md:col-span-1">
										<img
											src="/src/assets/mark_location.svg"
											alt="Location mark icon"
											className="w-6 h-7 xl:w-8 xl:h-9"
										/>
										<DisclosureButton className="flex flex-grow items-center justify-between px-4 py-1 bg-white/5 rounded-lg group data-[active]:bg-white/10 xl:py-3 xl:px-6">
											<h4 className="text-white">
												{c.title}
											</h4>
											<img
												src="/src/assets/angle_down.svg"
												alt="Angle down icon"
												className="-rotate-90 w-8 group-data-[open]:rotate-0 transition-transform duration-200 xl:w-8 xl:h-8"
											/>
										</DisclosureButton>
									</div>
									<DisclosurePanel
										className="mt-3 text-white text-left bg-white/5 border-white/10 border-1 rounded-lg px-4 py-2 origin-top transition duration-200 ease-out data-[closed]:-translate-y-6 data-[closed]:opacity-0 data-[closed]:scale-90"
										transition>
										<p>{c.description}</p>
									</DisclosurePanel>
								</Disclosure>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

export default Home;
