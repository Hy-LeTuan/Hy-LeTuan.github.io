import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import "./App.css";

function App() {
	return (
		<div className="m-0 p-0">
			{/* <div className="mt-9"></div> */}
			<Header />
			<main className="text-center">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}

export default App;
