import "./header.css";
import { Outlet } from "react-router";
// import { createContext, useState } from "react";
import useThemeStore from "../store/theme";

// Create React Context
// export const ThemeContext = createContext();

const Layout = () => {
	const theme = useThemeStore((state) => state.theme);
	const toggleTheme = useThemeStore((state) => state.toggleTheme);
	// const [theme, setTheme] = useState("light");

	// const handleToggleTheme = () => {
	// 	setTheme(theme === "light" ? "dark" : "light");
	// };

	return (
		<div>
			<div className="header">
				<p>Menu List</p>
				<button onClick={toggleTheme} style={{ marginLeft: "20px" }}>
					Toggle Theme : {theme}
				</button>
			</div>
			{/* React Context */}
			{/* <ThemeContext.Provider value={{ theme }}>
				<Outlet />
			</ThemeContext.Provider> */}
			{/* Tanpa Context */}
			<Outlet />
		</div>
	);
};

export default Layout;
