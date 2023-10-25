import Button from "../button/Button";
import "./carusel.scss";
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { CARUSEL_ITEMS } from "../../../utils/conts";

export default function Carusel() {
	return (
		<Swiper
			className="carusel swiper1"
			modules={[Navigation, Autoplay]}
			spaceBetween={50}
			slidesPerView={1}
			navigation={{
				nextEl: ".button-next-slide",
				prevEl: ".button-prev-slide",
			}}
			autoplay={{ delay: 2000, stopOnLastSlide: false, disableOnInteraction: false }}
			loop={true}
			speed={600}
		>
			{CARUSEL_ITEMS.map((item, index) => {
				return (
					<SwiperSlide className="swiper-slide1" key={index}>
						<h1 className="carusel__title">{item.title}</h1>
						<p className="carusel__description">{item.description}</p>
						<div className="carusel__buttons">
							<Button text={"Details"} />
							<Button text={"Buy now"} />
						</div>
					</SwiperSlide>
				);
			})}
			<div className="flex-btn">
				<div className="button-prev-slide"></div>
				<div className="button-next-slide"></div>
			</div>
		</Swiper>
	)
}
