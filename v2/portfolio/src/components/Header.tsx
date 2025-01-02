import { useEffect, useState } from "react";
import "../css/components/Header.css";
import { motion } from "motion/react";
import { easeInOut } from "motion";

function Header() {
	const [headerMenuHover, setHeaderMenuHover] = useState(false);

	return (
		<nav className="header">
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
					}}>
					Tuan Hy Le
				</motion.button>
			</div>
			<div className="item">
				<div>Home</div>
				<div>Projects</div>
				<div>About me</div>
			</div>
			<div className="item--button">
				<button
					onClick={() =>
						setHeaderMenuHover((prevHover) => !prevHover)
					}>
					Contact us
				</button>
				<HeaderMenu visible={headerMenuHover} />
			</div>
		</nav>
	);
}

function HeaderMenu(props: { visible: boolean }) {
	const [height, setHeight] = useState(0);

	if (props.visible) {
		return (
			<div className="header-menu" style={{ height: `${height}px` }}>
				<HeaderMenuPage setHeight={setHeight} />
			</div>
		);
	} else {
		return;
	}
}

function HeaderMenuPage({
	setHeight,
}: {
	setHeight: React.Dispatch<React.SetStateAction<number>>;
}) {
	const [pageIndex, setPageIndex] = useState(0);
	const setPage = (operation: number) => {
		// addition operation
		if (operation == 0) {
			if (pageIndex > 0) {
				setPageIndex((prevIndex) => prevIndex - 1);
			}
		} else if (operation == 1) {
			if (pageIndex < 1) {
				setPageIndex((prevIndex) => prevIndex + 1);
			}
		}
	};

	// use effect hook
	useEffect(() => {
		let headerMenu = document.querySelector(
			".header-menu-page"
		) as HTMLElement;
		let headerHeight = headerMenu.offsetHeight;

		console.log(headerHeight);
		setHeight(headerHeight);
	}, [pageIndex]);

	if (pageIndex == 0) {
		return (
			<div className="header-menu-page" key={0}>
				<div>This is page 0</div>
				<div>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Incidunt fugiat vitae.
				</div>
				<div className="footer">
					<button onClick={() => setPage(0)}>Back</button>
					<button onClick={() => setPage(1)}>Continue</button>
				</div>
			</div>
		);
	} else {
		return (
			<div className="header-menu-page" key={1}>
				<div>This is page 1</div>
				<div>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Incidunt fugiat vitae, placeat provident consectetur
					distinctio iure.
				</div>
				<div className="footer">
					<button onClick={() => setPage(0)}>Back</button>
					<button onClick={() => setPage(1)}>Continue</button>
				</div>
			</div>
		);
	}
}

export default Header;
