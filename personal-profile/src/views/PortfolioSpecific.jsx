import MediaHeader from "../layout/MediaHeader";
import SquareAnimation from "../layout/SquareAnimation";
import SectionBanner from "../layout/SectionBanner";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PortfolioSpecific() {
	const [project, setProject] = useState({});
	const params = useParams();

	const fetchProject = async () => {
		try {
			const response = await fetch(
				`../src/data/portfolio/specifics/project-${params.id}.json`
			);
			try {
				const data = await response.json();
				setProject(data);
			} catch (e) {
				console.log(`JSON error: ${e}`);
			}
		} catch (e) {
			console.log(`Fetch error: ${e}`);
		}
	};

	// fetch the appropriate project details
	useEffect(() => {
		fetchProject();
	}, []);

	return (
		<>
			<section className="relative overflow-hidden clear-both w-full bg-primary text-white font-heading-font">
				<div className="main-banner">
					<h1 className="display">Project Details</h1>
					<hr className="banner-hr" />
					{MediaHeader("..")}
					{SquareAnimation(null)}
				</div>
			</section>
			<section className="section-container">
				<div className="main-section">
					<div className="w-full flex flex-col justify-center items-center gap-4 md:col-span-2 lg:gap-6 xl:gap-8">
						<div className="rounded-full w-52 h-52 bg-gray-300 shadow-project"></div>
						<h1 className="">Project title: {project?.title}</h1>
					</div>
				</div>
			</section>
			<section className="section-container mt-0">
				<div className="main-section">
					<div className="project-specific-card md:row-span-2">
						<div className="card-body-single-column">
							<div className="project-specific-single-part">
								<div className="flex items-center gap-2">
									<h4 className="text-left">
										Project description
									</h4>
									<img
										className="project-specific-card-icon"
										src="../src/assets/description.svg"
										alt="Description icon"
									/>
								</div>
								<p className="text-left text-black">
									{project?.description}
								</p>
							</div>
							<div className="project-specific-single-part">
								<div className="flex items-center gap-2">
									<h4 className="text-black text-left">
										Project details
									</h4>
									<img
										className="project-specific-card-icon"
										src="../src/assets/description.svg"
										alt="Description icon"
									/>
								</div>
								<p className="text-left font-body-font text-black">
									{project?.details}
								</p>
							</div>
							<div className="project-specific-single-part">
								<div className="flex items-center gap-2">
									<h4 className="text-black text-left">
										Technologies involved
									</h4>
									<img
										className="project-specific-card-icon"
										src="../src/assets/list_heart.svg"
										alt="Description icon"
									/>
								</div>
								<ul className="flex flex-col gap-1 text-left text-black marker:text-accent">
									{project?.technologies?.map(
										(tech, index) => (
											<li key={index}>{tech}</li>
										)
									)}
								</ul>
							</div>
						</div>
					</div>
					<div className="project-specific-card">
						<div className="card-body-single-column">
							<div className="project-specific-single-part">
								<div className="flex items-center gap-2">
									<h4 className="text-black text-left">
										Project statistics
									</h4>
									<img
										className="w-5 h-5 lg:w-6 lg:h-6"
										src="../src/assets/statistics.svg"
										alt="Description icon"
									/>
								</div>
								<ul className="flex flex-col gap-1 text-left text-black marker:text-accent">
									<li>
										Date started:{" "}
										{project?.statistics?.date}
									</li>
									<li>
										Number of collaborators:{" "}
										{project?.statistics?.collaborators}
									</li>
									<li>
										Project length:{" "}
										{project?.statistics?.length}h
									</li>
									<li>
										Project status:{" "}
										{project?.statistics?.status}
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="project-specific-card">
						<div className="card-body-single-column gap-4">
							<div className="flex items-center gap-2">
								<h4 className="text-black text-left">
									My contributions
								</h4>
								<img
									className="w-5 h-5 lg:w-6 lg:h-6"
									src="../src/assets/description.svg"
									alt="Description icon"
								/>
							</div>
							<p className="text-left font-body-font text-black">
								This is the place to put in the project
								description. Describe what it does and who does
								it help / who does it benefit. Be descriptive
								and pray to god that the Caltech admissions will
								read it. This can really make or break your
								profile brother, be strong and be determined.
							</p>
							<p className="text-left font-body-font text-black mt-2">
								This is the place to put in the project
								description. Describe what it does and who does
								it help / who does it benefit. Be descriptive
								and pray to god that the Caltech admissions will
								read it. This can really make or break your
								profile brother, be strong and be determined.
							</p>
						</div>
					</div>
					<div className="project-specific-card shadow-alert shadow-sm lg:col-span-1">
						<div className="card-body-single-column gap-4">
							<div className="flex items-center gap-2">
								<h4 className="text-black text-left lg:text-xl">
									Difficulties & Struggles
								</h4>
								<img
									className="w-5 h-5 lg:w-6 lg:h-6"
									src="../src/assets/error_icon.svg"
									alt="Description icon"
								/>
							</div>
							<ul className="flex flex-col gap-3 text-left text-black lg:gap-4">
								{project?.diff_and_solutions?.map(
									(pair, index) => (
										<li
											key={index}
											className="text-left font-body-font text-black">
											{pair.difficulty}
										</li>
									)
								)}
							</ul>
						</div>
					</div>
					<div className="project-specific-card bg-primary shadow-success shadow-md lg:col-span-1">
						<div className="card-body-single-column gap-4">
							<div className="flex items-center gap-2">
								<h4 className="text-white text-left">
									Solutions
								</h4>
								<img
									className="w-5 h-5 lg:w-6 lg:h-6"
									src="../src/assets/checkmark.svg"
									alt="Description icon"
								/>
							</div>
							<ul className="flex flex-col gap-3 text-left text-black marker:text-white lg:gap-4">
								{project?.diff_and_solutions?.map(
									(pair, index) => (
										<li
											className="text-left font-body-font text-white"
											key={index}>
											{pair.solution}
										</li>
									)
								)}
							</ul>
						</div>
					</div>
				</div>
			</section>
			{SectionBanner(5, "Project showcase")}
			<section className="section-container">
				<div className="main-section">
					<div className="card w-65 h-32 shadow-certificate-card"></div>
					<div className="card w-65 h-32 shadow-certificate-card"></div>
				</div>
			</section>
		</>
	);
}

export default PortfolioSpecific;
