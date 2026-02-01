import "./menuList.css";
// import menus from "../const/menus";
import { NavLink } from "react-router";
import Card from "../components/Card.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

// menu list api https://6968be9069178471522b6774.mockapi.io/api/v1/menu

// delete menu api https://6968be9069178471522b6774.mockapi.io/api/v1/menu/:id

function MenuList() {
	const [loading, setLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [data, setData] = useState([]);

	const deleteMenu = async (id) => {
		setLoading(true);
		await axios
			.delete(
				`https://6968be9069178471522b6774.mockapi.io/api/v1/menu/${id} `
			)
			.then(() => {
				axios
					.get(
						"https://6968be9069178471522b6774.mockapi.io/api/v1/menu"
					)
					.then((response) => {
						// handle success
						setData(response.data);
					})
					.catch(() => {
						// handle error
					})
					.finally(() => {
						setLoading(false);
					});
			});
	};

	useEffect(() => {
		// logic fetch menu
		axios
			.get("https://6968be9069178471522b6774.mockapi.io/api/v1/menu")
			.then((response) => {
				// handle success
				setData(response.data);
			})
			.catch(() => {
				// handle error
				setIsError(true);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	return (
		<>
			<div
				style={{
					marginTop: "20px",
					marginBottom: "20px",
				}}
			>
				<NavLink className="btn-link" to={"/menu/create"}>
					Create New Menu
				</NavLink>
			</div>
			<div class="menu-list">
				{loading ? (
					<h1>Loading...</h1>
				) : (
					data.map((item) => (
						<Card
							name={item.name}
							price={item.price}
							category={item.category}
							description={item.description}
							id={item.id}
							handleDelete={() => deleteMenu(item.id)}
						/>
					))
				)}
				{isError && <h1>Something went wrong!</h1>}
			</div>
		</>
	);
}

export default MenuList;
