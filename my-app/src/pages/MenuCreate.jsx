import { NavLink } from "react-router";

function MenuCreate() {
	return (
		<div>
			<NavLink to={"/menu"}>Back</NavLink>
			<h1>Menu Create</h1>
			<form className="form" action="">
				<label htmlFor="name">Name: </label>
				<input id="name" type="text" />
				<label htmlFor="price">Price: </label>
				<input id="number" type="number" />
				<label htmlFor="category">Category: </label>
				<input id="category" type="text" />
				<label htmlFor="description">Description: </label>
				<input id="description" type="text" />
				<button>Create</button>
			</form>
		</div>
	);
}

export default MenuCreate;
