import React from "react";
import { useState, useEffect, useRef } from "react";

function SquareAnimation(bubbleCountOveride) {
	const baseScreenWidth = 430.0;
	let baseBubbleCount = 15;

	if (bubbleCountOveride !== null) {
		baseBubbleCount = bubbleCountOveride;
	}

	const screenWidth = useRef(window.screen.width);
	const screenHeight = useRef(window.screen.height);
	const [bubbles, setBubbles] = useState([]);

	const generateBubbleSize = () => {
		const min = Math.ceil(30);
		const max = Math.floor(45);

		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	const generateBubleColor = () => {
		const choice = ["bg-accent", "bg-pink"];
		return choice[Math.round(Math.random())];
	};

	const generateBubbleDelay = () => {
		const min = Math.ceil(1000);
		const max = Math.floor(5000);

		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	const generateAnimationDuration = () => {
		const min = Math.ceil(2000);
		const max = Math.floor(6000);

		return Math.floor(Math.random() * (max - min + 1)) + min;
	};

	const generateBubblePosition = (bubbleCount) => {
		const step = Math.round(100 / bubbleCount);

		const topPosition = [];
		const leftPosition = [];

		for (let j = 1; j <= bubbleCount; j++) {
			const leftDiff = Math.floor(Math.random() * 15);
			const topDiff = Math.floor(Math.random() * 10);

			const topPercentage = Math.floor(Math.random() * 85) + 5;

			topPosition.push(topPercentage + topDiff);
			leftPosition.push(step * j - leftDiff);
		}

		return [topPosition, leftPosition];
	};

	const generateBubbles = () => {
		const bubblesArray = [];
		screenWidth.current = window.screen.width;
		screenHeight.current = window.screen.height;

		const updatedBubbleCount = Math.round(
			baseBubbleCount * (screenWidth.current / baseScreenWidth)
		);

		const [topPosition, leftPosition] =
			generateBubblePosition(updatedBubbleCount);

		for (let i = 0; i < updatedBubbleCount; i++) {
			const bubbleSize = generateBubbleSize();
			const backgroundColor = generateBubleColor();
			const delay = generateBubbleDelay();
			const duration = generateAnimationDuration();

			bubblesArray.push(
				<li
					key={i}
					className={`block rounded-full absolute ${backgroundColor}`}
					style={{
						width: `${bubbleSize}px`,
						height: `${bubbleSize}px`,
						top: `${topPosition[i]}%`,
						left: `${leftPosition[i]}%`,
						animationDelay: `${delay}ms`,
						animationDuration: `${duration}ms`,
					}}></li>
			);
		}

		setBubbles(bubblesArray);
	};

	const onWidthChange = () => {
		generateBubbles();
	};

	useEffect(() => {
		window.addEventListener("resize", onWidthChange);
		generateBubbles();

		return () => {
			window.removeEventListener("resize", onWidthChange);
		};
	}, []);

	return (
		<>
			<ul className="circles">{bubbles}</ul>
		</>
	);
}

export default SquareAnimation;
