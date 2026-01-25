import { useState } from "react";
import "./App.css";

const nameList = ["-Jhon", "-Doe", "-Bambang", "-Budi"];

const arrayBaru = nameList.map((item) => item + "JOKO");

function App() {
	// State
	const [counter, setCounter] = useState(1);

	// Event Handler
	const handlingClick = () => {
		setCounter(counter + 1);
	};

	return (
		<>
			{/* Conditional Rendering */}
			<h1>
				{" "}
				{/** = x 3 */}
				Counter: {counter} {counter === 2 ? <p>Jhon</p> : <p>Doe</p>}
			</h1>
			<button onClick={handlingClick}>Click Me</button>
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
