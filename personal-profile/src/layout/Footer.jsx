import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer className="overflow-hidden clear-both w-full bg-primary text-white">
			<div className="flex justify-between items-top py-1 px-6">
				<div className="flex flex-col gap-1">
					<h4 className="text-base font-heading-font text-white">
						Contact me
					</h4>
					<ul className="text-xs font-heading-font text-white list-disc list-inside">
						<li>
							<a href="https://github.com/Hy-LeTua">Github</a>
						</li>
						<li>
							<a href="mailto:letuanhy1507@gmail.co">Email</a>
						</li>
						<li>
							<a href="https://www.facebook.com/hy.le.148553">
								Facebook
							</a>
						</li>
						<li>
							<a href="https://www.youtube.com/@B--LeTuanHy">
								Youtube
							</a>
						</li>
					</ul>
				</div>
				<div className="flex flex-col gap-1">
					<h4 className="text-base font-heading-font text-white">
						Sitemap
					</h4>
					<ul className="text-xs font-heading-font text-white list-disc list-inside">
						<li>
							<Link to={"/"}>Home</Link>
						</li>
						<li>
							<Link to={"/portfolio"}>Portfolio</Link>
						</li>
						<li>
							<Link to={"/active"}>Active</Link>
						</li>
						<li>
							<Link to={"/blogs"}>Blogs</Link>
						</li>
					</ul>
				</div>
				<div className="flex flex-col gap-1">
					<h4 className="text-base font-heading-font text-white">
						Source Code
					</h4>
					<ul className="text-xs font-heading-font text-white list-disc list-inside">
						<li>
							<a href="https://github.com/Hy-LeTuan/Hy-LeTuan.github.io">
								Code
							</a>
						</li>
						<li>
							<a href="https://www.figma.com/design/lW4cexjjTae8wdPYTYhhPI/Personal-website?node-id=0-1&t=aIuyMq7IBc9j8uln-1">
								Design
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
