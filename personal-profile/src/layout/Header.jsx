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
						className="w-32 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-white transition duration-100 ease-out [--anchor-gap:10px] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 z-20">
						<MenuItem>
							<Link
								className={
									isActiveLink(location.pathname, "/") &&
									location.pathname.length == 1
										? "group flex w-full items-center justify-center gap-3 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 underline underline-offset-4"
										: "group flex w-full items-center justify-center gap-3 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
								}
								to={"/"}>
								<img
									src="/src/assets/home.svg"
									alt=""
									className="w-3 h-3"
								/>
								<h6>Home</h6>
							</Link>
						</MenuItem>
						<div className="my-1 h-px bg-white/5"></div>
						<MenuItem>
							<Link
								className={
									isActiveLink(location.pathname, "/profile")
										? "group flex w-full items-center justify-center gap-3 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10 underline underline-offset-4"
										: "group flex w-full items-center justify-center gap-3 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
								}>
								<img
									src="/src/assets/profile.svg"
									alt=""
									className="w-4 h-4"
								/>
								<h6>Profile</h6>
							</Link>
						</MenuItem>
					</MenuItems>
				</Menu>
			</div>
		</nav>
	);
}

export default Header;
