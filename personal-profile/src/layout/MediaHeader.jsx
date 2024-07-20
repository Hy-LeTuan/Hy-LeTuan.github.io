import React from "react";

function MediaHeader(relativity = ".") {
	return (
		<div
			id="social-icon"
			className="relative z-10 flex justify-center items-center gap-4 lg:gap-6 xl:gap-8">
			<a href="https://github.com/Hy-LeTuan">
				<img
					src={`${relativity}/src/assets/github.svg`}
					alt="github link"
					className="w-8 h-8 lg:w-10 lg:h-10 xl:w-14 xl:h-14"
				/>
			</a>
			<a href="mailto:letuanhy1507@gmail.com">
				<img
					src={`${relativity}/src/assets/email.svg`}
					alt="email link"
					className="w-8 h-8 lg:w-10 lg:h-10 xl:w-14 xl:h-14"
				/>
			</a>
			<a href="https://www.facebook.com/hy.le.148553/">
				<img
					src={`${relativity}/src/assets/facebook.svg`}
					alt="facebook link"
					className="w-8 h-8 lg:w-10 lg:h-10 xl:w-14 xl:h-14"
				/>
			</a>
			<a href="https://www.youtube.com/@B--LeTuanHy">
				<img
					src={`${relativity}/src/assets/youtube.svg`}
					alt="youtube link"
					className="w-8 h-8 lg:w-10 lg:h-10 xl:w-14 xl:h-14"
				/>
			</a>
		</div>
	);
}

export default MediaHeader;
