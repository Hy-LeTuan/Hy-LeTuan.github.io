import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./css/index.css";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Index from "./Routes/Index.tsx";
import About from "./Routes/About.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path={"/"} element={<Index />} />
				<Route path={"/about-me"} element={<About />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	</StrictMode>
);
