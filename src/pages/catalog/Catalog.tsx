import GameCard from "../../components/common/gameCard/GameCard";
import ArrowDown from "../../images/filter-btn.svg";
import "./catalog.scss";

export default function Catalog() {
	return (
		<section className="popular-games">
			<div className="popular-games__sort-container">
				<h1 className="popular-games__title">POPULAR <span>GAMES</span></h1>
				<div>
					<button className="popular-games__filter-btn">Price<img src={ArrowDown} alt="arrow" /></button>
					<button className="popular-games__btn">Filter</button>
				</div>
			</div>
			<div className="popular-games__catalog">
				<GameCard cards={15} />
			</div>
		</section>
	)
}
