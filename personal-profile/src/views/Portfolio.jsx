import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SquareAnimation from "../layout/SquareAnimation";
import MediaHeader from "../layout/MediaHeader";
import SectionBanner from "../layout/SectionBanner";
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
				<div className="flex flex-col w-full gap-3">
					<h5 className="text-neutral-400">Overall Statistics</h5>
					<h1>
						Overview of <br /> project volume
					</h1>
				</div>
				<Bar data={typesData} options={options} className="mt-12" />
				<div className="border-black border-t-1 mt-7 mb-9"></div>
				<div className="card py-2 px-4 bg-neutral-100 border-[0.5px] border-black">
					<div className="card-body-single-column gap-3">
						<h2>{stats.finished}</h2>
						<p className="text-neutral-500">
							Projects that have been finished with stable main
							functionalities.
						</p>
					</div>
				</div>
				<div className="card py-2 px-4 bg-primary border-[0.5px] border-black mt-7">
					<div className="card-body-single-column gap-3">
						<h2 className="text-white">{stats.finished}</h2>
						<p className="text-neutral-400">
							Projects that have been finished with stable main
							functionalities.
						</p>
					</div>
				</div>
			</section>
			<section className="section-container">
				<div className="main-section place-items-center">
					{projects?.map((project, index) => (
						<div
							className={
								doubleCol
									? index % 2 === 0
										? "project-card place-self-end"
										: "project-card place-self-start"
									: "project-card"
							}
							key={index}>
							<div className="project-card-body">
								<div className="w-full flex justify-center items-center">
									<div className="rounded-full w-32 h-32 bg-secondary shadow-project"></div>
								</div>
								<div className="flex flex-col gap-1 lg:gap-3">
									<h1 className="text-left text-white">
										{project.title}
									</h1>
									<p className="text-left text-white line-clamp-3">
										{project.description}
									</p>
								</div>
								<div className="project-card-stats">
									<h4 className="text-left text-white">
										Statistics
									</h4>
									<ul className="text-left text-white">
										<li>
											Date started:{" "}
											{project.statistics?.date}
										</li>
										<li>
											No. of collaborators:{" "}
											{project.statistics?.collaborators}
										</li>
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
			</section>

			{SectionBanner(6, "Earned Certificates")}
			<section className="section-container">
				<div className="main-section place-items-center">
					{certs?.map((cert, index) => (
						<div
							className={
								doubleCol
									? index % 2 === 0
										? "certificate-card relative place-self-end"
										: "certificate-card relative place-self-start"
									: "certificate-card relative"
							}
							key={index}>
							<div className="w-full h-40 bg-neutral xl:h-48"></div>
							<div className="card-body-single-column px-4">
								<div className="flex flex-col gap-1">
									<h2 className="text-black text-left">
										{cert.title}
									</h2>
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
			</section>
		</>
	);
}

export default Portfolio;
