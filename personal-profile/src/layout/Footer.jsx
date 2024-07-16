import React from "react";

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
							<a href="">Github</a>
						</li>
						<li>
							<a href="">Email</a>
						</li>
						<li>
							<a href="">Facebook</a>
						</li>
						<li>
							<a href="">Instagram</a>
						</li>
					</ul>
				</div>
				<div className="flex flex-col gap-1">
					<h4 className="text-base font-heading-font text-white">
						Sitemap
					</h4>
					<ul className="text-xs font-heading-font text-white list-disc list-inside">
						<li>
							<a href="">Home</a>
						</li>
						<li>
							<a href="">Portfolio</a>
						</li>
						<li>
							<a href="">Roadmap</a>
						</li>
						<li>
							<a href="">Blogs</a>
						</li>
					</ul>
				</div>
				<div className="flex flex-col gap-1">
					<h4 className="text-base font-heading-font text-white">
						Source Code
					</h4>
					<ul className="text-xs font-heading-font text-white list-disc list-inside">
						<li>
							<a href="">Code</a>
						</li>
						<li>
							<a href="">Sketch</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
