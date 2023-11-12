import "./gameCard.scss"
import { gameCard } from "../../../types/game-card";
import { Link } from "react-router-dom";

interface GameCardprops {
	card: gameCard;
}

export default function GameCard(props: GameCardprops) {
	const { id } = props.card;
	const cardId = `${id}`;

	return (
		<div className="card" >
			<img src={props.card.link} alt="game" className="card__img" />
			<div className="card__container">
				<p className="card__genre"><span>Genre:</span> {props.card.genre}</p>
				<h2 className="card__title">{props.card.title}</h2>
				<p className="card__description">{props.card.description}</p>
				<p className="card__price">{props.card.price}</p>
			</div>
			<div className="card__btn-container">
				<button className="card__btn-details">
					<Link to={`${'/game'}/${cardId}`} className="card__link-details">Details</Link>
				</button>
				<button className="card__btn-buy">Buy Now</button>
			</div>
		</div>
	)
}
