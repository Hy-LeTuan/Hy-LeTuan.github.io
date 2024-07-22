import React from "react";
import SquareAnimation from "./SquareAnimation";

function SectionBanner(bubbleCount, bannerTitle) {
	return (
		<div className="section-banner">
			<h1 className="text-white">{bannerTitle}</h1>
			{SquareAnimation(bubbleCount)}
		</div>
	);
}

export default SectionBanner;
