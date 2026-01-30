import "./menuList.css";
import menus from "../const/menus";
import { NavLink } from "react-router";
import Card from "../components/Card.jsx";

function MenuList() {
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
				{menus.map((item) => (
					<Card
						name={item.name}
						price={item.price}
						category={item.category}
						description={item.description}
						id={item.id}
					/>
				))}
				{menus.map((item) => (
					<Card
						name={item.name}
						price={item.price}
						category={item.category}
						description={item.description}
						id={item.id}
					/>
				))}
			</div>
		</>
	);
}

export default MenuList;
