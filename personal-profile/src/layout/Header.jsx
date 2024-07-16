import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
	const [shadowStyle, setShadowStyle] = useState("shadow-nav");
	const location = useLocation();

	const isActiveLink = (currentPath, linkPath) => {
		return currentPath.includes(linkPath);
	};

	const changeShadow = () => {
		if (window.scrollY >= 70) {
			setShadowStyle("shadow-scroll");
		} else {
			setShadowStyle("shadow-nav");
		}
	};

	return (
		<nav className={`relative z-10 w-full p-2 bg-primary ${shadowStyle}`}>
			<div className="flex justify-between items-center px-6">
				<Link
					to={"/"}
					className={
						isActiveLink(location.pathname, "/") &&
						location.pathname.length == 1
							? "btn btn-header-active"
							: "btn btn-header"
					}>
					Home
				</Link>
				<Link
					to={"/portfolio"}
					className={
						isActiveLink(location.pathname, "/portfolio")
							? "btn btn-header-active"
							: "btn btn-header"
					}>
					Portfolio
				</Link>
				<Link
					to={"/active"}
					className={
						isActiveLink(location.pathname, "/active")
							? "btn btn-header-active"
							: "btn btn-header"
					}>
					Active
				</Link>
				<Link
					to={"/blogs"}
					className={
						isActiveLink(location.pathname, "/blogs")
							? "btn btn-header-active"
							: "btn btn-header"
					}>
					Blogs
				</Link>
			</div>
		</nav>
	);
}

export default Header;
