import { NavLink, useParams } from "react-router";

const MenuDetail = () => {
	const params = useParams();

	console.log("params => ", params.id);

	return (
		<div>
			<NavLink to={"/menu"}>Back</NavLink>
			<h1>Menu Detail</h1>
			<p>Name : </p>
			<p>Price : </p>
			<p>Category : </p>
			<p>Description : </p>
		</div>
	);
};

export default MenuDetail;
