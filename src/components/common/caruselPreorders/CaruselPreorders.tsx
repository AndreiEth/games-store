import "./caruselPreorders.scss";
import { GAME__CARDS } from "../../../utils/conts";
import { Navigation, Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import GameCard from "../gameCard/GameCard";
import { gameCards } from "../../../types/game-card";

interface Caruselprops {
	cards: gameCards;
}

export default function CaruselPreorders(props: Caruselprops) {
	const { cards } = props;
	return (
		<>
			<Swiper
				className="swiper2"
				modules={[Navigation, Autoplay, A11y]}
				direction={'horizontal'}
				spaceBetween={30}
				slidesPerView={3}
				navigation={{
					nextEl: ".button-next-slide2",
					prevEl: ".button-prev-slide2",
				}}
				loop={true}
				autoplay={{ delay: 2000, stopOnLastSlide: false, disableOnInteraction: false }}
				speed={600}
			>
				{cards.map((card) => {
					return (
						<SwiperSlide className="swiper-slide2">
							<GameCard key={card.id} card={card} />
						</SwiperSlide>
					)
				})
				}
			</Swiper>
			<div className="button-prev-slide2"></div>
			<div className="button-next-slide2"></div>
		</>
	)
}
