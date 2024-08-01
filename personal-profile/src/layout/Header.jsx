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
				<Link className="text-white" to={"/"}>
					<h6>Le Tuan Hy</h6>
				</Link>
				<Menu>
					<MenuButton className="flex flex-col gap-1 group">
						<img
							src="/src/assets/burger-menu-top-stripe.svg"
							alt=""
							className="w-5 origin-center group-data-[active]:translate-y-full group-data-[active]:rotate-45 transition-all duration-300"
						/>
						<img
							src="/src/assets/burger-menu-bottom-stripe.svg"
							alt=""
							className="w-5 origin-center group-data-[active]:-translate-y-1 group-data-[active]:-rotate-45 transition-all duration-300"
						/>
					</MenuButton>

					<MenuItems
						transition
						anchor="bottom end"
						className="origin-top-right rounded-xl border border-white/5 bg-white/5 backdrop-blur-md p-1 text-white transition duration-100 ease-out [--anchor-gap:10px] focus:outline-none data-[closed]:scale-90 data-[closed]:opacity-0 z-20">
						<MenuItem>
							<Link
								className={
									isActiveLink(location.pathname, "/") &&
									location.pathname.length == 1
										? "group flex w-full items-center justify-start gap-3 rounded-lg py-1.5 px-4 data-[focus]:bg-white/10 underline underline-offset-4"
										: "group flex w-full items-center justify-start gap-3 rounded-lg py-1.5 px-4 data-[focus]:bg-white/10"
								}
								to={"/"}>
								<img
									src="/src/assets/home.svg"
									alt=""
									className="w-4 h-4"
								/>
								<h6>Home</h6>
							</Link>
						</MenuItem>
						<div className="my-1 h-px bg-white/5"></div>
						<MenuItem>
							<Link
								className={
									isActiveLink(
										location.pathname,
										"/portfolio"
									)
										? "group flex w-full items-center justify-start gap-3 rounded-lg py-1.5 px-4 data-[focus]:bg-white/10 underline underline-offset-4"
										: "group flex w-full items-center justify-start gap-3 rounded-lg py-1.5 px-4 data-[focus]:bg-white/10"
								}
								to={"/portfolio"}>
								<img
									src="/src/assets/profile.svg"
									alt=""
									className="w-4 h-4"
								/>
								<h6>Profile</h6>
							</Link>
						</MenuItem>
						<div className="my-1 h-px bg-white/5"></div>
						<MenuItem>
							<Link
								className={
									isActiveLink(location.pathname, "/active")
										? "group flex w-full items-center justify-start gap-3 rounded-lg py-1.5 px-4 data-[focus]:bg-white/10 underline underline-offset-4"
										: "group flex w-full items-center justify-start gap-3 rounded-lg py-1.5 px-4 data-[focus]:bg-white/10"
								}
								to={"/active"}>
								<img
									src="/src/assets/active.svg"
									alt=""
									className="w-4 h-4"
								/>
								<h6>Active</h6>
							</Link>
						</MenuItem>
						<div className="my-1 h-px bg-white/5"></div>
						<MenuItem>
							<Link
								className={
									isActiveLink(location.pathname, "/blogs")
										? "group flex w-full items-center justify-start gap-3 rounded-lg py-1.5 px-4 data-[focus]:bg-white/10 underline underline-offset-4"
										: "group flex w-full items-center justify-start gap-3 rounded-lg py-1.5 px-4 data-[focus]:bg-white/10"
								}
								to={"/blogs"}>
								<img
									src="/src/assets/blog.svg"
									alt=""
									className="w-4 h-4"
								/>
								<h6>Blogs</h6>
							</Link>
						</MenuItem>
					</MenuItems>
				</Menu>
			</div>
		</nav>
	);
}

export default Header;
