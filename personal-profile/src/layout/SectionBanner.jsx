import React from "react";
import SquareAnimation from "./SquareAnimation";

function SectionBanner(bubbleCount, bannerTitle) {
	return (
		<div className="section-banner">
			<h2 className="text-2xl font-heading-font text-white text-center">
				{bannerTitle}
			</h2>
			{SquareAnimation(bubbleCount)}
		</div>
	);
}

export default SectionBanner;
