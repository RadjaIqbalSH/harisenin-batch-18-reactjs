import { useEffect, useState } from "react";
import "./App.css";

const nameList = ["-Jhon", "-Doe", "-Bambang", "-Budi"];

const arrayBaru = nameList.map((item) => item + "JOKO");

const Jhon = () => {
	return (
		<>
			<div>
				<p>Jhon</p>
			</div>
		</>
	);
};

const Doe = () => {
	return <p>Doe</p>;
};

function App() {
	// State
	const [counter, setCounter] = useState(1);
	const [counter2, setCounter2] = useState(1);

	// Event Handler
	const handlingClick = () => {
		setCounter(counter + 1);
	};

	const handlingClick2 = () => {
		setCounter2(counter2 + 1);
	};

	useEffect(() => {
		// code fetching to api
		console.log("Component App mounted");
		return () => {
			console.log("Component App unmounted");
		};
	}, []);

	useEffect(() => {
		console.log("Counter 1 updated:", counter);
	}, [counter]);

	useEffect(() => {
		console.log("Counter 2 updated:", counter2);
	}, [counter2]);

	useEffect(() => {
		console.log("Counter 3 updated:", counter);
	}, []);

	return (
		<>
			{/* Conditional Rendering */}
			<h1>
				{" "}
				{/** = x 3 */}
				Counter: {counter} {counter === 2 ? <Jhon /> : <Doe />}
			</h1>
			<button onClick={handlingClick}>Click Me</button>
			<h1>
				{" "}
				{/** = x 3 */}
				Counter: {counter2}
			</h1>
			<button onClick={handlingClick2}>Click Me</button>
			{
				// Javascript argument -> Nilai
				// JAvascript statement -> Perintah
			}
			{/* List Rendering */}
			<h1>Name list</h1>
			{arrayBaru.map((name) => (
				<p>{name}</p>
			))}
		</>
	);
}

export default App;
