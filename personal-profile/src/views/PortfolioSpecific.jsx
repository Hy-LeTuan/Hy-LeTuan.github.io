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

	// fetch the appropriate logs
	useEffect(() => {
		fetchProject();
	}, []);

	return (
		<>
			<section className="relative overflow-hidden clear-both w-full bg-primary text-white font-heading-font">
				<div className="p-12 flex flex-col gap-6 justify-center items-center overflow-hidden">
					<h1 className="text-3xl">Portfolio Presentation</h1>
					{MediaHeader("..")}
					{SquareAnimation(null)}
				</div>
			</section>
			<section className="mt-10">
				<div className="main-section">
					<div className="w-full flex flex-col justify-center items-center gap-8">
						<div className="rounded-full w-44 h-44 bg-gray-300 shadow-project mt-10"></div>
						<h2 className="font-heading-font text-2xl">
							Project title: {project?.title}
						</h2>
					</div>
				</div>
			</section>
			<section className="mt-10">
				<div className="main-section">
					<div className="card">
						<div className="card-body-single-column gap-4">
							<div className="project-specific-single-part">
								<div className="flex items-center gap-2">
									<h5 className="font-heading-font text-black text-base text-left">
										Project description
									</h5>
									<img
										className="w-5 h-5"
										src="../src/assets/description.svg"
										alt="Description icon"
									/>
								</div>
								<p className="text-left font-body-font text-black text-xs">
									{project?.description}
								</p>
							</div>
							<div className="project-specific-single-part">
								<div className="flex items-center gap-2">
									<h5 className="font-heading-font text-black text-base text-left">
										Project details
									</h5>
									<img
										className="w-5 h-5"
										src="../src/assets/description.svg"
										alt="Description icon"
									/>
								</div>
								<p className="text-left font-body-font text-black text-xs">
									{project?.details}
								</p>
							</div>
							<div className="project-specific-single-part">
								<div className="flex items-center gap-2">
									<h5 className="font-heading-font text-black text-base text-left">
										Technologies involved
									</h5>
									<img
										className="w-5 h-5"
										src="../src/assets/list_heart.svg"
										alt="Description icon"
									/>
								</div>
								<ul className="flex flex-col gap-1 font-body-font text-xs text-left text-black list-disc list-inside marker:text-accent">
									{project?.technologies?.map(
										(tech, index) => (
											<li key={index}>{tech}</li>
										)
									)}
								</ul>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-body-single-column gap-4">
							<div className="project-specific-single-part">
								<div className="flex items-center gap-2">
									<h5 className="font-heading-font text-black text-base text-left">
										Project statistics
									</h5>
									<img
										className="w-5 h-5"
										src="../src/assets/statistics.svg"
										alt="Description icon"
									/>
								</div>
								<ul className="flex flex-col gap-1 font-body-font text-xs text-left text-black list-disc list-inside marker:text-accent">
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
										{project?.statistics?.length}
									</li>
									<li>
										Project status:{" "}
										{project?.statistics?.length}h
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="card-body-single-column gap-4">
							<div className="project-specific-single-part">
								<div className="flex items-center gap-2">
									<h5 className="font-heading-font text-black text-base text-left">
										My contributions
									</h5>
									<img
										className="w-5 h-5"
										src="../src/assets/description.svg"
										alt="Description icon"
									/>
								</div>
								<p className="text-left font-body-font text-black text-xs">
									This is the place to put in the project
									description. Describe what it does and who
									does it help / who does it benefit. Be
									descriptive and pray to god that the Caltech
									admissions will read it. This can really
									make or break your profile brother, be
									strong and be determined.
								</p>
								<p className="text-left font-body-font text-black text-xs mt-2">
									This is the place to put in the project
									description. Describe what it does and who
									does it help / who does it benefit. Be
									descriptive and pray to god that the Caltech
									admissions will read it. This can really
									make or break your profile brother, be
									strong and be determined.
								</p>
							</div>
						</div>
					</div>
					<div>
						<div className="card">
							<div className="card-body-single-column gap-4">
								<div className="project-specific-single-part">
									<div className="flex items-center gap-2">
										<h5 className="font-heading-font text-black text-base text-left">
											Difficulties & Struggles
										</h5>
										<img
											className="w-5 h-5"
											src="../src/assets/error_icon.svg"
											alt="Description icon"
										/>
									</div>
									<ul className="flex flex-col gap-1 font-body-font text-xs text-left text-black list-disc list-inside marker:text-accent">
										{project?.diff_and_solutions?.map(
											(pair, index) => (
												<li
													key={index}
													className="text-left font-body-font text-black text-xs">
													{pair.difficulty}
												</li>
											)
										)}
									</ul>
								</div>
							</div>
						</div>
						<div className="card bg-primary mb-0">
							<div className="card-body-single-column gap-4">
								<div className="project-specific-single-part">
									<div className="flex items-center gap-2">
										<h5 className="font-heading-font text-white text-base text-left">
											Solutions
										</h5>
										<img
											className="w-5 h-5"
											src="../src/assets/checkmark.svg"
											alt="Description icon"
										/>
									</div>
									<ul className="flex flex-col gap-1 font-body-font text-xs text-left text-black list-disc list-inside marker:text-white">
										{project?.diff_and_solutions?.map(
											(pair, index) => (
												<li
													className="text-left font-body-font text-white text-xs"
													key={index}>
													{pair.solution}
												</li>
											)
										)}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{SectionBanner(5, "Project showcase")}
			<section>
				<div className="main-section">
					<div className="card w-65 h-32"></div>
					<div className="card w-65 h-32"></div>
				</div>
			</section>
		</>
	);
}

export default PortfolioSpecific;
