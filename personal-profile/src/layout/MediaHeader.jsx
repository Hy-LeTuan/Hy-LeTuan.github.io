import React from "react";

function MediaHeader() {
	return (
		<div
			id="social-icon"
			className="relative z-10 flex justify-center items-center gap-4">
			<a href="">
				<img src="./src/assets/github.svg" alt="" className="w-8 h-8" />
			</a>
			<a href="">
				<img src="./src/assets/email.svg" alt="" className="w-8 h-8" />
			</a>
			<a href="">
				<img
					src="./src/assets/facebook.svg"
					alt=""
					className="w-8 h-8"
				/>
			</a>
			<a href="">
				<img
					src="./src/assets/youtube.svg"
					alt=""
					className="w-8 h-8"
				/>
			</a>
		</div>
	);
}

export default MediaHeader;
