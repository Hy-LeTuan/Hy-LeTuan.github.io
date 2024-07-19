import React, { useState } from "react";
import { Link } from "react-router-dom";
import SquareAnimation from "../layout/SquareAnimation";
import MediaHeader from "../layout/MediaHeader";
import projectList from "../data/portfolio/projectList.json";

function Active() {
	const [projects, setProjects] = useState(projectList.projects);

	return (
		<>
			<section className="relative overflow-hidden clear-both w-full bg-primary text-white font-heading-font">
				<div className="p-12 flex flex-col gap-6 justify-center items-center overflow-hidden">
					<h1 className="text-3xl">Active Projects</h1>
					{MediaHeader(".")}
					{SquareAnimation(null)}
				</div>
			</section>

			<section className="mt-10 mb-8">
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
											<Link to={`/active/${index}`}>
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
			</section>
		</>
	);
}

export default Active;
