import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SquareAnimation from "../layout/SquareAnimation";
import MediaHeader from "../layout/MediaHeader";
import projectList from "../data/portfolio/projectList.json";

function Active() {
	const [projects, setProjects] = useState(projectList.projects);

	const [doubleCol, setDoubleCol] = useState(false);

	const checkScreenSize = () => {
		const width = window.innerWidth;

		if (width < 768) {
			setDoubleCol(false);
		} else {
			setDoubleCol(true);
		}

		console.log(doubleCol);
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
			<section className="relative overflow-hidden clear-both w-full bg-primary">
				<div className="main-banner">
					<h1 className="display">Active Projects</h1>
					<hr className="banner-hr" />
					{MediaHeader(".")}
					{SquareAnimation(null)}
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
									<Link to={`/active/${index}`}>
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
		</>
	);
}

export default Active;
