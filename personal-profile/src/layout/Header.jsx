import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
	Button,
} from "@headlessui/react";

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
			<div className="flex justify-between items-center px-6 py-2 lg:px-8 lg:py-2 xl:py-3 xl:px-12">
				<Link className="text-white" to={"/"}>
					<h6>Le Tuan Hy</h6>
				</Link>
				<div className="md:hidden">
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
										isActiveLink(
											location.pathname,
											"/active"
										)
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
										isActiveLink(
											location.pathname,
											"/blogs"
										)
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
				<div className="hidden md:flex flex-row items-baseline justify-center gap-8 lg:gap-10">
					<Button className="flex flex-col justify-center items-center gap-1 text-neutral-300 data-[hover]:bg-white/5 data-[focus]:bg-white/5 data-[active]:bg-white/5 px-4 py-1 rounded-lg transition-all ease-out duration-300 data-[hover]:text-white data-[focus]:text-white data-[active]:text-white relative">
						{isActiveLink(location.pathname, "/") &&
						location.pathname.length == 1 ? (
							<>
								<Link to={"/"} className="text-white">
									<h6>Home</h6>
								</Link>
								<div className="bg-gradient-to-t from-accent to-white/5 rounded-lg py-[2px] w-full"></div>
							</>
						) : (
							<Link to={"/"}>
								<h6>Home</h6>
							</Link>
						)}
					</Button>
					<Button className="flex flex-col justify-center items-center gap-1 text-neutral-300 data-[hover]:bg-white/5 data-[focus]:bg-white/5 data-[active]:bg-white/5 px-4 py-1 rounded-lg transition-all ease-out duration-300 data-[hover]:text-white data-[focus]:text-white data-[active]:text-white relative">
						{isActiveLink(location.pathname, "portfolio") ? (
							<>
								<Link to={"/portfolio"} className="text-white">
									<h6>Profile</h6>
								</Link>
								<div className="bg-gradient-to-t from-accent to-white/5 rounded-lg py-[2px] w-full"></div>
							</>
						) : (
							<Link to={"/portfolio"}>
								<h6>Profile</h6>
							</Link>
						)}
					</Button>
					<Button className="flex flex-col justify-center items-center gap-1 text-neutral-300 data-[hover]:bg-white/5 data-[focus]:bg-white/5 data-[active]:bg-white/5 px-4 py-1 rounded-lg transition-all ease-out duration-300 data-[hover]:text-white data-[focus]:text-white data-[active]:text-white relative">
						{isActiveLink(location.pathname, "/active") ? (
							<>
								<Link to={"/active"} className="text-white">
									<h6>Active</h6>
								</Link>
								<div className="bg-gradient-to-t from-accent to-white/5 rounded-lg py-[2px] w-full"></div>
							</>
						) : (
							<Link to={"/active"}>
								<h6>Active</h6>
							</Link>
						)}
					</Button>
					<Button className="flex flex-col justify-center items-center gap-1 text-neutral-300 data-[hover]:bg-white/5 data-[focus]:bg-white/5 data-[active]:bg-white/5 px-4 py-1 rounded-lg transition-all ease-out duration-300 data-[hover]:text-white data-[focus]:text-white data-[active]:text-white relative">
						{isActiveLink(location.pathname, "/blogs") ? (
							<>
								<Link to={"/blogs"} className="text-white">
									<h6>Blogs</h6>
								</Link>
								<div className="bg-gradient-to-t from-accent to-white/5 rounded-lg py-[2px] w-full"></div>
							</>
						) : (
							<Link to={"/blogs"}>
								<h6>Blogs</h6>
							</Link>
						)}
					</Button>
				</div>
			</div>
		</nav>
	);
}

export default Header;
