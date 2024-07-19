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
				<div className="p-12 flex flex-col gap-6 justify-center items-center overflow-hidden">
					<h1 className="text-3xl">Portfolio Presentation</h1>
					{MediaHeader(".")}
					{SquareAnimation(null)}
				</div>
			</section>
			<section className="mt-10">
				<div className="main-section">
					<div className="shadow-card flex flex-col overflow-hidden">
						<div className="bg-primary flex justify-center items-center px-1 py-3">
							<h2 className="font-heading-font text-white text-2xl">
								Overall Statistics
							</h2>
						</div>
						<div className="flex flex-col gap-6 px-6 py-6">
							<div className="row font-heading-font text-white bg-accent">
								<h3 className="text-xl">Total Projects</h3>
								<h3 className="text-xl">{stats.total}</h3>
							</div>
							<div className="row font-heading-font text-white bg-success">
								<h3 className="text-xl">Finished Projects</h3>
								<h3 className="text-xl">{stats.finished}</h3>
							</div>
						</div>
					</div>
				</div>
				{SectionBanner(6, "My projects")}
				<div className="main-section">
					<div className="card-holder">
						{projects?.map((project, index) => (
							<div className="project-card" key={index}>
								<div className="absolute top-0 left-0 bg-accent w-full h-32"></div>
								<div className="z-10 rounded-full w-40 h-40 bg-secondary shadow-project mt-10"></div>
								<div className="project-card-body">
									<h2 className="text-left text-2xl font-heading-font text-white">
										{project.title}
									</h2>
									<p className="text-xs text-left text-white font-body-font line-clamp-5">
										{project.description}
									</p>
									<div className="project-card-footer">
										<div className="project-card-stats">
											<h4 className="text-left text-xl font-heading-font text-white">
												Statistics
											</h4>
											<ul className="text-left list-disc list-inside font-body-font text-xs text-white">
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
												<li>
													Project length:{" "}
													{project.statistics?.length}
													h
												</li>
												<li>
													Project status:{" "}
													{project.statistics.status}
												</li>
											</ul>
										</div>
										<button className="btn btn-card-footer">
											<Link to={`/portfolio/${index}`}>
												<h6 className="text-sm font-heading-font text-white">
													Click for details
												</h6>
											</Link>
										</button>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{SectionBanner(6, "My certificates")}
				<div className="main-section">
					<div className="card-holder gap-1">
						{certs?.map((cert, index) => (
							<div className="card" key={index}>
								<div className="card-body-single-column justify-center gap-4">
									<div className="w-full h-40 bg-neutral"></div>
									<div className="flex flex-col">
										<h2 className="text-xl font-heading-font text-black text-left">
											{cert.title}
										</h2>
										<p className="text-xs font-body-font text-black text-left">
											{cert.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

export default Portfolio;
