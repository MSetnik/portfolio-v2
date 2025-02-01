import {
	createBrowserRouter,
	Outlet
} from 'react-router-dom'
import Home from '../pages/home/index.tsx'
import Navbar from '../components/organism/navbar/index.tsx'


const NavbarWrapper : React.FC = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	)
}

export const router = createBrowserRouter([
	{
		path: '/',
		element: <NavbarWrapper />,
		children: [
			{
				path: '/',
				element: <Home />
			}
		]
	},

])

