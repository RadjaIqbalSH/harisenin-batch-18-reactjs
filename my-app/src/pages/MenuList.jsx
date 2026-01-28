import "./menuList.css";
import menus from "../const/menus";
import { NavLink } from "react-router";

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
					<div class="card">
						<p>Name: {item.name}</p>
						<p>Price: {item.price} </p>
						<p>Category: {item.category} </p>
						<p>Description: {item.description} </p>
						<NavLink className={"btn-link"} to={`/menu/${item.id}`}>
							Detail
						</NavLink>
						<NavLink
							className={"btn-link"}
							to={`/menu/update/${item.id}`}
							style={{
								marginLeft: "10px",
							}}
						>
							Update
						</NavLink>
						<br />
					</div>
				))}
			</div>
		</>
	);
}

export default MenuList;
