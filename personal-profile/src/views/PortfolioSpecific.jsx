import MediaHeader from "../layout/MediaHeader";
import SquareAnimation from "../layout/SquareAnimation";
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
			<section className="section-container bg-white">
				<div className="title-subtitle-cluster">
					<h5 className="text-neutral-400">Specific Details</h5>
					<h1>Up-to-date project details </h1>
				</div>
				<div className="card bg-white border-[0.5px] border-black mt-12 lg:mt-20">
					<div className="card-body-single-column gap-6 md:flex-row md:items-center md:justify-between">
						<img
							src="/src/assets/images/project details_illustration.png"
							alt="Project details illustration"
							className="md:flex-grow-0 md:basis-0 md:w-1/2 md:order-3"
						/>
						<div className="hidden md:block md:border-r-[0.5px] md:border-black md:h-52 md:order-2"></div>
						<h2 className="text-left md:basis-0 flex-grow md:w-1/2 md:order-1">
							Project title: {project?.title}
						</h2>
					</div>
				</div>
			</section>
			<section className="section-container bg-neutral-100">
				<div className="title-subtitle-cluster">
					<h5 className="text-neutral-400">Project Description</h5>
					<h1>Delve into the project </h1>
				</div>
				<div className="main-section mt-12 md:grid md:grid-cols-2 md:gap-x-5 md:place-items-stretch lg:mt-20 lg:gap-x-10 lg:gap-y-20 xl:gap-x-12">
					<div className="card bg-white border-[0.5px] border-black md:col-span-1 lg:px-6">
						<div className="card-body-single-column gap-8">
							<div className="project-specific-single-part gap-3">
								<div className="flex items-center gap-3">
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
							<div className="border-t-[0.5px] border-black"></div>
							<div className="project-specific-single-part gap-3">
								<div className="flex items-center gap-3">
									<h4 className="text-black text-left">
										Technologies involved
									</h4>
									<img
										className="project-specific-card-icon"
										src="../src/assets/list_heart.svg"
										alt="Description icon"
									/>
								</div>
								<ul className="flex flex-col gap-3 xl:gap-5 text-left text-black marker:text-accent">
									{project?.technologies?.map(
										(tech, index) => (
											<li
												key={index}
												className="flex gap-3 items-center justify-start">
												<img
													src="/src/assets/page-icons/info.svg"
													alt="Information icon"
													className="h-3 w-3 xl:w-5 xl:h-5"
												/>
												<p>{tech}</p>
											</li>
										)
									)}
								</ul>
							</div>
						</div>
					</div>
					<div className="card bg-white border-[0.5px] border-black md:col-span-1 lg:px-6">
						<div className="card-body-single-column gap-3 xl:gap-5">
							<h4 className="text-black text-left">
								My contributions
							</h4>
							<p className="text-left font-body-font text-black">
								This is the place to put in the project
								description. Describe what it does and who does
								it help / who does it benefit. Also describe why
								you start this project, and maybe how it
								improves your skills. This description can be
								long or short, but it must fulfill its intended
								purpose.
							</p>
                            <hr className="border-black text-black/50"/>
							<p className="text-left font-body-font text-black mt-2">
								This is the place to put in the project
								description. Describe what it does and who does
								it help / who does it benefit. Also describe why
								you start this project, and maybe how it
								improves your skills. This description can be
								long or short, but it must fulfill its intended
								purpose.
							</p>
						</div>
					</div>
				</div>
				<div className="my-8 border-t-[0.5px] border-black md:my-14 lg:my-16 xl:my-24"></div>
				<div className="main-section mt-0 mb-0 gap-4 md:grid md:grid-cols-2 md:place-items-stretch md:gap-x-8">
					<div className="w-full flex gap-8">
						<div className="bg-project-detail-card-pattern-white bg-no-repeat bg-cover px-4 py-4 border-[0.5px] border-black rounded-lg flex-grow min-h-24 basis-0 xl:py-5 xl:px-8">
							<div className="h-full flex flex-col items-start justify-between xl:gap-6">
								<h6 className="text-neutral-300">Start date</h6>
								<p className="text-base lg:text-xl xl:text-3xl">
									{project?.statistics?.date}
								</p>
							</div>
						</div>
						<div className="bg-project-detail-card-pattern-black bg-no-repeat bg-cover overflow-hidden px-4 py-4 rounded-lg flex-grow min-h-24 basis-0 xl:py-5 xl:px-8">
							<div className="h-full flex flex-col items-start justify-between xl:gap-6">
								<h6 className="text-neutral-700">
									Status today
								</h6>
								<p className="text-base text-white lg:text-xl xl:text-3xl">
									{project?.statistics?.status}
								</p>
							</div>
						</div>
					</div>
					<div className="w-full flex gap-8">
						<div className="bg-project-detail-card-pattern-black bg-no-repeat bg-cover overflow-hidden px-4 py-4 rounded-lg flex-grow min-h-24 basis-0 xl:py-5 xl:px-8">
							<div className="h-full flex flex-col items-start justify-between xl:gap-6">
								<h6 className="text-neutral-700">
									Collaborators
								</h6>
								<p className="text-base text-white lg:text-xl xl:text-3xl">
									{project?.statistics?.collaborators} person
								</p>
							</div>
						</div>
						<div className="bg-project-detail-card-pattern-white bg-no-repeat bg-cover px-4 py-4 border-[0.5px] border-black rounded-lg flex-grow min-h-24 basis-0 xl:py-5 xl:px-8">
							<div className="h-full flex flex-col items-start justify-between xl:gap-6">
								<h6 className="text-neutral-300">Duration</h6>
								<p className="text-base lg:text-xl xl:text-3xl">
									{project?.statistics?.duration}h
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="my-8 border-t-[0.5px] border-black md:my-14 lg:my-16 xl:my-24"></div>
				<div className="main-section mt-0 mb-0 md:grid md:grid-cols-2 md:gap-x-5 md:place-items-stretch lg:gap-x-10 lg:gap-y-20">
					<div className="card bg-primary xl:px-10 xl:py-16">
						<div className="card-body-single-column gap-3 lg:gap-6 xl:gap-8">
							<div className="flex items-center gap-4">
								<h4 className="text-white text-left">
									Difficulties
								</h4>
								<img
									className="w-6 h-5 xl:w-8 xl:h-7"
									src="../src/assets/error_icon.svg"
									alt="Description icon"
								/>
							</div>
							{project?.diff_and_solutions?.map((pair, index) => (
								<div
									key={index}
									className="flex flex-col gap-3 lg:gap-6 xl:gap-8">
									<div className="border-t-[0.5px] border-white"></div>
									<div className="flex justify-start items-center gap-3 xl:gap-5">
										<img
											src="/src/assets/arrow_circle_right.svg"
											alt="arrow pointing right icon"
											className="w-4 h-4 xl:h-5 xl:w-5"
										/>
										<div className="text-left font-body-font text-white">
											<p>{pair.difficulty}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="card bg-white border-[0.5px] border-black xl:px-10 xl:py-16">
						<div className="card-body-single-column gap-3 lg:gap-6 xl:gap-8">
							<div className="flex items-center gap-4">
								<h4 className="text-black text-left">
									Solutions
								</h4>
								<img
									className="w-6 h-5 xl:w-8 xl:h-7"
									src="../src/assets/checkmark.svg"
									alt="Description icon"
								/>
							</div>
							{project?.diff_and_solutions?.map((pair, index) => (
								<div
									key={index}
									className="flex flex-col gap-3 lg:gap-6 xl:gap-8">
									<div className="border-t-[0.5px] border-black"></div>
									<div className="flex justify-start items-center gap-3 xl:gap-5">
										<img
											src="/src/assets/arrow_circle_right_black.svg"
											alt="arrow pointing right icon"
											className="w-4 h-4 xl:h-5 xl:w-5"
										/>
										<div className="text-left font-body-font text-black">
											<p>{pair.solution}</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			<section className="section-container bg-white">
				<div className="title-subtitle-cluster">
					<h5 className="text-neutral-400">Project Showcase</h5>
					<h1>See how it works</h1>
				</div>
				<div className="main-section mt-10">
					<div className="card w-full h-60 bg-neutral-500"></div>
				</div>
			</section>
		</>
	);
}

export default PortfolioSpecific;
