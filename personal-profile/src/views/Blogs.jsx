import React, { useState, useEffect } from "react";
import MediaHeader from "../layout/MediaHeader";
import SquareAnimation from "../layout/SquareAnimation";
import SectionBanner from "../layout/SectionBanner";
import blogList from "../data/blogs/blogList.json";
import categoryList from "../data/blogs/categories.json";

function Blogs() {
	const blogs = blogList.blogs;
	const categories = categoryList.categories;

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
				<div className="main-banner">
					<h1 className="display">Blog Posts</h1>
					<hr className="banner-hr" />
					{MediaHeader(".")}
					{SquareAnimation(null)}
				</div>
			</section>
			<section className="section-container">
				<div className="flex flex-col w-full gap-3 text-center">
					<h5 className="text-neutral-400">Blogs & Articles</h5>
					<h1 className="text-black">
						An entertaining read, perhaps?
					</h1>
				</div>
			</section>
			<section className="section-container bg-neutral-100">
				<div className="w-full flex flex-wrap gap-8 justify-between items-center">
					{categories?.map((cat, index) => (
						<div
							className="flex flex-col items-center justify-center gap-3"
							key={index}>
							<div className="bg-black w-full h-12 rounded-lg lg:w-12 lg:h-12"></div>
							<p className="text-neutral-400 text-xs">
								{cat.title}
							</p>
						</div>
					))}
				</div>
			</section>
			<section className="section-container bg-white">
				<div className="main-section gap-8 place-items-center">
					{blogs?.map((blog, index) => (
						<div className="blog-card" key={index}>
							<div className="w-full h-72 bg-neutral-400"></div>
							<div className="blog-card-body">
								<h2 className="text-white text-left">
									{blog.title}
								</h2>
								<p
									id={`blog-content-${index}`}
									className="text-left text-white line-clamp-3 transition-all duration-1000">
									{blog.content}
								</p>
							</div>
							<div className="flex w-full justify-between items-center mb-4 px-4">
								<h5 className="text-white">{blog.date}</h5>
								{checkReadButton(
									document.querySelector(
										`p[id="blog-content-${index}"]`
									)
								) ? (
									<button
										className="btn btn-blog-read-more gap-3"
										type="button"
										onClick={(event) =>
											showMoreContentOnClick(event)
										}>
										<h5 className="text-white">
											Read more
										</h5>
										<img
											src="./src/assets/expand.svg"
											alt="expand icon"
											className="text-white w-4 h-4 -rotate-90 transition-all duration-300"
										/>
									</button>
								) : (
									<button
										className="btn btn-blog-read-more gap-3"
										type="button">
										<h5 className="text-white">
											End of content
										</h5>
									</button>
								)}
							</div>
						</div>
					))}
				</div>
			</section>
		</>
	);
}

export default Blogs;
