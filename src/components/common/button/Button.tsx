import "./button.scss";

interface ButtonProps{
	text:string
}

export default function Button(props:ButtonProps) {

	return (
		<button className={props.text === "Buy now" ? "button-2" : "button"}>
		{props.text}
		</button>
	)
}
