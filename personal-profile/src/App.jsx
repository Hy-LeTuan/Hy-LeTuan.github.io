import { useState } from "react";
import Header from "./layout/Header";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div className="m-0 p-0">
			{/* <div className="mt-9"></div> */}
			<Header />
			<main className="text-center">
				<Outlet />
			</main>
		</div>
	);
}

export default App;
