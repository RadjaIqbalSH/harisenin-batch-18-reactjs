import Button from "./Button.jsx";

const Card = (props) => {
	// props
	const { name, price, category, description, id } = props;

	return (
		<div class="card">
			<p>Name: {name}</p>
			<p>Price: {price} </p>
			<p>Category: {category} </p>
			<p>Description: {description} </p>
			<Button url={`/menu/${id}`} label="Detail" />
			<br />
			<br />
			<Button url={`/menu/update/${id}`} label="Update" />
			<br />
		</div>
	);
};

export default Card;
