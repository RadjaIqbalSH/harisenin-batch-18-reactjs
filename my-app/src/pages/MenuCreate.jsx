import { useReducer, useState } from "react";
import { NavLink } from "react-router";
import axios from "axios";
import { useNavigate } from "react-router";

// API create menu https://6968be9069178471522b6774.mockapi.io/api/v1/menu

const defaultForm = {
	name: "",
	price: "",
	category: "",
	description: "",
};

const action = (state, action) => {
	switch (action.type) {
		case "change_name": {
			return {
				...state,
				name: action.value,
			};
		}
		case "change_price": {
			return {
				...state,
				price: action.value,
			};
		}

		case "change_category": {
			return {
				...state,
				category: action.value,
			};
		}

		case "change_description": {
			return {
				...state,
				description: action.value,
			};
		}

		default: {
			return state;
		}
	}
};

function MenuCreate() {
	// string, boolean, number, object -> useState
	const [loading, setLoading] = useState(false);
	// object panjang, array banyak
	const [data, setData] = useReducer(action, defaultForm);

	const navigate = useNavigate();

	const createMenu = async (data) => {
		setLoading(true);
		await axios
			.post(
				"https://6968be9069178471522b6774.mockapi.io/api/v1/menu",
				data
			)
			.then(() => {
				console.log("Menu created successfully");
				navigate("/menu");
			})
			.catch(() => {
				console.log("Failed to create menu");
			})
			.finally(() => {
				setLoading(false);
			});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		createMenu(data);
	};

	return (
		<div>
			<NavLink to={"/menu"}>Back</NavLink>
			<h1>Menu Create</h1>
			<form onSubmit={handleSubmit} className="form" action="">
				{/* name */}
				<label htmlFor="name">Name: </label>
				<input
					id="name"
					type="text"
					value={data.name}
					onChange={(event) => {
						setData({
							type: "change_name",
							value: event.target.value,
						});
					}}
				/>
				{/* price */}
				<label htmlFor="price">Price: </label>
				<input
					id="number"
					type="string"
					value={data.price}
					onChange={(event) => {
						setData({
							type: "change_price",
							value: event.target.value,
						});
					}}
				/>
				{/* category */}
				<label htmlFor="category">Category: </label>
				<input
					id="category"
					type="text"
					value={data.category}
					onChange={(event) => {
						setData({
							type: "change_category",
							value: event.target.value,
						});
					}}
				/>
				{/* description */}
				<label htmlFor="description">Description: </label>
				<textarea
					id="description"
					type="text"
					value={data.description}
					onChange={(event) => {
						setData({
							type: "change_description",
							value: event.target.value,
						});
					}}
				/>
				{/* button create */}
				<button type="submit">
					{loading ? "Loading..." : "Create"}
				</button>
			</form>
		</div>
	);
}

export default MenuCreate;
