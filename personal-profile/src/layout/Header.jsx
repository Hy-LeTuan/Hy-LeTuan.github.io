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
		<nav className={`relative z-10 w-full bg-primary ${shadowStyle}`}>
			<div className="m-0 p-0 md:flex md:justify-between md:items-center md:px-6 md:py-2">
				<h6 className="hidden text-white md:block">Le Tuan Hy</h6>

				{/* Button container */}
				<div className="flex justify-between items-center px-6 py-1 md:p-0 md:justify-center md:gap-10">
					<Link
						to={"/"}
						className={
							isActiveLink(location.pathname, "/") &&
							location.pathname.length == 1
								? "btn btn-header-active"
								: "btn btn-header"
						}>
						<h6>Home</h6>
					</Link>
					<Link
						to={"/portfolio"}
						className={
							isActiveLink(location.pathname, "/portfolio")
								? "btn btn-header-active"
								: "btn btn-header"
						}>
						<h6>Profile</h6>
					</Link>
					<Link
						to={"/active"}
						className={
							isActiveLink(location.pathname, "/active")
								? "btn btn-header-active"
								: "btn btn-header"
						}>
						<h6>Active</h6>
					</Link>
					<Link
						to={"/blogs"}
						className={
							isActiveLink(location.pathname, "/blogs")
								? "btn btn-header-active"
								: "btn btn-header"
						}>
						<h6>Blogs</h6>
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Header;
