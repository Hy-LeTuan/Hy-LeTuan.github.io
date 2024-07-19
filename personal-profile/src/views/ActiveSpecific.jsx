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
			<section className="relative overflow-hidden clear-both w-full bg-primary text-white font-heading-font">
				<div className="p-12 flex flex-col gap-6 justify-center items-center overflow-hidden">
					<h1 className="text-3xl">Active Projects</h1>
					{MediaHeader("..")}
					{SquareAnimation(null)}
				</div>
			</section>
			<section className="mt-10">
				<div className="main-section">
					<div className="w-full flex flex-col justify-center items-center gap-8">
						<div className="rounded-full w-44 h-44 bg-gray-300 shadow-project mt-10"></div>
						<h2 className="font-heading-font text-2xl">
							Project title: {activeProject?.title}
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
									{activeProject?.description}
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
									{activeProject?.technologies?.map(
										(tech, index) => (
											<li key={index}>{tech}</li>
										)
									)}
								</ul>
							</div>
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
							<div className="w-full h-60 bg-primary"></div>
						</div>
					</div>
				</div>
			</section>
			{SectionBanner(5, "Goals & Aims")}
			<section className="mb-8">
				<div className="main-section">
					<div className="card-holder">
						{activeProject?.goals_and_aims?.map((target, index) => (
							<div className="target-card" key={index}>
								<div className="flex justify-start items-center">
									<h4 className="text-xl text-white font-heading-font mr-5">
										{target.title}
									</h4>
									<img
										className="w-6 h-6"
										src="../src/assets/target.svg"
										alt="Description icon"
									/>
								</div>
								<hr className="w-full text-white" />
								<div className="project-specific-single-part">
									<div className="flex items-center gap-2">
										<h5 className="font-heading-font text-white text-base text-left">
											Target description
										</h5>
										<img
											className="w-5 h-5 text-white"
											src="../src/assets/white_description.svg"
											alt="Description icon"
										/>
									</div>
									<p className="text-left font-body-font text-white text-xs mt-2">
										{target.description}
									</p>
								</div>
								<div className="target-card-footer">
									<div className="target-card-footer-col">
										<h5 className="font-heading-font text-white text-base text-left">
											Target deadline
										</h5>
										<ul className="flex flex-col gap-1 font-body-font text-xs text-left text-white list-disc list-inside marker:text-white">
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
										<h5 className="font-heading-font text-white text-base text-left">
											Status
										</h5>
										<p className="text-left font-body-font text-white text-xs">
											{target.status}
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

export default ActiveSpecific;
