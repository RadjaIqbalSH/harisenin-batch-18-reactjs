import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from "react-router";
import MenuList from "./pages/MenuList.jsx";
import MenuCreate from "./pages/MenuCreate.jsx";
import MenuUpdate from "./pages/MenuUpdate.jsx";
import MenuDetail from "./pages/MenuDetail.jsx";
import Layout from "./components/Layout.jsx";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

const router = createBrowserRouter([
	{
		// http://localhost:5173/
		path: "/",
		Component: App,
	},
	{
		path: "/menu",
		Component: Layout,
		children: [
			{
				// http://localhost:5173/menus
				index: true,
				Component: MenuList,
			},
			{
				// http://localhost:5173/menu/create
				path: "create",
				Component: MenuCreate,
			},
			{
				// http://localhost:5173/menu/1
				path: ":id",
				Component: MenuDetail,
			},
			{
				// http://localhost:5173/menu/update/1
				path: "update/:id",
				Component: MenuUpdate,
			},
		],
	},
]);

root.render(<RouterProvider router={router} />);
