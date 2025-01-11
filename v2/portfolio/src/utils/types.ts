import { ReactNode } from "react";
import { CustomValueType } from "motion/react";

type AnimateProps = {
	children: ReactNode;
	classname: string | null | undefined;
	delay: number | null | undefined;
	width: string | null | undefined;
	duration: number | null | undefined;
	additionalInitial: object | null | undefined;
	additionalAnimate: object | null | undefined;
	additionalTransition: object | null | undefined;
	additionalExit: object | null | undefined;
	animateOnView: boolean | null | undefined;
	onViewAmount: number | null | undefined;
	elementKey: number | null | undefined;
	extraStyle: object | null | undefined;
};

type AnimateFadeProps = AnimateProps & {
	initialOpacity: number | null;
	finalOpacity: number | null;
};
type AnimateFadeInProps = AnimateProps & {
	amount: number | null;
	direction: string;
};

type MotionProperty = string | number | CustomValueType | undefined;

type AnimateRotateFadeProps = AnimateProps & {
	initialRotation: number | undefined | null;
	finalRotation: number | undefined | null;
};

export type {
	AnimateProps,
	AnimateFadeProps,
	AnimateFadeInProps,
	MotionProperty,
	AnimateRotateFadeProps,
};
