import React from "react";
import { useState } from "react";

function Header() {
	const [shadowStyle, setShadowStyle] = useState("shadow-nav");

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
				<button className="btn btn-header">Home</button>
				<button className="btn btn-header">Portfolio</button>
				<button className="btn btn-header">Active</button>
				<button className="btn btn-header">Blogs</button>
			</div>
		</nav>
	);
}

export default Header;
