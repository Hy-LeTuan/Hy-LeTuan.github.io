import "../css/components/Header.css";
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router";

function Header() {
	const navigate = useNavigate();

	return (
		<nav className="flex-row header">
			<div className="item">
				<motion.button
					whileHover={{
						backgroundColor: "#5c5ca3",
						x: 20,
						transition: {
							default: {
								duration: 0.8,
								type: "spring",
								bounce: 0.65,
							},
							backgroundColor: {
								// duration: 0.4,
								type: "tween",
								ease: "easeInOut",
							},
						},
					}}
					onClick={() => navigate("/")}>
					Tuan Hy Le
				</motion.button>
			</div>
			<div className="item item--main">
				<div className="transition duration-100">
					<Link to={"/"}>Home</Link>
				</div>
				<div className="transition duration-100">
					<Link to={"/projects"}>Projects</Link>
				</div>
				<div className="transition duration-100">
					<Link to={"/about-me"}>About me</Link>
				</div>
			</div>
			<div className="item--button">
				<button onClick={() => navigate("/contact")}>Contact me</button>
			</div>
		</nav>
	);
}

export default Header;
