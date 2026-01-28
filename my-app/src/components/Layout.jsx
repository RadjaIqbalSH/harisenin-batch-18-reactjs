import "./header.css";
import { Outlet } from "react-router";

const Layout = () => {
	return (
		<div>
			<div className="header">
				<p>Menu List</p>
			</div>
			<Outlet />
		</div>
	);
};

export default Layout;
