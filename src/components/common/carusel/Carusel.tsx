import Button from "../button/Button";
import "./carusel.scss";
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { CaruselItems } from "../../../utils/CaruselItems";

export default function Carusel() {
	return (
		<Swiper
			className="carusel"
			modules={[Navigation, Autoplay]}
			spaceBetween={50}
			slidesPerView={1}
			navigation={{
				nextEl: ".button-next-slide",
				prevEl: ".button-prev-slide",
			}}
			autoplay={true}
			loop={true}
		>
			{CaruselItems.map((item, index) => {
				return (
					<SwiperSlide key={index}>
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
