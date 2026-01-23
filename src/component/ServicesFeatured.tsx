import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import servicesData from "../data/servicesData.json";
import img1 from "../assets/images/services/slider-img1.jpg";
import img2 from "../assets/images/services/slider-img2.jpg";
import img3 from "../assets/images/services/slider-img3.jpg";
import img4 from "../assets/images/services/slider-img4.jpg";
import img5 from "../assets/images/services/slider-img5.jpg";
import img6 from "../assets/images/services/slider-img6.jpg";
import img7 from "../assets/images/services/slider-img7.jpg";

import svg1 from "../assets/images/svg/services-svg1.svg";
import svg2 from "../assets/images/svg/services-svg2.svg";
import svg3 from "../assets/images/svg/services-svg3.svg";
import svg4 from "../assets/images/svg/services-svg4.svg";
import svg5 from "../assets/images/svg/services-svg5.svg";
import svg6 from "../assets/images/svg/services-svg6.svg";

export const serviceImageMap = {
    "slider-img1.jpg": img1,
    "slider-img2.jpg": img2,
    "slider-img3.jpg": img3,
    "slider-img4.jpg": img4,
    "slider-img5.jpg": img5,
    "slider-img6.jpg": img6,
    "slider-img7.jpg": img7,
} as const;

export const serviceSvgMap = {
    "services-svg1.svg": svg1,
    "services-svg2.svg": svg2,
    "services-svg3.svg": svg3,
    "services-svg4.svg": svg4,
    "services-svg5.svg": svg5,
    "services-svg6.svg": svg6,
} as const;

export interface ServiceItem {
    id: number;
    img: keyof typeof serviceImageMap;
    svg: keyof typeof serviceSvgMap;
    title: string;
    desc: string;
    link: string;
}

function ServicesFeatured() {
    const servicesSlider = {
        loop: true,
        speed: 1000,
        slidesPerView: 4,
        spaceBetween: 30,
        modules: [Autoplay],
        autoplay: { delay: 2000, disableOnInteraction: false },
        breakpoints: {
            991: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            400: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            220: {
                slidesPerView: 1,
                spaceBetween: 12
            },
        }
    };

    return (
        <>
            <Swiper {...servicesSlider} className="swiper services-slider">
                {(servicesData as ServiceItem[]).map((item) => (
                    <SwiperSlide key={item.id} className="swiper-slide cleaning-card">
                        <div className="cleaning-card-img-main">
                            <img
                                src={serviceImageMap[item.img]}
                                alt={item.title}
                            />
                        </div>

                        <div className="services-svg-main">
                            <img
                                src={serviceSvgMap[item.svg]}
                                alt={item.title}
                            />
                        </div>

                        <div className="card-containe">
                            <h3 className="services-name">{item.title}</h3>
                            <p className="services-card-sub-text">{item.desc}</p>
                        </div>

                        <a href="#contact" className="card-learn-more">
                            Learn More <img src={CrossArrow} alt="cross-arrow" />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default ServicesFeatured