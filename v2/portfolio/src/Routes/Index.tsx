import { useEffect, useRef, useState } from "react";
import "../css/routes/Index.css";
import LocationPin from "../Icons/Location";
import { useAnimate, useInView, stagger, animate, motion } from "motion/react";
import useArray from "../hooks/useArray";

function Index() {
	return (
		<main>
			<section className="index-main">
				<Hero />
			</section>
			<section className="section">
				<Experience />
			</section>
			<section className="section">
				<TechStacks />
			</section>
		</main>
	);
}

function Hero() {
	const [socialScope, socialAnimate] = useAnimate();
	const [heroScope, animateHeroScope] = useAnimate();
	const [hrScope, animateHrScope] = useAnimate();
	const [subtitleScope, animateSubtitleScope] = useAnimate();

	const IntroAnimation = async () => {
		await animate(".hero-content", { x: "-50%" });

		await animateHeroScope(
			heroScope.current,
			{ y: 50 },
			{ type: "tween", duration: 0.01 }
		);
		await animateHrScope(
			hrScope.current,
			{ y: -50 },
			{
				type: "tween",
				duration: 0.01,
			}
		);
		await animate(".hero-content", { opacity: 1 });
		await (() => {
			animateHeroScope(
				heroScope.current,
				{ y: 0 },
				{ ease: "easeInOut", type: "tween", duration: 0.3 }
			);
			animateHrScope(
				hrScope.current,
				{ y: 0 },
				{
					ease: "easeInOut",
					type: "tween",
					duration: 0.3,
				}
			);
		})();

		await animateSubtitleScope(
			subtitleScope.current,
			{ opacity: 1 },
			{ delay: 0.6 }
		);
		await animate(
			".hero-content",
			{ x: 0 },
			{ type: "tween", duration: 0.4, delay: 0.2 }
		);
		await animate(
			".hero-image",
			{ opacity: 1 },
			{ delay: 0.2, duration: 0.5 }
		);
		await socialAnimate(
			".socials li",
			{ opacity: 1, y: [50, 0] },
			{
				delay: stagger(0.05, { startDelay: 0 }),
				type: "spring",
				bounce: 0.65,
				duration: 0.9,
			}
		);
	};

	useEffect(() => {
		IntroAnimation();
	}, []);

	return (
		<div className="flex-row hero">
			<img
				src="/src/assets/images/profile-image.png"
				alt=""
				className="hero-image"
			/>
			<div className="flex-col hero-content">
				<h1 className="title" ref={heroScope}>
					Hello, my name is <span>Le Tuan Hy</span>
				</h1>
				<div className="flex-row sub-title" ref={subtitleScope}>
					<div>Software & Machine Learning Engineer</div>
					<div className="flex-row location">
						<LocationPin
							fill={"#72BAA9"}
							className={"icon location-icon"}
						/>
						<div>U.S.A</div>
					</div>
				</div>
				<hr className="hr hr-primary" ref={hrScope} />
				<ul className="flex-row socials" ref={socialScope}>
					<li>
						<img
							src="/src/assets/icons/linkedin.svg"
							alt=""
							className="transition icon icon-large"
						/>
					</li>
					<li>
						<img
							src="/src/assets/icons/github.svg"
							alt=""
							className="transition icon icon-large"
						/>
					</li>
					<li>
						<img
							src="/src/assets/icons/youtube.svg"
							alt=""
							className="transition icon icon-large"
						/>
					</li>
				</ul>
			</div>
		</div>
	);
}

function Experience() {
	const [activeSection, setActiveSection] = useArray([true, false]);
	const [containerHeight, setContainerHeight] = useState(0);

	const contentContainerRef = useRef(null);
	const contentContainerInView = useInView(contentContainerRef);

	console.log(contentContainerInView);

	const onControllerClick = (onIndex: number, offIndex: number) => {
		setActiveSection(onIndex, true);
		setActiveSection(offIndex, false);
	};

	return (
		<div className="relative experience">
			<div className="section-button-left section-button--orange">
				Education & Work
			</div>
			<hr className="hr hr-primary" />
			<div className="experience-main">
				<div
					className={`flex-row controller ${
						contentContainerInView ? "sticky" : ""
					}`}>
					<button
						className={`transition ${
							activeSection[0] ? "active" : "inactive"
						}`}
						onClick={() => onControllerClick(0, 1)}>
						Education
					</button>
					<button
						className={`transition ${
							activeSection[1] ? "active" : "inactive"
						}`}
						onClick={() => onControllerClick(1, 0)}>
						Work
					</button>
				</div>
				<motion.div
					className="transition content-container"
					style={{ height: containerHeight }}
					ref={contentContainerRef}>
					<ExperienceContent
						activeSection={activeSection}
						setHeight={setContainerHeight}
					/>
				</motion.div>
			</div>
		</div>
	);
}

