import React from "react";
import SquareAnimation from "../layout/SquareAnimation";

function Home() {
	return (
		<>
			<section className="relative clear-both w-full bg-primary text-white font-heading-font">
				<div className="p-12 flex flex-col gap-6 justify-center items-center overflow-hidden">
					<div className="relative z-10 rounded-full w-32 h-32 bg-secondary"></div>
					<div
						id="biography"
						className="relative z-10 flex flex-col gap-0">
						<h1 className="text-2xl">Hey, I'm Le Tuan Hy</h1>
						<h4 className="text-xl">
							Studet, Developer, Sportster
						</h4>
					</div>
					<div
						id="social-icon"
						className="relative z-10 flex justify-center items-center gap-4">
						<a href="">
							<img
								src="./src/assets/github.svg"
								alt=""
								className="w-8 h-8"
							/>
						</a>
						<a href="">
							<img
								src="./src/assets/email.svg"
								alt=""
								className="w-8 h-8"
							/>
						</a>
						<a href="">
							<img
								src="./src/assets/facebook.svg"
								alt=""
								className="w-8 h-8"
							/>
						</a>
						<a href="">
							<img
								src="./src/assets/youtube.svg"
								alt=""
								className="w-8 h-8"
							/>
						</a>
					</div>
					<SquareAnimation />
				</div>
			</section>
			<section></section>
		</>
	);
}

export default Home;
