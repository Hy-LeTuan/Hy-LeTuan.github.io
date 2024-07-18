import MediaHeader from "../layout/MediaHeader";
import SquareAnimation from "../layout/SquareAnimation";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PortfolioSpecific() {
	const params = useParams();

	// fs.readFile("./path", "utf-8", (error, jsonString) => {
	// 	if (error) {
	// 		console.log(error);
	// 	} else {
	// 		try {
	// 			const data = JSON.parse(jsonString);
	// 			console.log(data.address);
	// 		} catch (e) {
	// 			console.log(e);
	// 		}
	// 	}
	// });

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
							Project title: Project title
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
									This is the place to put in the project
									description. Describe what it does and who
									does it help / who does it benefit. Be
									descriptive and pray to god that the Caltech
									admissions will read it. This can really
									make or break your profile brother, be
									strong and be determined.
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
									Describe the technologies involved and how
									it helped in achieving our purpose. This way
									we can get a deeper grasp of the technical
									details while also setting up for the
									difficulties and triumphs down the line.
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
									<li>React for frontend framework </li>
									<li>Django for backend </li>
									<li>JWT for authentication </li>
									<li>Live database </li>
									<li>Stripe & Paypal integration</li>
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
									<li>Date started: 10/10/2024</li>
									<li>Number of collaborators: 12</li>
									<li>JWT for authentication </li>
									<li>Project length: 100 hours</li>
									<li>Project status: Finished</li>
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
				</div>
			</section>
		</>
	);
}

export default PortfolioSpecific;
