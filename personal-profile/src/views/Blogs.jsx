import React, { useState, useEffect } from "react";
import MediaHeader from "../layout/MediaHeader";
import SquareAnimation from "../layout/SquareAnimation";
import blogList from "../data/blogs/blogList.json";
import categoryList from "../data/blogs/categories.json";

function Blogs() {
	const [blogs, setBlogs] = useState(blogList.blogs);
	const [categories, setCategories] = useState(categoryList.categories);

	console.log(categories);

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

		target.classList.toggle("line-clamp-4");
		img.classList.toggle("-rotate-90");
	};

	return (
		<>
			<section className="relative overflow-hidden clear-both w-full bg-primary text-white font-heading-font">
				<div className="p-12 flex flex-col gap-6 justify-center items-center overflow-hidden">
					<h1 className="text-3xl">Technology Blogs</h1>
					{MediaHeader(".")}
					{SquareAnimation(null)}
				</div>
			</section>
			<section className="mt-10">
				<div className="flex flex-col gap-6 justify-center items-center">
					<h2 className="text-2xl font-heading-font text-black">
						Categories
					</h2>
					<div className="flex flex-wrap gap-6 px-4 justify-between items-start">
						{categories?.map((cat, index) => (
							<div
								className="flex flex-col items-center justify-center gap-2"
								key={index}>
								<div className="bg-neutral w-9 h-9 rounded-full"></div>
								<h6 className="text-black font-heading-font text-sm">
									{cat.title}
								</h6>
							</div>
						))}
					</div>
				</div>
				<div className="w-full p-2 bg-primary relative overflow-hidden mt-10 mb-10">
					<h2 className="text-2xl font-heading-font text-white text-center">
						Blogs & Articles
					</h2>
					{SquareAnimation(6)}
				</div>
				<div className="main-section mb-8">
					<div className="card-holder">
						{blogs?.map((blog, index) => (
							<div className="blog-card" key={index}>
								<div className="w-full h-96 bg-neutral"></div>
								<div className="blog-card-body">
									<h2 className="text-2xl font-heading-font text-white text-center">
										{blog.title}
									</h2>
									<p
										id={`blog-content-${index}`}
										className="text-left font-body-font text-white text-xs line-clamp-4 transition-all duration-1000">
										{blog.content}
									</p>
								</div>
								<div className="flex w-full justify-between px-6 items-center mb-4">
									<h6 className="text-sm font-heading-font text-white">
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
											<h6 className="text-sm font-heading-font text-white">
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
