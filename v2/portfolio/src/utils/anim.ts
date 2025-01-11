function anim(variants: { initial: any; enter: any; exit: any }) {
	return {
		intial: "initial",
		animate: "enter",
		exit: "exit",
		variants,
	};
}

export { anim };
