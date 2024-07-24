import React, { useEffect, useState } from "react";
import MediaHeader from "../layout/MediaHeader";
import SquareAnimation from "../layout/SquareAnimation";
import SectionBanner from "../layout/SectionBanner";
import { useParams } from "react-router-dom";

function ActiveSpecific() {
	const [activeProject, setActiveProject] = useState({});
	const [doubleCol, setDoubleCol] = useState(false);

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
		fetchActiveProject();

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);

		return () => {
			window.removeEventListener("resize", checkScreenSize);
		};
	}, []);

	return (
		<>
			<section className="relative overflow-hidden clear-both w-full bg-primary text-white">
				<div className="main-banner">
					<h1 className="display">Live Progression On Project</h1>
					<hr className="banner-hr" />
					{MediaHeader("..")}
					{SquareAnimation(null)}
				</div>
			</section>
			<section className="section-container">
				<div className="main-section">
					<div className="w-full flex flex-col justify-center items-center gap-4 md:col-span-2 lg:gap-6 xl:gap-8">
						<div className="rounded-full w-52 h-52 bg-gray-300 shadow-project"></div>
						<h1 className="">
							Project title: {activeProject?.title}
						</h1>
					</div>
				</div>
			</section>
			<section className="section-container mt-0">
				<div className="main-section">
					<div className="project-specific-card md:row-span-2 ">
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
							<div className="w-full h-60 bg-primary md:hidden"></div>
						</div>
					</div>
					<div className="project-specific-card">
						<div className="card-body-single-column">
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
						</div>
					</div>
					<div className="hidden md:block project-specific-card shadow-xs col-span-2">
						<div className="card-body-single-column">
							<div className="w-full h-60 bg-primary"></div>
						</div>
					</div>
				</div>
			</section>
			{SectionBanner(5, "Goals & Aims")}
			<section className="section-container">
				<div className="main-section place-items-center">
					{activeProject?.goals_and_aims?.map((target, index) => (
						<div className="target-card" key={index}>
							<div className="flex flex-col gap-2">
								<div className="flex justify-start items-center">
									<h1 className="text-white mr-5">
										{target.title}
									</h1>
									<img
										className="w-6 h-6"
										src="../src/assets/target.svg"
										alt="Description icon"
									/>
								</div>
								<hr className="w-full text-white" />
							</div>
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
									<h4 className="text-white text-left">
										Target deadline
									</h4>
									<ul className="flex flex-col gap-1 text-left text-white marker:text-white">
										<li>
											Duration: {target.deadline?.duratin}
										</li>
										<li>From: {target.deadline?.from}</li>
										<li>To: {target.deadline?.to}</li>
									</ul>
								</div>
								<div className="target-card-footer-col">
									<h4 className="text-white text-left">
										Status
									</h4>
									<p className="text-left text-white">
										{target.status}
									</p>
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
