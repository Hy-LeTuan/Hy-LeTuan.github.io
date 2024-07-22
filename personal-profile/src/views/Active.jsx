import React, { useState } from "react";
import { Link } from "react-router-dom";
import SquareAnimation from "../layout/SquareAnimation";
import MediaHeader from "../layout/MediaHeader";
import projectList from "../data/portfolio/projectList.json";

function Active() {
	const [projects, setProjects] = useState(projectList.projects);

	return (
		<>
			<section className="relative overflow-hidden clear-both w-full bg-primary">
				<div className="main-banner">
					<h1 className="display">Active projects</h1>
					<hr className="banner-hr" />
					{MediaHeader(".")}
					{SquareAnimation(null)}
				</div>
			</section>

			<section className="mt-7 lg:mt-16 xl:mt-24">
				<div className="main-section">
					{projects?.map((project, index) => (
						<div className="project-card" key={index}>
							<div className="project-card-body">
								<div className="w-full flex justify-center items-center">
									<div className="rounded-full w-40 h-40 bg-secondary shadow-project xl:w-52 xl:h-52 xl:mt-20"></div>
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
									<Link to={`/active/${index}`}>
										<h5 className="text-white lg:text-base xl:text-xl">
											Details heres
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
