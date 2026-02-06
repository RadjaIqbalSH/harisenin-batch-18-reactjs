import type { FC, MouseEventHandler } from "react";
import Button from "./Button.tsx";

interface ICardProps {
	name: string;
	price: string;
	category: string;
	description: string;
	id: string;
	handleDelete: MouseEventHandler<HTMLButtonElement>;
}

const Card: FC<ICardProps> = (props) => {
	// props
	const { name, price, category, description, id, handleDelete } = props;

	return (
		<div className="card">
			<p>Name: {name}</p>
			<p>Price: {price} </p>
			<p>Category: {category} </p>
			<p>Description: {description} </p>
			<Button url={`/menu/${id}`} label="Detail" />
			<br />
			<br />
			<Button url={`/menu/update/${id}`} label="Update" />
			<br />
			<br />
			<button onClick={handleDelete}>delete</button>
		</div>
	);
};

export default Card;
