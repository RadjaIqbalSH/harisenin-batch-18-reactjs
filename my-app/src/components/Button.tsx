import { NavLink } from "react-router";
// import { ThemeContext } from "./Layout";
// import { useContext } from "react";

import "./button.css";
import useThemeStore from "../store/theme";
import type { FC } from "react";
import type { IButtonProps } from "../typings/button";

/**
 *
 * tipe data di typescript ada beberapa
 *
 * string
 * boolean
 * number
 *
 */

/**
 * type datanya itu object atau array
 *
 * interface atau type
 *
 */

/**
 * type data untuk semua hal (harus di hindari)
 *
 * any
 *
 */

// type TOption = "satu" | string | "tiga";

// const options: any = "empat";

// interface IResponseApi {
// 	meta: {
// 		status: string;
// 	};
// 	error_msg: string | [];
// }

// interface IResponseApiProduct extends IResponseApi {
// 	data: {
// 		name: string;
// 	};
// }

// tipe data array

// const exampleArray: string[] = ["satu", "dua"];

// Array of Object
/**
 * [
 * 	{
 * 		name: "Jhon"
 * 	}
 * ]
 */

// export interface IArrayObject {
// 	name: string;
// }

// const arrayObject: IArrayObject[] = [
// 	{
// 		name: "",
// 	},
// ];

// type TTree = {
// 	name: string;
// 	age: number;
// }
// interface ITree2 {
// 	age: number;
// }

// interface ITree extends ITree2 {
// 	name: string;
// }

// const tree: ITree = {
// 	name: "Jhon",
// 	age: 54,
// };

// const tree2: string[] = ["jhon", "s"];
// const tree3: (string | number)[] = ["jhon", 10];
// const tree5: [string, boolean, number] = ["jhon", false, 10];

// ---------------

const Button: FC<IButtonProps> = (props) => {
	// props
	const { url, label } = props;

	// const exampleFunc = (data: string): void => {
	// 	return "";
	// };

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
