import { useEffect, useRef } from "react";
import { useInView, animate, motion } from "motion/react";
import { anim } from "./anim";
import {
	AnimateFadeProps,
	AnimateFadeInProps,
	AnimateRotateFadeProps,
	MotionProperty,
	MaskProps,
} from "./types";

function load_width(width: string | null | undefined) {
	let widthName;
	switch (width) {
		case "full":
			widthName = "100%";
			break;
		case "fit":
			widthName = "fit-content";
			break;
		case "max":
			widthName = "max-content";
			break;
	}

	return widthName;
}

function AnimateFade({
	children,
	classname,
	delay,
	width,
	duration,
	initialOpacity,
	finalOpacity,
	additionalInitial,
	additionalAnimate,
	additionalTransition,
	additionalExit,
	animateOnView,
	onViewAmount,
	elementKey,
	extraStyle,
}: AnimateFadeProps) {
	// opacity is the final opacity of the transformation

	let final_on_view_amount = onViewAmount ? onViewAmount : 0.3;
	let initial_opacity = initialOpacity ? initialOpacity : 0;
	let final_opacity = finalOpacity ? finalOpacity : 1;
	let final_duration = duration ? duration : 0.3;
	let findalDelay: MotionProperty = delay ? delay : 0;

	const motionRef = useRef(null);
	const motionInView = useInView(motionRef, {
		once: true,
		amount: final_on_view_amount,
	});

	// useEffect hook to track motions
	useEffect(() => {
		if (motionInView) {
			animate(
				motionRef.current as unknown as {} | {}[],
				{
					opacity: final_opacity,
					...additionalAnimate,
				},
				{
					delay: findalDelay,
					duration: final_duration,
					type: "tween",
					ease: "backInOut",
					...additionalTransition,
				}
			);
		}
	}, [motionInView]);

	// define fade animation
	const fade = {
		initial: {
			opacity: initial_opacity,
			...additionalInitial,
		},
		enter: {
			opacity: final_opacity,
			transition: {
				delay: delay,
				duration: final_duration,
				type: "tween",
				ease: "backInOut",
				...additionalTransition,
			},
			...additionalAnimate,
		},
		exit: {
			...additionalExit,
		},
	};

	let widthStyle = load_width(width);

	if (animateOnView) {
		return (
			<motion.div
				initial={{
					opacity: initial_opacity,
					...additionalInitial,
				}}
				className={`empty-container ${classname}`}
				style={{
					width: widthStyle,
					display: "flex",
					...extraStyle,
				}}
				ref={motionRef}>
				{children}
			</motion.div>
		);
	} else {
		return (
			<motion.div
				className={`empty-container ${classname}`}
				style={{
					width: widthStyle,
					display: "flex",
					...extraStyle,
				}}
				{...anim(fade)}
				ref={motionRef}>
				{children}
			</motion.div>
		);
	}
}

function AnimateFadeIn({
	children,
	classname,
	delay,
	amount,
	direction,
	width,
	duration,
	additionalInitial,
	additionalAnimate,
	additionalTransition,
	additionalExit,
	animateOnView,
	onViewAmount,
	elementKey,
	extraStyle,
}: AnimateFadeInProps) {
	// direction should be a choice between vertical or horizontal
	// amount is the amount moved
	// delay is the exact number

	let finalOnViewAmount = onViewAmount ? onViewAmount : 0.3;
	let finalAmount: MotionProperty = amount ? amount : 100;
	let findalDelay: MotionProperty = delay ? delay : 0;

	const motionRef = useRef(null);
	const motionInView = useInView(motionRef, {
		once: true,
		amount: finalOnViewAmount,
	});

	let finalX: MotionProperty, finalY: MotionProperty;

	if (direction == "x") {
		finalX = finalAmount;
		finalY = 0;
	} else if (direction == "y") {
		finalY = finalAmount;
		finalX = 0;
	}

	// useEffect hook to track motions
	useEffect(() => {
		if (motionInView) {
			animate(
				motionRef.current as unknown as {} | {}[],
				{
					opacity: 1,
					x: 0,
					y: 0,
					...additionalAnimate,
				},
				{
					delay: findalDelay,
					duration: duration ? duration : 0.3,
					type: "tween",
					ease: "backInOut",
					...additionalTransition,
				}
			);
		}
	}, [motionInView]);

	// define fade animation
	const fade = {
		initial: {
			opacity: 0,
			x: finalX,
			y: finalY,
			...additionalInitial,
		},
		enter: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: {
				delay: delay,
				duration: duration ? duration : 0.3,
				type: "tween",
				ease: "backInOut",
				...additionalTransition,
			},
			...additionalAnimate,
		},
		exit: {
			...additionalExit,
		},
	};

	let widthStyle = load_width(width);

	if (animateOnView) {
		return (
			<motion.div
				initial={{
					opacity: 0,
					x: finalX,
					y: finalY,
					...additionalInitial,
				}}
				className={`empty-container ${classname}`}
				style={{
					width: widthStyle,
					...extraStyle,
				}}
				ref={motionRef}>
				{children}
			</motion.div>
		);
	} else {
		return (
			<motion.div
				className={`empty-container ${classname}`}
				style={{
					width: widthStyle,
					...extraStyle,
				}}
				{...anim(fade)}
				ref={motionRef}>
				{children}
			</motion.div>
		);
	}
}