function ExperienceContent(props: {
	activeSection: Array<boolean>;
	setHeight: (height: number) => void;
}) {
	useEffect(() => {
		let headerMenu = document.querySelector(".content") as HTMLElement;
		let headerHeight = headerMenu.offsetHeight;
		props.setHeight(headerHeight);
	}, [props.activeSection[0], props.activeSection[1]]);

	if (props.activeSection[0]) {
		return (
			<motion.div
				className="flex-col content"
				key={0}
				animate={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: -40 }}>
				<div className="flex-col block">
					<header className="flex-col">
						<div className="flex-row header-row main">
							<div>Le Hong Phong High School for the Gifted </div>
							<div className="flex-row">
								<LocationPin
									fill={"#F4A261"}
									className={"icon location-icon"}
								/>
								<div>Vietnam</div>
							</div>
						</div>
						<div className="flex-row header-row">
							<div>Sept, 2021 – May, 2024</div>
							<div>Highschool diploma </div>
						</div>
					</header>
					<div className="flex-row main">
						<div className="flex-col list">
							<div className="flex-row title">Subjects</div>
							<ul>
								<li>
									Computer Science - <b>3.9</b>
								</li>
								<hr className="hr hr-white" />
								<li>
									Advanced Mathematics - <b>3.8</b>
								</li>
								<hr className="hr hr-white" />
								<li>
									Advanced Chemistry- <b>3.9</b>
								</li>
							</ul>
						</div>
						<div className="flex-col list">
							<div className="flex-row title">Varsity teams</div>
							<ul>
								<li>Information Technology varsity team</li>
								<hr className="hr hr-white" />
								<li>Science Research varsity team</li>
								<hr className="hr hr-white" />
								<li>
									Advanced Chemistry- <b>3.9</b>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className="hr hr-primary" />
				<div className="flex-col block">
					<header className="flex-col">
						<div className="flex-row header-row main">
							<div>Metropolitan Community College</div>
							<div className="flex-row">
								<LocationPin
									fill={"#F4A261"}
									className={"icon location-icon"}
								/>
								<div>Nebraska</div>
							</div>
						</div>
						<div className="flex-row header-row">
							<div>Sept, 2021 – May, 2024</div>
							<div>Associates Degree </div>
						</div>
					</header>
					<div>
						<b>Computer Science Transfer</b>
					</div>
					<div className="flex-row main">
						<div className="flex-col list">
							<div className="flex-row title">Subjects</div>
							<ul>
								<li>Computer Science</li>
								<hr className="hr hr-white" />
								<li>Mathematical Foundations of CS</li>
							</ul>
						</div>
					</div>
				</div>
			</motion.div>
		);
	} else if (props.activeSection[1]) {
		return (
			<motion.div
				className="flex-col content"
				key={1}
				animate={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: -40 }}>
				<div className="flex-col block">
					<header className="flex-col">
						<div className="flex-row header-row main">
							<div>B2B Vietnam</div>
							<div className="flex-row">
								<LocationPin
									fill={"#F4A261"}
									className={"icon location-icon"}
								/>
								<div>Vietnam</div>
							</div>
						</div>
						<div className="flex-row header-row">
							<div>Sept, 2021 – May, 2024</div>
						</div>{" "}
						<hr className="hr hr-primary" />
					</header>
					<div>
						<b>Front-end engineer Intern</b>
					</div>
					<div className="flex-row main">
						<div className="flex-col list">
							<div className="flex-row title">Responsibility</div>
							<ul>
								<li>
									Developed front end UI components with
									NEXTJS, React and CSS
								</li>
								<hr className="hr hr-white" />
								<li>Interact with a Laravel backend API</li>
							</ul>
						</div>
						<div className="flex-col list">
							<div className="flex-row title">Tech Stack</div>
							<ul>
								<li>NEXT.JS</li>
								<hr className="hr hr-white" />
								<li>CSS</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className="hr hr-primary" />
				<div className="flex-col block">
					<header className="flex-col">
						<div className="flex-row header-row main">
							<div>CoTAI - Center of Talent in A.I</div>
							<div className="flex-row">
								<LocationPin
									fill={"#F4A261"}
									className={"icon location-icon"}
								/>
								<div>Vietnam</div>
							</div>
						</div>
						<div className="flex-row header-row">
							<div>Nov, 2024 - Oct, 2024</div>
						</div>{" "}
						<hr className="hr hr-primary" />
					</header>
					<div>
						<b>AI engineer and research Intern</b>
					</div>
					<div className="flex-row main">
						<div className="flex-col list">
							<div className="flex-row title">Responsibility</div>
							<ul>
								<li>
									Researched a BERT-like architecture using
									SOTA methods
								</li>
								<hr className="hr hr-white" />
								<li>
									Engineered a 32K vocab size tokenizer to
									generate text embeddings
								</li>
								<li>Engineered a 150GB dataset</li>
							</ul>
						</div>
						<div className="flex-col list">
							<div className="flex-row title">Tech Stack</div>
							<ul>
								<li>PyTorch</li>
								<hr className="hr hr-white" />
								<li>Apache Spark</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className="hr hr-primary" />
				<div className="flex-col block">
					<header className="flex-col">
						<div className="flex-row header-row main">
							<div>Fiverr Freelance</div>
							<div className="flex-row">
								<LocationPin
									fill={"#F4A261"}
									className={"icon location-icon"}
								/>
								<div>Remote</div>
							</div>
						</div>
						<div className="flex-row header-row">
							<div>Aug 2024 - Now</div>
						</div>
						<hr className="hr hr-primary" />
					</header>
					<div>
						<b>Software & ML developer</b>
					</div>
					<div className="flex-row main">
						<div className="flex-col list">
							<div className="flex-row title">Responsibility</div>
							<ul>
								<li>
									Create beautiful customized websites for
									users
								</li>
								<hr className="hr hr-white" />
								<li>
									Create custom storefronts to interact with
									Shopify API
								</li>
								<li>
									Implement machine learning research papers
									and projects
								</li>
							</ul>
						</div>
						<div className="flex-col list">
							<div className="flex-row title">Tech Stack</div>
							<ul>
								<li>React & Shopify</li>
								<hr className="hr hr-white" />
								<li>Pytorch</li>
								<hr className="hr hr-white" />
								<li>Tensorflow</li>
							</ul>
						</div>
					</div>
				</div>
			</motion.div>
		);
	}
}

