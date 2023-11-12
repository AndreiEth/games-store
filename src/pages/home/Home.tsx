import "./home.scss";
import Carusel from "../../components/home/carusel/Carusel";
import { Link } from "react-router-dom";
import Droid from "../../images/droid-subscribe.svg";
import CaruselNews from "../../components/home/caruselNews/CaruselNews";
import GameCard from "../../components/common/gameCard/GameCard";
import Robot from "../../images/form-robot.svg";
import { gameCards } from "../../types/game-card";

interface Homeprops {
	cards: gameCards;
}

export default function Home(props: Homeprops) {
	const { cards } = props;
	return (
		<div className="home">

			<section className=".carusel">
				<Carusel />
			</section>

			<section className="blog">
				<div className="blog__container">
					<h2 className="blog__title">BLOG <span>&</span> <span id="span-news">NEWS</span></h2>
					<CaruselNews />
				</div>
			</section>

			<section className="subscribe">
				<h2 className="subscribe__title">SUBSCRIBE TO:</h2>
				<Link to="/" className="subscribe__logo">3 <span>GAMES</span> STORE</Link>
				<div className="subscribe__btn-container">
					<img src={Droid} className="subscribe__img" alt="droid" />
					<button className="subscribe__btn">SUBSCRIBE</button>
				</div>
			</section>

			<section className="catalog">
				<div className="catalog__container">
					<h2 className="catalog__title"><span>BEST</span> SELLERS</h2>
					<button className="catalog__button">View&nbsp;catalog</button>
				</div>
				<div className="catalog__cards">
					{
						cards.slice(0, 9).map((card) => <GameCard key={card.id} card={card} />)
					}
				</div>
			</section>

			<section className="home-form">
				<div className="home-form__container">
					<div className="home-form__form-container">
						<h2 className="home-form__title">REQUEST <span>A</span> FREE <span>CONSULTATION</span></h2>
						<form action="submit" className="home-form__form">
							<input type="text" id="name" placeholder="Your name" required />
							<input type="emal" id="email" placeholder="Your E-Mail" required />
							<textarea id="message" placeholder="Message"></textarea>
							<button className="home-form__btn" type="submit">Send</button>
						</form>
					</div>

					<img className="home-form__image" src={Robot} />
				</div>
			</section>

		</div>
	)
}
