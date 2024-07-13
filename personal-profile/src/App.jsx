import { useState } from "react";
import "./App.css";

function App() {
	return (
		<>
			<div className="text-center bg-primary">
				<h1 className="text-3xl font-bold underline text-accent font-heading-font">
					Hello, world!
				</h1>
				<p className="text-lg font-body-font">This is some body text</p>
				<div className="btn btn-header">This is a button</div>
			</div>
		</>
	);
}

export default App;
