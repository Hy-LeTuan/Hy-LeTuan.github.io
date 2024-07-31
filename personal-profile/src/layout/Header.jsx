import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

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
			<div className="flex justify-between items-center px-6 py-2">
				<h6 className="text-white">Le Tuan Hy</h6>

				{/* Button container */}
				{/* <div className="flex justify-between items-center px-6 py-1 md:p-0 md:justify-center md:gap-10">
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
				</div> */}
				<Menu>
					<MenuButton className="flex flex-col gap-1 group">
						<img
							src="/src/assets/burger-menu-top-stripe.svg"
							alt=""
							className="w-5 origin-center group-data-[active]:translate-y-full group-data-[active]:rotate-45 transition-all"
						/>
						<img
							src="/src/assets/burger-menu-bottom-stripe.svg"
							alt=""
							className="w-5 origin-center group-data-[active]:-translate-y-1 group-data-[active]:-rotate-45 transition-all"
						/>
					</MenuButton>

					<MenuItems
						transition
						anchor="bottom end"
						className="w-20 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-white transition duration-100 ease-out [--anchor-gap:10px] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 z-20">
						<MenuItem>
							<button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
								Edit
							</button>
						</MenuItem>
					</MenuItems>
				</Menu>
			</div>
		</nav>
	);
}

export default Header;
