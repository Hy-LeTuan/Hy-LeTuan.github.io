import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SquareAnimation from "../layout/SquareAnimation";
import MediaHeader from "../layout/MediaHeader";
import SectionBanner from "../layout/SectionBanner";
import projectList from "../data/portfolio/projectList.json";
import certificateList from "../data/portfolio/certificateList.json";

function Portfolio() {
	const [projects, setProjects] = useState(projectList.projects);
	const [stats, setStats] = useState(projectList.statistics);
	const [certs, setCerts] = useState(certificateList.certificates);

	return (
		<>
			<section className="relative overflow-hidden clear-both w-full bg-primary text-white font-heading-font">
				<div className="main-banner">
					<h1 className="display">Portfolio Presentation</h1>
					<hr className="banner-hr" />
					{MediaHeader(".")}
					{SquareAnimation(null)}
				</div>
			</section>
			<section className="section-container">
				<div className="main-section md:flex md:w-full md:justify-center md:items-center">
					<div className="card-full-width-banner md:w-2/3">
						<div className="bg-primary flex justify-center items-center py-1 px-4 lg:flex-grow">
							<h1 className="text-white">Overall Statistics</h1>
						</div>
						<div className="flex flex-col gap-4 px-3 py-0">
							<div className="row font-heading-font text-white bg-alert md:px-3 md:py-1">
								<h4 className="">Total Projects</h4>
								<h4 className="">{stats.total}</h4>
							</div>
							<div className="row font-heading-font text-white bg-success md:px-3 md:py-1">
								<h4>Finished Projects</h4>
								<h4>{stats.finished}</h4>
							</div>
						</div>
					</div>
				</div>
			</section>

			{SectionBanner(6, "My projects")}
			<section className="section-container">
				<div className="main-section place-items-center">
					{projects?.map((project, index) => (
						<div className="project-card" key={index}>
							<div className="project-card-body">
								<div className="w-full flex justify-center items-center">
									<div className="rounded-full w-32 h-32 bg-secondary shadow-project"></div>
								</div>
								<div className="flex flex-col gap-1">
									<h1 className="text-left text-white lg:text-4xl lg:text-center xl:text-5xl">
										{project.title}
									</h1>
									<p className="text-left text-white line-clamp-3 lg:text-sm lg:text-center xl:text-lg">
										{project.description}
									</p>
								</div>
								<div className="project-card-stats">
									<h4 className="text-left text-white lg:text-2xl lg:text-center xl:text-4xl">
										Statistics
									</h4>
									<ul className="text-left text-white lg:text-sm lg:flex lg:flex-col lg:gap-2 xl:text-lg">
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
										<h5 className="text-white lg:text-base xl:text-xl">
											Details here
										</h5>
									</Link>
								</button>
							</div>
						</div>
					))}
				</div>
			</section>

			{SectionBanner(6, "My certificates")}
			<section className="mt-7">
				<div className="main-section place-items-center">
					{certs?.map((cert, index) => (
						<div className="certificate-card relative" key={index}>
							<div className="card-body-single-column justify-center gap-4">
								<div className="w-full h-40 bg-neutral xl:h-48"></div>
								<div className="flex flex-col gap-1">
									<h1 className="text-black text-left lg:text-4xl xl:text-2xl xl:text-center">
										{cert.title}
									</h1>
									<p className="text-black text-left lg:text-sm xl:text-lg xl:text-center">
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
