import React from "react";
import SquareAnimation from "../layout/SquareAnimation";
import MediaHeader from "../layout/MediaHeader";

function Active() {
	return (
		<>
			<section className="relative overflow-hidden clear-both w-full bg-primary text-white font-heading-font">
				<div className="p-12 flex flex-col gap-6 justify-center items-center overflow-hidden">
					<h1 className="text-3xl">Active Projects</h1>
					<MediaHeader />
					{SquareAnimation(null)}
				</div>
			</section>

			<section className="mt-10">
				<div className="main-section">
					<div className="card">
						<div className="card-body-single-column justify-center gap-8">
							<div className="project-card">
								<div className="relative z-10 rounded-full w-32 h-32 bg-secondary"></div>
								<div className="bg-accent rounded-sm py-2 px-4">
									<h1 className="text-2xl font-heading-font text-white">
										Project name
									</h1>
								</div>
								<p className="text-sm text-center text-white font-body-font">
									This is the place to put in the project
									description. Describe what it does and who
									does it help / who does it benefit. Be
									descriptive and pray to god that the Caltech
									admissions will read it. This can really
									make or break your profile brother, be
									strong and be determined.
								</p>
								<div className="project-card-stats">
									<h2 className="text-xl font-heading-font text-white">
										Statistics
									</h2>
									<ul className="text-left list-disc list-inside font-body-font text-sm text-white">
										<li>Date started: 15/7/2024</li>
										<li>No. of collaborators: 12</li>
										<li>Project length: 100h</li>
										<li>Project status: Completed</li>
									</ul>
								</div>
							</div>

							<div className="project-card">
								<div className="relative z-10 rounded-full w-32 h-32 bg-secondary"></div>
								<div className="bg-accent rounded-sm py-2 px-4">
									<h1 className="text-2xl font-heading-font text-white">
										Project name
									</h1>
								</div>
								<p className="text-sm text-center text-white font-body-font">
									This is the place to put in the project
									description. Describe what it does and who
									does it help / who does it benefit. Be
									descriptive and pray to god that the Caltech
									admissions will read it. This can really
									make or break your profile brother, be
									strong and be determined.
								</p>
								<div className="project-card-stats">
									<h2 className="text-xl font-heading-font text-white">
										Statistics
									</h2>
									<ul className="text-left list-disc list-inside font-body-font text-sm text-white">
										<li>Date started: 15/7/2024</li>
										<li>No. of collaborators: 12</li>
										<li>Project length: 100h</li>
										<li>Project status: Completed</li>
									</ul>
								</div>
							</div>

							<div className="project-card">
								<div className="relative z-10 rounded-full w-32 h-32 bg-secondary"></div>
								<div className="bg-accent rounded-sm py-2 px-4">
									<h1 className="text-2xl font-heading-font text-white">
										Project name
									</h1>
								</div>
								<p className="text-sm text-center text-white font-body-font">
									This is the place to put in the project
									description. Describe what it does and who
									does it help / who does it benefit. Be
									descriptive and pray to god that the Caltech
									admissions will read it. This can really
									make or break your profile brother, be
									strong and be determined.
								</p>
								<div className="project-card-stats">
									<h2 className="text-xl font-heading-font text-white">
										Statistics
									</h2>
									<ul className="text-left list-disc list-inside font-body-font text-sm text-white">
										<li>Date started: 15/7/2024</li>
										<li>No. of collaborators: 12</li>
										<li>Project length: 100h</li>
										<li>Project status: Completed</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Active;