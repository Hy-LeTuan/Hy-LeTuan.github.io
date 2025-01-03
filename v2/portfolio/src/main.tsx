import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./css/index.css";
import Header from "./components/Header.tsx";
import Index from "./Routes/Index.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path={"/"} element={<Index />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
