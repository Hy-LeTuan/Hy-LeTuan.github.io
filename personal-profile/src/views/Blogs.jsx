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
				<div className="main-banner">
					<h1 className="display">Blog Posts</h1>
					<hr className="banner-hr" />
					{MediaHeader(".")}
					{SquareAnimation(null)}
				</div>
			</section>
			<section className="section-container">
				<div className="main-section">
					<div className="flex flex-col gap-6 justify-center items-center md:col-span-2 lg:gap-8">
						<h1 className="text-black">Available Categories</h1>
						<div className="flex flex-wrap gap-6 px-4 justify-between items-start md:gap-8">
							{categories?.map((cat, index) => (
								<div
									className="flex flex-col items-center justify-center gap-2"
									key={index}>
									<div className="bg-neutral w-9 h-9 rounded-full lg:w-12 lg:h-12"></div>
									<h6 className="text-black">{cat.title}</h6>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
			{SectionBanner(5, "Blogs & Articles")}
			<section className="section-container">
				<div className="main-section place-items-center">
					{blogs?.map((blog, index) => (
						<div className="blog-card" key={index}>
							<div className="w-full h-96 bg-neutral"></div>
							<div className="blog-card-body">
								<h1 className="text-white text-left">
									{blog.title}
								</h1>
								<p
									id={`blog-content-${index}`}
									className="text-left text-white line-clamp-5 transition-all duration-1000">
									{blog.content}
								</p>
							</div>
							<div className="flex w-full justify-between px-8 items-center mb-4">
								<h4 className="text-white">{blog.date}</h4>
								{checkReadButton(
									document.querySelector(
										`p[id="blog-content-${index}"]`
									)
								) ? (
									<button
										className="btn btn-blog-read-more"
										type="button"
										onClick={(event) =>
											showMoreContentOnClick(event)
										}>
										<h4 className="text-white">
											Read more
										</h4>
										<img
											src="./src/assets/expand.svg"
											alt="expand icon"
											className="text-white w-4 h-4 -rotate-90 transition-all duration-300"
										/>
									</button>
								) : (
									<button
										className="btn btn-blog-read-more"
										type="button">
										<h4 className="text-white">
											End of content
										</h4>
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
