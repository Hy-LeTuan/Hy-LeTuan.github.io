import React from "react";

function LocationPin(props: { fill: string | null; className: string | null }) {
	return (
		<svg
			width="800px"
			height="800px"
			viewBox="-3 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			className={`${props.className}`}>
			<title>pin_rounded_circle [#620]</title>
			<desc>Created with Sketch.</desc>
			<g fill="none" fillRule="evenodd">
				<g
					fill={`${props.fill}`}
					transform="translate(-383.000000, -5439.000000)">
					<g transform="translate(56.000000, 160.000000)">
						<path d="M334,5297 C332.178,5297 329,5290.009 329,5286 C329,5283.243 331.243,5281 334,5281 C336.757,5281 339,5283.243 339,5286 C339,5290.009 335.822,5297 334,5297 M334,5279 C330.134,5279 327,5282.134 327,5286 C327,5289.866 330.134,5299 334,5299 C337.866,5299 341,5289.866 341,5286 C341,5282.134 337.866,5279 334,5279 M334,5287.635 C333.449,5287.635 333,5287.187 333,5286.635 C333,5286.084 333.449,5285.635 334,5285.635 C334.551,5285.635 335,5286.084 335,5286.635 C335,5287.187 334.551,5287.635 334,5287.635 M334,5283.635 C332.343,5283.635 331,5284.979 331,5286.635 C331,5288.292 332.343,5289.635 334,5289.635 C335.657,5289.635 337,5288.292 337,5286.635 C337,5284.979 335.657,5283.635 334,5283.635" />
					</g>
				</g>
			</g>
		</svg>
	);
}

export default LocationPin;
