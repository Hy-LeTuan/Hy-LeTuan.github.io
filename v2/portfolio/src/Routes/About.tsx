import "../css/routes/Index.css";
import "../css/routes/About.css";
import { motion } from "motion/react";
import { AnimateFadeIn } from "../utils/Animation";

function About() {
	return (
		<main>
			<div className="flex-row justify-center items-center about gap-10">
				<div className="flex-col about-content justify-start items-start gap-3">
					<div className="relative w-full">
						<h1 className="about-content__header fs-6">
							Crafting{" "}
							<span className="color-orange">
								<b>functional</b>
							</span>
							,{" "}
							<span className="color-teal">
								<b>elegant</b>
							</span>
							, and{" "}
							<span className="color-blue">
								<b>reliable</b>
							</span>{" "}
							solutions through code.
						</h1>
						<motion.div
							className="mask"
							initial={{
								backgroundColor: "1A1A2E",
							}}
							animate={{
								x: "-100%",
								transition: {
									duration: 2,
									ease: "backInOut",
								},
							}}></motion.div>
					</div>
					<div className="relative about-content__content">
						<p>
							As a Software & Machine Learning engineer, I can
							bring you the efficiency of great software designs
							inside complex AI systems
						</p>
						<motion.div
							className="mask"
							initial={{
								backgroundColor: "1A1A2E",
							}}
							animate={{
								x: "-100%",
								transition: {
									delay: 1,
									duration: 1.05,
									ease: "backInOut",
								},
							}}></motion.div>
					</div>
				</div>
			</div>
			<section>
				<div className="about-main">
					<hr className="hr-block hr-primary" />
					<div className="about-main__content flex-col gap-10">
						<div className="flex-row items-center justify-between">
							<AnimateFadeIn
								delay={1.5}
								direction={"x"}
								amount={300}
								animateOnView={true}
								onViewAmount={0.5}
								duration={0.6}>
								<h1 className="font-header">
									I can provide you quality services regarding
								</h1>
							</AnimateFadeIn>
							<AnimateFadeIn
								delay={2}
								direction={"x"}
								amount={200}
								animateOnView={true}
								onViewAmount={0.5}
								duration={0.6}>
								<motion.button
									initial={{
										backgroundColor: "#1a1a2e",
										x: 0,
									}}
									whileHover={{
										backgroundColor: "#5a5ca3",
										x: 30,
										transition: {
											type: "spring",
											duration: 0.8,
											bounce: 0.65,
										},
									}}
									className="about-main__content__button">
									<h5>See my past works</h5>
								</motion.button>
							</AnimateFadeIn>
						</div>
						<div className="flex-row gap-10 w-full items-start justify-between">
							<AnimateFadeIn
								amount={100}
								direction={"y"}
								delay={2.5}
								animateOnView={true}
								duration={0.6}>
								<div className="flex-col justify-start items-start gap-2">
									<h3 className="font-header color-teal">
										SOFTWARE
									</h3>
									<div>
										I deliver efficient, scalable software
										and websites tailored to your business
										needs. My expertise spans web frameworks
										like Next.js and React.js, as well as
										native application UIs in C++.
									</div>
								</div>
							</AnimateFadeIn>
							<AnimateFadeIn
								amount={100}
								direction={"y"}
								delay={2.65}
								animateOnView={true}
								duration={0.6}>
								<hr className="vertical-bar vertical-bar--secondary" />
							</AnimateFadeIn>
							<AnimateFadeIn
								amount={100}
								direction={"y"}
								delay={2.8}
								animateOnView={true}
								duration={0.6}>
								<div className="flex-col justify-start items-start gap-2">
									<h3 className="font-header color-teal">
										ML & DL
									</h3>
									<div>
										I develop advanced AI solutions to
										tackle your challenges. My specialties
										lie in Computer Vision and Natural
										Language Processing, ensuring
										cutting-edge performance.
									</div>
								</div>
							</AnimateFadeIn>
							<AnimateFadeIn
								amount={100}
								direction={"y"}
								delay={2.95}
								animateOnView={true}
								duration={0.6}>
								<hr className="vertical-bar vertical-bar--secondary" />
							</AnimateFadeIn>
							<AnimateFadeIn
								amount={100}
								direction={"y"}
								delay={3.1}
								animateOnView={true}
								duration={0.6}>
								<div className="flex-col justify-start items-start gap-2">
									<h3 className="font-header color-teal">
										DESIGN
									</h3>
									<div>
										Beyond technical expertise, I strive to
										create contemporary designs that align
										with your brand identity and resonate
										with your target audience.
									</div>
								</div>
							</AnimateFadeIn>
						</div>
						<AnimateFadeIn
							amount={200}
							direction="x"
							delay={3.25}
							animateOnView={true}
							onViewAmount={0.5}
							duration={0.6}
							width={"full"}>
							<div className="flex-row justify-center items-center gap-2 w-full">
								<button className="relative button button--no-wrap button--medium button--border-accent-orange contact-me-button">
									<h5>Send me a message on Fiverr</h5>
									<motion.div className="mask"></motion.div>
								</button>
								<hr className="hr-block hr-primary" />
							</div>
						</AnimateFadeIn>
					</div>
				</div>
			</section>
		</main>
	);
}

export default About;
