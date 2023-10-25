import "./caruselNews.scss";
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { CARUSEL__NEWS } from "../../../utils/conts";

export default function CaruselNews() {
	return (
		<>
			<Swiper
				className="news-carusel swiper2"
				modules={[Navigation, Autoplay]}
				spaceBetween={30}
				slidesPerView={3}
				navigation={{
					nextEl: ".button-next-slide2",
					prevEl: ".button-prev-slide2",
				}}
				autoplay={{ delay: 2000, stopOnLastSlide: false, disableOnInteraction: false }}
				loop={true}
				speed={600}
			>
				{CARUSEL__NEWS.map((item, index) => {
					return (
						<SwiperSlide className="swiper-slide2" key={index}>
							<img src={item.link} className="news-carusel__img" alt="news" />
							<div className="news-carusel__container">
								<p className="news-carusel__date">{item.date}</p>
								<h2 className="news-carusel__title">{item.title}</h2>
								<p className="news-carusel__description">{item.description}</p>
								<button className="news-carusel__btn">
									Read more...
								</button>
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