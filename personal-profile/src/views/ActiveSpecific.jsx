import React, { useEffect, useState } from "react";
import MediaHeader from "../layout/MediaHeader";
import SquareAnimation from "../layout/SquareAnimation";
import SectionBanner from "../layout/SectionBanner";
import { useParams } from "react-router-dom";

function ActiveSpecific() {
	const [activeProject, setActiveProject] = useState({});
	const params = useParams();

	const fetchActiveProject = async () => {
		try {
			const response = await fetch(
				`../src/data/active/specifics/active-project-${params.id}.json`
			);
			try {
				const data = await response.json();
				setActiveProject(data);
			} catch (e) {
				console.log(`JSON error: ${e}`);
			}
		} catch (e) {
			console.log(`Fetch error: ${e}`);
		}
	};

	// fetch the appropriate active project details
	useEffect(() => {
		fetchActiveProject();
	}, []);

	return (
		<>
			<section className="relative overflow-hidden clear-both w-full bg-primary text-white">
				<div className="p-12 flex flex-col gap-6 justify-center items-center overflow-hidden lg:p-24">
					<h1 className="text-3xl lg:text-5xl">
						Active Project Details
					</h1>
					{MediaHeader("..")}
					{SquareAnimation(null)}
				</div>
			</section>
			<section className="mt-7 lg:mt-16">
				<div className="main-section">
					<div className="w-full flex flex-col justify-center items-center gap-8 lg:col-span-2">
						<div className="rounded-full w-44 h-44 bg-gray-300 shadow-project mt-10"></div>
						<h1 className="">
							Project title: {activeProject?.title}
						</h1>
					</div>
				</div>
			</section>
			<section className="mt-0">
				<div className="main-section">
					<div className="project-specific-card lg:col-span-2 lg:mb-0">
						<div className="card-body-single-column gap-4">
							<div className="project-specific-single-part">
								<div className="flex items-center gap-2">
									<h4 className="text-left">
										Project description
									</h4>
									<img
										className="w-5 h-5 lg:w-6 lg:h-6"
										src="../src/assets/description.svg"
										alt="Description icon"
									/>
								</div>
								<p className="text-left font-body-font text-black text-xs lg:text-sm">
									{activeProject?.description}
								</p>
							</div>

							<div className="project-specific-single-part">
								<div className="flex items-center gap-2">
									<h4 className="">Technologies involved</h4>
									<img
										className="w-5 h-5 lg:w-6 lg:h-6"
										src="../src/assets/list_heart.svg"
										alt="Description icon"
									/>
								</div>
								<ul className="flex flex-col gap-1 text-left text-black marker:text-accent lg:text-sm lg:gap-2">
									{activeProject?.technologies?.map(
										(tech, index) => (
											<li key={index}>{tech}</li>
										)
									)}
								</ul>
							</div>
							<div className="project-specific-single-part">
								<div className="flex items-center gap-2">
									<h4 className="text-left">
										Project statistics
									</h4>
									<img
										className="w-5 h-5 lg:w-6 lg:h-6"
										src="../src/assets/statistics.svg"
										alt="Description icon"
									/>
								</div>
								<ul className="flex flex-col gap-1 text-left text-black marker:text-accent lg:text-sm lg:gap-2">
									<li>
										Date started:{" "}
										{activeProject?.statistics?.date}
									</li>
									<li>
										Number of collaborators:{" "}
										{
											activeProject?.statistics
												?.collaborators
										}
									</li>
									<li>
										Project length:{" "}
										{activeProject?.statistics?.length}h
									</li>
									<li>
										Project status:{" "}
										{activeProject?.statistics?.status}
									</li>
								</ul>
							</div>
							<div className="w-full h-60 bg-primary lg:h-60 lg:w-2/3 lg:flex-grow"></div>
						</div>
					</div>
				</div>
			</section>
			{SectionBanner(5, "Goals & Aims")}
			<section className="mt-7">
				<div className="main-section">
					{activeProject?.goals_and_aims?.map((target, index) => (
						<div className="target-card" key={index}>
							<div className="flex justify-start items-center">
								<h2 className="text-white mr-5 lg:text-2xl">
									{target.title}
								</h2>
								<img
									className="w-6 h-6"
									src="../src/assets/target.svg"
									alt="Description icon"
								/>
							</div>
							<hr className="w-full text-white" />
							<div className="card-body-single-column">
								<div className="project-specific-single-part">
									<div className="flex items-center gap-2">
										<h4 className="text-white text-left lg:text-xl">
											Target description
										</h4>
										<img
											className="project-specific-card-icon"
											src="../src/assets/white_description.svg"
											alt="Description icon"
										/>
									</div>
									<p className="text-left text-white lg:text-sm">
										{target.description}
									</p>
								</div>
								<div className="target-card-footer">
									<div className="target-card-footer-col">
										<h5 className="font-heading-font text-white text-base text-left lg:text-xl">
											Target deadline
										</h5>
										<ul className="flex flex-col gap-1 font-body-font text-xs text-left text-white list-disc list-inside marker:text-white lg:text-sm">
											<li>
												Duration:{" "}
												{target.deadline?.duratin}
											</li>
											<li>
												From: {target.deadline?.from}
											</li>
											<li>To: {target.deadline?.to}</li>
										</ul>
									</div>
									<div className="target-card-footer-col">
										<h5 className="font-heading-font text-white text-base text-left lg:text-xl">
											Status
										</h5>
										<p className="text-left font-body-font text-white text-xs lg:text-sm">
											{target.status}
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
}

export default ActiveSpecific;