function AnimateRotateFade({
	children,
	classname,
	delay,
	width,
	duration,
	initialRotation,
	finalRotation,
	additionalInitial,
	additionalAnimate,
	additionalTransition,
	additionalExit,
	animateOnView,
	onViewAmount,
	elementKey,
	extraStyle,
}: AnimateRotateFadeProps) {
	// opacity is the final opacity of the transformation

	let final_on_view_amount = onViewAmount ? onViewAmount : 0.3;
	let initial_rotation = initialRotation ? initialRotation : -10;
	let final_rotation = finalRotation ? finalRotation : 0;
	let final_duration = duration ? duration : 0.3;
	let finalDelay = delay ? delay : 0;
	let finalKey = elementKey ? elementKey : 0;

	const motionRef = useRef(null);
	const animatedRef = useRef(null);
	const motionInView = useInView(motionRef, {
		once: true,
		amount: final_on_view_amount,
	});

	const y = "160%";

	// define fade animation
	const fade = {
		initial: {
			opacity: 1,
			y: y,
			rotate: initial_rotation,
			...additionalInitial,
		},
		enter: {
			opacity: 1,
			y: 0,
			rotate: final_rotation,
			transition: {
				delay: finalDelay,
				duration: final_duration,
				type: "tween",
				ease: "backInOut",
				...additionalTransition,
			},
			...additionalAnimate,
		},
		exit: {
			...additionalExit,
		},
	};

	// useEffect hook to track motions
	useEffect(() => {
		console.log(motionInView);
		if (motionInView) {
			animate(
				animatedRef.current,
				{
					opacity: 1,
					y: 0,
					rotate: final_rotation,
					...additionalAnimate,
				},
				{
					delay: finalDelay,
					duration: final_duration,
					type: "tween",
					ease: "backInOut",
					...additionalTransition,
				}
			);
		}
	}, [motionInView]);

	let widthStyle = load_width(width);

	if (animateOnView) {
		return (
			<div
				style={{
					padding: 0,
					margin: 0,
					overflow: "hidden",
					position: "relative",
					width: widthStyle,
					...extraStyle,
				}}
				ref={motionRef}
				key={finalKey}>
				<motion.div
					initial={{
						opacity: 1,
						rotate: initial_rotation,
						y: y,
						...additionalInitial,
					}}
					className={`empty-container ${classname}`}
					style={{
						width: widthStyle,
					}}
					id="animated"
					key={finalKey}
					ref={animatedRef}>
					{children}
				</motion.div>
			</div>
		);
	} else {
		return (
			<div
				style={{
					padding: 0,
					margin: 0,
					overflow: "hidden",
					position: "relative",
					width: widthStyle,
				}}
				key={finalKey}
				ref={motionRef}>
				<motion.div
					className={`empty-container ${classname}`}
					style={{
						width: widthStyle,
					}}
					{...anim(fade)}
					key={finalKey}
					ref={animatedRef}>
					{children}
				</motion.div>
			</div>
		);
	}
}

function Mask({
	classname,
	delay,
	amount,
	direction,
	duration,
	additionalInitial,
	additionalAnimate,
	additionalTransition,
	additionalExit,
	animateOnView,
	onViewAmount,
	elementKey,
	extraStyle,
}: MaskProps) {
	// direction should be a choice between vertical or horizontal
	// amount is the amount moved
	// delay is the exact number

	let finalOnViewAmount = onViewAmount ? onViewAmount : 0.3;
	let finalAmount: MotionProperty = amount ? amount : 100;
	let findalDelay: MotionProperty = delay ? delay : 0;

	const motionRef = useRef(null);
	const motionInView = useInView(motionRef, {
		once: true,
		amount: finalOnViewAmount,
	});

	let finalX: MotionProperty, finalY: MotionProperty;

	if (direction == "x") {
		finalX = finalAmount;
		finalY = 0;
	} else if (direction == "y") {
		finalY = finalAmount;
		finalX = 0;
	}

	// useEffect hook to track motions
	useEffect(() => {
		if (motionInView) {
			animate(
				motionRef.current as unknown as {} | {}[],
				{
					opacity: 1,
					x: 0,
					y: 0,
					...additionalAnimate,
				},
				{
					delay: findalDelay,
					duration: duration ? duration : 0.3,
					type: "tween",
					ease: "backInOut",
					...additionalTransition,
				}
			);
		}
	}, [motionInView]);

	// define fade animation
	const fade = {
		initial: {
			opacity: 0,
			x: finalX,
			y: finalY,
			...additionalInitial,
		},
		enter: {
			opacity: 1,
			x: 0,
			y: 0,
			transition: {
				delay: delay,
				duration: duration ? duration : 0.3,
				type: "tween",
				ease: "backInOut",
				...additionalTransition,
			},
			...additionalAnimate,
		},
		exit: {
			...additionalExit,
		},
	};

	if (animateOnView) {
		return (
			<motion.div
				initial={{
					opacity: 0,
					x: finalX,
					y: finalY,
					...additionalInitial,
				}}
				className={`mask ${classname}`}
				style={{
					...extraStyle,
				}}
				ref={motionRef}></motion.div>
		);
	} else {
		return (
			<motion.div
				className={`mask ${classname}`}
				style={{
					...extraStyle,
				}}
				{...anim(fade)}
				ref={motionRef}></motion.div>
		);
	}
}

export { AnimateFade, AnimateFadeIn, AnimateRotateFade, Mask };
