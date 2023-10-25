import "./home.scss";
import Carusel from "../../components/common/carusel/Carusel";
import CaruselGames from "../../components/common/caruselNews/CaruselNews";

export default function Home() {
	return (
		<div className="home">
			{/* <div className="ellipse-blue"></div>
			<div className="ellipse-red"></div> */}
			<section className="home__carusel">
				<Carusel />
			</section>
			<section className="home__blog">
				<div className="home__blog-container">
					<h2 className="home__blog-title">BLOG <span>&</span> <span id="span-news">NEWS</span></h2>
					<CaruselGames />
				</div>
			</section>
		</div>
	)
}
