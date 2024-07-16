import React from "react";
import MediaHeader from "../layout/MediaHeader";
import SquareAnimation from "../layout/SquareAnimation";

function Blogs() {
	return (
		<>
			<section className="relative overflow-hidden clear-both w-full bg-primary text-white font-heading-font">
				<div className="p-12 flex flex-col gap-6 justify-center items-center overflow-hidden">
					<h1 className="text-3xl">Technology Blogs</h1>
					<MediaHeader />
					{SquareAnimation(null)}
				</div>
			</section>
			<section className="mt-10">
				<div className="flex flex-col gap-6 justify-center items-center mb-10">
					<h2 className="text-2xl font-heading-font text-black">
						Categories
					</h2>
					<div className="flex gap-9 justify-center items-center">
						<div className="bg-neutral w-9 h-9 rounded-full"></div>
						<div className="bg-neutral w-9 h-9 rounded-full"></div>
						<div className="bg-neutral w-9 h-9 rounded-full"></div>
						<div className="bg-neutral w-9 h-9 rounded-full"></div>
						<div className="bg-neutral w-9 h-9 rounded-full"></div>
					</div>
				</div>
				<div className="w-full p-2 bg-primary relative overflow-hidden mb-10">
					<h2 className="text-2xl font-heading-font text-white text-center">
						Blogs & Articles
					</h2>
					{SquareAnimation(6)}
				</div>
				<div className="main-section">
					<div className="card">
						<div className="card-body-single-column justify-center gap-8">
							<div className="blog-card">
								<div className="w-full h-96 bg-neutral"></div>
								<div className="blog-card-body">
									<h2 className="text-2xl font-heading-font text-white text-center">
										Blog title right here
									</h2>
									<p className="text-left font-body-font text-white text-xs">
										Blog body, this is where all the
										contents will sit. How do i know deal
										with the imbalances? I’m not too sure,
										but I can set a height limit, then
										anything after the height limit can be
										an overlay and expanded on top. It would
										be awesome to be able to accomplish
										something like that.
									</p>
								</div>
								<div className="flex w-full justify-between px-6 items-center mb-4">
									<div className="flex items-center justify-center gap-4">
										<div className="h-8 w-8 bg-neutral rounded-full"></div>
										<h6 className="text-base font-heading-font text-white">
											Author
										</h6>
									</div>
									<h6 className="text-base font-heading-font text-white">
										15/07/2024
									</h6>
								</div>
							</div>
							<div className="blog-card">
								<div className="w-full h-96 bg-neutral"></div>
								<div className="blog-card-body">
									<h2 className="text-2xl font-heading-font text-white text-center">
										Blog title right here
									</h2>
									<p className="text-left font-body-font text-white text-xs">
										Blog body, this is where all the
										contents will sit. How do i know deal
										with the imbalances? I’m not too sure,
										but I can set a height limit, then
										anything after the height limit can be
										an overlay and expanded on top. It would
										be awesome to be able to accomplish
										something like that.
									</p>
								</div>
								<div className="flex w-full justify-between px-6 items-center mb-4">
									<div className="flex items-center justify-center gap-4">
										<div className="h-8 w-8 bg-neutral rounded-full"></div>
										<h6 className="text-base font-heading-font text-white">
											Author
										</h6>
									</div>
									<h6 className="text-base font-heading-font text-white">
										15/07/2024
									</h6>
								</div>
							</div>
							<div className="blog-card">
								<div className="w-full h-96 bg-neutral"></div>
								<div className="blog-card-body">
									<h2 className="text-2xl font-heading-font text-white text-center">
										Blog title right here
									</h2>
									<p className="text-left font-body-font text-white text-xs">
										Blog body, this is where all the
										contents will sit. How do i know deal
										with the imbalances? I’m not too sure,
										but I can set a height limit, then
										anything after the height limit can be
										an overlay and expanded on top. It would
										be awesome to be able to accomplish
										something like that.
									</p>
								</div>
								<div className="flex w-full justify-between px-6 items-center mb-4">
									<div className="flex items-center justify-center gap-4">
										<div className="h-8 w-8 bg-neutral rounded-full"></div>
										<h6 className="text-base font-heading-font text-white">
											Author
										</h6>
									</div>
									<h6 className="text-base font-heading-font text-white">
										15/07/2024
									</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Blogs;
