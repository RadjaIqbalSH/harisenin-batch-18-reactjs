import { NavLink } from "react-router";
// import { ThemeContext } from "./Layout";
// import { useContext } from "react";

import "./button.css";
import useThemeStore from "../store/theme";

const Button = (props) => {
	// props
	const { url, label } = props;

	const theme = useThemeStore((state) => state.theme);

	// const theme = useContext(ThemeContext);

	return (
		<NavLink
			className={theme === "light" ? "btn-link" : "btn-link-dark"}
			to={url}
		>
			{label} {true}
		</NavLink>
	);
};

export default Button;