function TechStacks() {
	return (
		<div className="relative stacks">
			<div className="section-button-right section-button--teal">
				My Tech Stack
			</div>
			<hr className="hr hr-primary" />
			<div className="stacks-main">
				<div className="card card-center">
					<img
						src="/src/assets/icons/pytorch.svg"
						alt="PyTorch icon"
						className="icon"
					/>
					<header>PyTorch</header>
				</div>
				<div className="card card-center">
					<img
						src="/src/assets/icons/tensorflow.svg"
						alt="TensorFlow icon"
						className="icon"
					/>
					<header>TensorFlow</header>
				</div>
				<div className="card card-center">
					<img
						src="/src/assets/icons/numpy.svg"
						alt="Numpy icon"
						className="icon"
					/>
					<header>NumPy</header>
				</div>
				<div className="card card-center">
					<img
						src="/src/assets/icons/django.svg"
						alt="Django icon"
						className="icon"
					/>
					<header>Django</header>
				</div>
				<div className="card card-center">
					<img
						src="/src/assets/icons/apache-spark.svg"
						alt="Apache Spark icon"
						className="icon"
					/>
					<header>Apache Spark</header>
				</div>
				<div className="card card-center">
					<img
						src="/src/assets/icons/python.svg"
						alt="Python icon"
						className="icon"
					/>
					<header>Python</header>
				</div>
				<div className="card card-center">
					<img
						src="/src/assets/icons/react.svg"
						alt="React icon"
						className="icon"
					/>
					<header>React</header>
				</div>
				<div className="card card-center">
					<img
						src="/src/assets/icons/shopify.svg"
						alt="Shopify icon"
						className="icon"
					/>
					<header>Shopify</header>
				</div>
				<div className="card card-center">
					<img
						src="/src/assets/icons/tailwind.svg"
						alt="Tailwind CSS icon"
						className="icon"
					/>
					<header>Tailwind</header>
				</div>
				<div className="card card-center">
					<img
						src="/src/assets/icons/c-sharp.svg"
						alt="C Sharp icon"
						className="icon"
					/>
					<header>C#</header>
				</div>
				<div className="card card-center">
					<img
						src="/src/assets/icons/unity.svg"
						alt="Unity icon"
						className="icon"
					/>
					<header>Unity</header>
				</div>
			</div>
		</div>
	);
}

export default Index;
