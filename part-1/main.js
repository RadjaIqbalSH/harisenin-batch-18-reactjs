const appElement = document.getElementById("app");
const root = ReactDOM.createRoot(appElement);

// PascalCase -> MobilRodaTiga
const Card = (props) => {
	return (
		// camelCase -> mobilRodaTiga
		<div className={props.className}>
			<div className="card-content">{props.headerName}</div>
			<div className="card-content">{props.bodyName}</div>
			<div className="card-content">Footer Card {props.becak}</div>
		</div>
	);
};

const Button = (props) => {
	return <a href={props.href}>{props.name}</a>;
};

root.render(
	<>
		<Card headerName="Header 1" bodyName="Jhon" becak="OK" />
		<Card headerName="Header 2" bodyName="Doe" />
		<Button href="http://youtube.com" name="Btn Youtube" />
		<br />
		<Button href="http://google.com" name="Btn Google" />
	</>
);
