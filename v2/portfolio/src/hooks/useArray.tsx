import { useState } from "react";

type useArrayReturn = [boolean[], (index: number, newValue: boolean) => void];

function useArray(initialArray: Array<boolean>): useArrayReturn {
	const [stateArray, setStateArray] = useState(initialArray);

	const setNewArray = (index: number, newValue: boolean) => {
		if (index < 0 || index >= stateArray.length) {
			throw new Error("index count invalid");
		}
		setStateArray((prevArray) => {
			let newArray = prevArray.map((value, i) => {
				if (i == index) {
					return newValue;
				} else {
					return value;
				}
			});

			return newArray;
		});
	};

	return [stateArray, setNewArray];
}

export default useArray;
