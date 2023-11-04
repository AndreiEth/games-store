import "./gameCard.scss"
import { GAME__CARDS } from "../../../utils/conts"

export default function GameCard() {
	return (
		<>
			{
				GAME__CARDS.slice(0, 9).map((item, index) => {
					return (
						<div className="card" key={index}>
							<img src={item.link} alt="game" className="card__img" />
							<div className="card__container">
								<p className="card__genre"><span>Genre:</span> {item.genre}</p>
								<h2 className="card__title">{item.title}</h2>
								<p className="card__description">{item.description}</p>
								<p className="card__price">{item.price}</p>
							</div>
							<div className="card__btn-container">
								<button className="card__btn-details">Details</button>
								<button className="card__btn-buy">Buy Now</button>
							</div>
						</div>
					)
				})

			}
		</>
	)
}
