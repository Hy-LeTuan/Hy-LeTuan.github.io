import React from "react";

function MediaHeader() {
	return (
		<div
			id="social-icon"
			className="relative z-10 flex justify-center items-center gap-4">
			<a href="https://github.com/Hy-LeTuan">
				<img src="./src/assets/github.svg" alt="" className="w-8 h-8" />
			</a>
			<a href="mailto:letuanhy1507@gmail.com">
				<img src="./src/assets/email.svg" alt="" className="w-8 h-8" />
			</a>
			<a href="https://www.facebook.com/hy.le.148553/">
				<img
					src="./src/assets/facebook.svg"
					alt=""
					className="w-8 h-8"
				/>
			</a>
			<a href="https://www.youtube.com/@B--LeTuanHy">
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
