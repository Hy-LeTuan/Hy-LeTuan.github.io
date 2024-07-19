import React from "react";
import SquareAnimation from "./SquareAnimation";

function SectionBanner(bubbleCount, bannerTitle) {
	return (
		<div className="section-banner">
			<h2 className="text-2xl font-heading-font text-white text-center lg:text-4xl lg:py-4">
				{bannerTitle}
			</h2>
			{SquareAnimation(bubbleCount)}
		</div>
	);
}

export default SectionBanner;
