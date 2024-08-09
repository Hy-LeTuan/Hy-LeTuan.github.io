import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SquareAnimation from "../layout/SquareAnimation";
import MediaHeader from "../layout/MediaHeader";
import projectList from "../data/portfolio/projectList.json";
import certificateList from "../data/portfolio/certificateList.json";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js";
import { data } from "autoprefixer";

function Portfolio() {
	const projects = projectList.projects;
	const stats = projectList.statistics;
	const types = projectList.types;
	const certs = certificateList.certificates;

	const [doubleCol, setDoubleCol] = useState(false);

	// data
	const typesData = {
		labels: ["Research", "Commercial", "Hobby"],
		datasets: [
			{
				label: "Project count",
				data: [types.research, types.commercial, types.hobby],
				borderColor: "#525252",
				backgroundColor: "rgba(255, 204, 160, 1)",
			},
		],
	};

	// options
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
						family: "Montserrat, sans-serif",
						size: "12px",
					},
				},
			},
			title: {
				display: true,
				text: "Different types of projects I've contributed",
				position: "bottom",
				align: "center",
				font: {
					family: "Montserrat, sans-serif",
					size: 14,
				},
				color: "#000",
			},
		},
		scales: {
			x: {
				ticks: {
					font: {
						family: "Montserrat, sans-serif",
						size: 12,
					},
				},
			},
			y: {
				ticks: {
					font: {
						family: "Montserrat, sans-serif",
						size: 12,
					},
				},
			},
		},
	};

	const checkScreenSize = () => {
		const width = window.innerWidth;

		if (width < 768) {
			setDoubleCol(false);
		} else {
			setDoubleCol(true);
		}
	};

	useEffect(() => {
		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);

		return () => {
			window.removeEventListener("resize", checkScreenSize);
		};
	}, []);

	return (
		<>
			<section className="relative overflow-hidden clear-both w-full bg-primary text-white font-heading-font">
				<div className="main-banner">
					<h1 className="display">My Profile</h1>
					<hr className="banner-hr" />
					{MediaHeader(".")}
					{SquareAnimation(null)}
				</div>
			</section>
			<section className="section-container bg-neutral-100">
				<div className="m-0 p-0 w-full xl:w-3/4 xl:mx-auto">
					<div className="flex flex-col w-full gap-3">
						<h5 className="text-neutral-400">Overall Statistics</h5>
						<h1>
							Overview of <br className="xl:hidden" /> project
							volume
						</h1>
					</div>
					<Bar
						data={typesData}
						options={options}
						className="mt-20 xl:mt-24"
					/>
					<div className="border-black border-t-[0.5px] mt-7 mb-9 md:mt-12 md:mb-14 lg:mt-16 lg:mb-20 xl:mt-20 xl:mb-24"></div>
					<div className="m-0 p-0 md:grid md:grid-cols-2 md:gap-x-5 md:place-items-stretch lg:gap-x-10 xl:gap-x-12">
						<div className="card py-2 px-4 bg-neutral-100 border-[0.5px] border-black mt-7 md:mt-0 lg:py-3 xl:py-4 lx:px-6">
							<div className="card-body-single-column gap-3 xl:gap-8">
								<h2>{stats.finished}</h2>
								<p className="text-neutral-500">
									Projects that have been finished with stable
									main functionalities.
								</p>
							</div>
						</div>
						<div className="card py-2 px-4 bg-primary border-[0.5px] border-black mt-7 md:mt-0 lg:py-3 xl:py-4 lx:px-6">
							<div className="card-body-single-column gap-3 xl:gap-8">
								<h2 className="text-white">{stats.finished}</h2>
								<p className="text-neutral-400">
									Projects that have been finished with stable
									main functionalities.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section-container bg-primary">
				<div className="w-full m-0 p-0 xl:w-3/4 xl:mx-auto">
					<div className="flex flex-col w-full gap-3">
						<h5 className="text-neutral-400">Project showcase</h5>
						<h1 className="text-white">
							Brief summary of all projects
						</h1>
					</div>
					<div className="main-section gap-16 mt-12 place-items-center md:mt-16 md:grid md:grid-cols-2 md:gap-y-16 md:gap-x-5 lg:gap-x-10 lg:gap-y-20 lg:mt-24 xl:mt-32 xl:gap-x-12 xl:gap-y-24 xl:">
						{projects?.map((project, index) => (
							<div
								className={
									doubleCol
										? index % 2 === 0
											? "card bg-wave-pattern bg-cover bg-no-repeat place-self-end shadow-md shadow-black lg:px-8 xl:py-16 xl:px-10"
											: "card bg-wave-pattern bg-cover bg-no-repeat place-self-start shadow-md shadow-black lg:px-8 xl:py-16 xl:px-10"
										: "card bg-wave-pattern bg-cover bg-no-repeat shadow-md shadow-black lg:px-8 xl:py-16 xl:px-10"
								}
								key={index}>
								<div className="card-body-single-column gap-8 lg:gap-9 xl:gap-12">
									<div className="w-full flex justify-center items-center">
										<div className="rounded-full w-32 h-32 xl:w-44 xl:h-44 bg-secondary"></div>
									</div>
									<div className="flex flex-col gap-4 lg:gap-6">
										<h2 className="text-left text-white">
											Title: {project.title}
										</h2>
										<p className="text-left text-white line-clamp-4">
											{project.description}
										</p>
									</div>
									<div className="project-card-stats">
										<ul className="text-xs text-left text-neutral-200 lg:text-sm xl:text-xl">
											<li>
												Date started:{" "}
												{project.statistics?.date}
											</li>
											<li>
												No. of collaborators:{" "}
												{
													project.statistics
														?.collaborators
												}
											</li>
										</ul>
										<ul className="text-xs text-left text-neutral-200 lg:text-sm xl:text-xl">
											<li>
												Project length:{" "}
												{project.statistics?.length}h
											</li>
											<li>
												Project status:{" "}
												{project.statistics.status}
											</li>
										</ul>
									</div>
									<button
										className="btn btn-card-footer"
										type="button">
										<Link to={`/portfolio/${index}`}>
											<h5 className="text-white">
												Details here
											</h5>
										</Link>
									</button>
								</div>
							</div>
						))}
					</div>
					<div className="my-20 border-1 border-white lg:my-24 xl:my-28"></div>
					<div className="flex flex-col w-full gap-3">
						<h5 className="text-neutral-400 text-left">
							Certificate showcase
						</h5>
						<h1 className="text-white text-left">
							Earned Certificates
						</h1>
					</div>
					<div className="main-section mt-12 gap-8 place-items-center md:mt-16 md:grid md:grid-cols-2 md:gap-y-16 md:gap-x-5 lg:gap-x-10 lg:gap-y-20 xl:mt-24 xl:gap-x-12 xl:gap-y-24">
						{certs?.map((cert, index) => (
							<div
								className={
									doubleCol
										? index % 2 === 0
											? "certificate-card relative shadow-md shadow-black place-self-end"
											: "certificate-card relative shadow-md shadow-black place-self-start"
										: "certificate-card relative shadow-md shadow-black"
								}
								key={index}>
								<div className="w-full h-40 bg-neutral-400 xl:h-48"></div>
								<div className="card-body-single-column px-4">
									<div className="flex flex-col gap-1">
										<p className="text-black text-left">
											{cert.description}
										</p>
									</div>
								</div>
								<img
									className="block absolute bottom-0 right-0 p-0 m-0 max-w-28 max-h-20"
									src="./src/assets/background/border_pattern.svg"
									alt=""
								/>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

export default Portfolio;
