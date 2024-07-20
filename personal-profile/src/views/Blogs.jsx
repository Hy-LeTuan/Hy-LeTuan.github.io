import React, { useState, useEffect } from "react";
import MediaHeader from "../layout/MediaHeader";
import SquareAnimation from "../layout/SquareAnimation";
import SectionBanner from "../layout/SectionBanner";
import blogList from "../data/blogs/blogList.json";
import categoryList from "../data/blogs/categories.json";

function Blogs() {
	const [blogs, setBlogs] = useState(blogList.blogs);
	const [categories, setCategories] = useState(categoryList.categories);

	const checkReadButton = (target) => {
		if (target) {
			if (target?.scrollHeight > target.clientHeight) {
				return true;
			} else {
				return false;
			}
		}
	};

	const showMoreContentOnClick = async (event) => {
		const target = await event.target
			.closest("button")
			.parentNode.previousElementSibling.querySelector("p");

		const img = await event.target.closest("button").querySelector("img");

		target.classList.toggle("line-clamp-5");
		img.classList.toggle("-rotate-90");
	};

	return (
		<>
			<section className="relative overflow-hidden clear-both w-full bg-primary text-white font-heading-font">
				<div className="p-12 flex flex-col gap-6 justify-center items-center overflow-hidden lg:p-24">
					<h1 className="text-3xl lg:text-5xl">Technology Blogs</h1>
					{MediaHeader(".")}
					{SquareAnimation(null)}
				</div>
			</section>
			<section className="mt-10 lg:mt-16">
				<div className="flex flex-col gap-6 justify-center items-center lg:gap-8">
					<h2 className="text-2xl font-heading-font text-black lg:text-4xl">
						Available Categories
					</h2>
					<div className="flex flex-wrap gap-6 px-4 justify-between items-start lg:gap-10">
						{categories?.map((cat, index) => (
							<div
								className="flex flex-col items-center justify-center gap-2"
								key={index}>
								<div className="bg-neutral w-9 h-9 rounded-full lg:w-12 lg:h-12"></div>
								<h6 className="text-black font-heading-font text-sm lg:text-base">
									{cat.title}
								</h6>
							</div>
						))}
					</div>
				</div>
				{SectionBanner(5, "Blogs & Articles")}
				<div className="main-section mb-8 lg:mb-14">
					<div className="card-holder">
						{blogs?.map((blog, index) => (
							<div className="blog-card" key={index}>
								<div className="w-full h-96 bg-neutral"></div>
								<div className="blog-card-body">
									<h2 className="text-2xl font-heading-font text-white text-center lg:text-4xl">
										{blog.title}
									</h2>
									<p
										id={`blog-content-${index}`}
										className="text-left font-body-font text-white text-xs line-clamp-5 transition-all duration-1000 lg:line-clamp-8 lg:text-sm">
										{blog.content}
									</p>
								</div>
								<div className="flex w-full justify-between px-6 items-center mb-4">
									<h6 className="text-sm font-heading-font text-white lg:text-base">
										{blog.date}
									</h6>
									{checkReadButton(
										document.querySelector(
											`p[id="blog-content-${index}"]`
										)
									) && (
										<button
											className="btn btn-card-footer gap-2"
											onClick={(event) =>
												showMoreContentOnClick(event)
											}>
											<h6 className="text-sm font-heading-font text-white lg:text-base">
												Read more
											</h6>
											<img
												src="./src/assets/expand.svg"
												alt="expand icon"
												className="text-white w-4 h-4 -rotate-90 transition-all duration-300"
											/>
										</button>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

export default Blogs;
