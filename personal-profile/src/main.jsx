import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./views/Home.jsx";
import Portfolio from "./views/Portfolio.jsx";
import Active from "./views/Active.jsx";
import Blogs from "./views/Blogs.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/portfolio",
				element: <Portfolio />,
			},
			{
				path: "/active",
				element: <Active />,
			},
			{
				path: "/blogs",
				element: <Blogs />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
