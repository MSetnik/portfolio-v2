import React from "react"
import { createBrowserRouter, Outlet } from "react-router-dom"
import Home from "../pages/home/index.tsx"
import Navbar from "../components/organism/navbar/index.tsx"
import Project from "../pages/project/index.tsx"

const NavbarWrapper: React.FC = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	)
}

export const router = createBrowserRouter([
	{
		path: "/",
		element: <NavbarWrapper />,
		children: [
			{
				path: "/",
				element: <Home />
			},
			{
				path: "/project/mobile/:id",
				element: <Project />
			},
			{
				path: "/project/web/:id",
				element: <Project />
			},
			{
				path: "*",
				element: <Home />
			}
		]
	}
])
