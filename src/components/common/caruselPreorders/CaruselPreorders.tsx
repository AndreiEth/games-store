import "./caruselPreorders.scss";
import { GAME__CARDS } from "../../../utils/conts";
import { Navigation, Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export default function CaruselPreorders() {
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
				{GAME__CARDS.map((item, index) => {
					return (
						<SwiperSlide className="swiper-slide2" key={index}>
							<img src={item.link} alt="game" className="pre-order__img" />
							<div className="pre-order__container">
								<p className="pre-order__genre"><span>Genre:</span> {item.genre}</p>
								<h2 className="pre-order__title">{item.title}</h2>
								<p className="pre-order__description">{item.description}</p>
								<p className="pre-order__price">{item.price}</p>
							</div>
							<div className="pre-order__btn-container">
								<button className="pre-order__btn-details">Details</button>
								<button className="pre-order__btn-buy">Buy Now</button>
							</div>

						</SwiperSlide>
					);
				})}
			</Swiper>
			<div className="button-prev-slide2"></div>
			<div className="button-next-slide2"></div>
		</>
	)
}
