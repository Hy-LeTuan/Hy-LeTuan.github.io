import React from "react";
import SquareAnimation from "../layout/SquareAnimation";
import MediaHeader from "../layout/MediaHeader";
import SectionBanner from "../layout/SectionBanner";

function Portfolio() {
	return (
		<>
			<section className="relative overflow-hidden clear-both w-full bg-primary text-white font-heading-font">
				<div className="p-12 flex flex-col gap-6 justify-center items-center overflow-hidden">
					<h1 className="text-3xl">Portfolio Presentation</h1>
					<MediaHeader />
					{SquareAnimation(null)}
				</div>
			</section>
			<section className="mt-10">
				<div className="main-section">
					<div className="shadow-card flex flex-col overflow-hidden">
						<div className="bg-neutral flex justify-center items-center px-1 py-3">
							<h2 className="font-heading-font text-white text-2xl">
								Overall Statistics
							</h2>
						</div>
						<div className="flex flex-col gap-6 px-6 py-6">
							<div className="row font-heading-font text-white bg-accent">
								<h3 className="text-xl">Total Projects</h3>
								<h3 className="text-xl">156</h3>
							</div>
							<div className="row font-heading-font text-white bg-success">
								<h3 className="text-xl">Finished Projects</h3>
								<h3 className="text-xl">156</h3>
							</div>
						</div>
					</div>
				</div>
				{SectionBanner(6, "My projects")}
				<div className="main-section">
					<div className="card-holder">
						<div className="project-card">
							<div className="absolute top-0 left-0 bg-accent w-full h-32"></div>
							<div className="z-10 rounded-full w-40 h-40 bg-secondary shadow-project mt-10"></div>
							<div className="project-card-body">
								<h2 className="text-left text-2xl font-heading-font text-white">
									Project name
								</h2>
								<p className="text-xs text-left text-white font-body-font">
									This is the place to put in the project
									description. Describe what it does and who
									does it help / who does it benefit. Be
									descriptive and pray to god that the Caltech
									admissions will read it. This can really
									make or break your profile brother, be
									strong and be determined.
								</p>
								<div className="project-card-footer">
									<div className="project-card-stats">
										<h4 className="text-left text-xl font-heading-font text-white">
											Statistics
										</h4>
										<ul className="text-left list-disc list-inside font-body-font text-xs text-white">
											<li>Date started: 15/7/2024</li>
											<li>No. of collaborators: 12</li>
											<li>Project length: 100h</li>
											<li>Project status: Completed</li>
										</ul>
									</div>
									<button className="btn btn-card-footer">
										<h6 className="text-sm font-heading-font text-white">
											Click for details
										</h6>
									</button>
								</div>
							</div>
						</div>
						<div className="project-card">
							<div className="absolute top-0 left-0 bg-accent w-full h-32"></div>
							<div className="z-10 rounded-full w-40 h-40 bg-secondary shadow-project mt-10"></div>
							<div className="project-card-body">
								<h2 className="text-left text-2xl font-heading-font text-white">
									Project name
								</h2>
								<p className="text-xs text-left text-white font-body-font">
									This is the place to put in the project
									description. Describe what it does and who
									does it help / who does it benefit. Be
									descriptive and pray to god that the Caltech
									admissions will read it. This can really
									make or break your profile brother, be
									strong and be determined.
								</p>
								<div className="project-card-footer">
									<div className="project-card-stats">
										<h4 className="text-left text-xl font-heading-font text-white">
											Statistics
										</h4>
										<ul className="text-left list-disc list-inside font-body-font text-xs text-white">
											<li>Date started: 15/7/2024</li>
											<li>No. of collaborators: 12</li>
											<li>Project length: 100h</li>
											<li>Project status: Completed</li>
										</ul>
									</div>
									<button className="btn btn-card-footer">
										<h6 className="text-sm font-heading-font text-white">
											Click for details
										</h6>
									</button>
								</div>
							</div>
						</div>
						<div className="project-card">
							<div className="absolute top-0 left-0 bg-accent w-full h-32"></div>
							<div className="z-10 rounded-full w-40 h-40 bg-secondary shadow-project mt-10"></div>
							<div className="project-card-body">
								<h2 className="text-left text-2xl font-heading-font text-white">
									Project name
								</h2>
								<p className="text-xs text-left text-white font-body-font">
									This is the place to put in the project
									description. Describe what it does and who
									does it help / who does it benefit. Be
									descriptive and pray to god that the Caltech
									admissions will read it. This can really
									make or break your profile brother, be
									strong and be determined.
								</p>
								<div className="project-card-footer">
									<div className="project-card-stats">
										<h4 className="text-left text-xl font-heading-font text-white">
											Statistics
										</h4>
										<ul className="text-left list-disc list-inside font-body-font text-xs text-white">
											<li>Date started: 15/7/2024</li>
											<li>No. of collaborators: 12</li>
											<li>Project length: 100h</li>
											<li>Project status: Completed</li>
										</ul>
									</div>
									<button className="btn btn-card-footer">
										<h6 className="text-sm font-heading-font text-white">
											Click for details
										</h6>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				{SectionBanner(6, "My certificates")}
				<div className="main-section">
					<div className="card-holder gap-1">
						<div className="card">
							<div className="card-body-single-column justify-center gap-4">
								<div className="w-full h-40 bg-neutral"></div>
								<div className="flex flex-col">
									<h2 className="text-xl font-heading-font text-black text-left">
										Title for each certificates
									</h2>
									<p className="text-xs font-body-font text-black text-left">
										Description for what you have done to
										achieve the certificate
									</p>
								</div>
							</div>
						</div>
						<div className="card">
							<div className="card-body-single-column justify-center gap-4">
								<div className="w-full h-40 bg-neutral"></div>
								<div className="flex flex-col">
									<h2 className="text-xl font-heading-font text-black text-left">
										Title for each certificates
									</h2>
									<p className="text-xs font-body-font text-black text-left">
										Description for what you have done to
										achieve the certificate
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

export default Portfolio;
