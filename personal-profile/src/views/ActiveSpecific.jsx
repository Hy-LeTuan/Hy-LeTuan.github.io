import React, { useEffect, useState } from "react";
import MediaHeader from "../layout/MediaHeader";
import SquareAnimation from "../layout/SquareAnimation";
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
				<div className="flex flex-col w-full gap-3">
					<h5 className="text-neutral-400">Specific Details</h5>
					<h1>Up-to-date project details</h1>
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
							Project title: {activeProject?.title}
						</h2>
					</div>
				</div>
			</section>
			<section className="section-container bg-neutral-100">
				<div className="flex flex-col w-full gap-3 text-left">
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
									{activeProject?.description}
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
									{activeProject?.technologies?.map(
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
						<div className="card-body-single-column gap-3">
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
									{activeProject?.statistics?.date}
								</p>
							</div>
						</div>
						<div className="bg-project-detail-card-pattern-black bg-no-repeat bg-cover overflow-hidden px-4 py-4 rounded-lg flex-grow min-h-24 basis-0 xl:py-5 xl:px-8">
							<div className="h-full flex flex-col items-start justify-between xl:gap-6">
								<h6 className="text-neutral-700">
									Status today
								</h6>
								<p className="text-base text-white lg:text-xl xl:text-3xl">
									{activeProject?.statistics?.status}
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
									{activeProject?.statistics?.collaborators}{" "}
									person
								</p>
							</div>
						</div>
						<div className="bg-project-detail-card-pattern-white bg-no-repeat bg-cover px-4 py-4 border-[0.5px] border-black rounded-lg flex-grow min-h-24 basis-0 xl:py-5 xl:px-8">
							<div className="h-full flex flex-col items-start justify-between xl:gap-6">
								<h6 className="text-neutral-300">Duration</h6>
								<p className="text-base lg:text-xl xl:text-3xl">
									{activeProject?.statistics?.duration}h
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-8 border-t-[0.5px] border-black md:mt-14 lg:mt-16 xl:mt-24"></div>
			</section>
			<section className="section-container bg-primary">
				<div className="flex flex-col w-full gap-3 text-center">
					<h5 className="text-neutral-400">Goals & Aims</h5>
					<h1 className="text-white">Targets awaiting completion</h1>
				</div>
				<div className="mt-12 main-section gap-8 md:grid md:grid-cols-2 md:gap-x-5 md:place-items-stretch md:gap-y-16 lg:gap-x-10 lg:gap-y-20 lg:mt-20 xl:w-3/4 xl:mx-auto xl:gap-x-12 xl:gap-y-24">
					{activeProject?.goals_and_aims?.map((target, index) => (
						<div
							className="card border-[0.5px] border-white xl:py-14 xl:px-12"
							key={index}>
							<div className="card-body-single-column gap-6 lg:gap-8 xl:gap-12">
								<div className="flex flex-col gap-6 lg:gap-8">
									<div className="flex justify-center items-center">
										<h1 className="text-white mr-5">
											{target.title}
										</h1>
										<img
											className="w-6 h-6"
											src="../src/assets/target.svg"
											alt="Description icon"
										/>
									</div>
									<div className="border-white border-t-[0.5px]"></div>
								</div>
								<div className="project-specific-single-part gap-3 xl:gap-5">
									<h4 className="text-white text-left">
										Target description
									</h4>
									<p className="text-left text-white">
										{target.description}
									</p>
								</div>
								<div className="target-card-footer text-xs text-neutral-400">
									<div className="target-card-footer-col">
										<p className="text-xs lg:text-sm xl:text-xl">
											Duration:{" "}
											{target.deadline?.duration}
										</p>
										<p className="text-xs lg:text-sm xl:text-xl">
											Start: {target.deadline?.from}
										</p>
									</div>
									<div className="border-r-[0.5px] px-px border-white h-8"></div>
									<div className="target-card-footer-col">
										<p className="text-xs lg:text-sm xl:text-xl">
											Progress: {target.status}%
										</p>
										<p className="text-xs lg:text-sm xl:text-xl">
											End: {target.deadline?.to}
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
