import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import SliderImg1 from '../assets/images/services/slider-img1.jpg';
import SliderImg2 from '../assets/images/services/slider-img2.jpg';
import SliderImg3 from '../assets/images/services/slider-img3.jpg';
import SliderImg4 from '../assets/images/services/slider-img4.jpg';
import SliderImg5 from '../assets/images/services/slider-img5.jpg';
import SliderImg6 from '../assets/images/services/slider-img6.jpg';
import SliderImg7 from '../assets/images/services/slider-img7.jpg';
import ServicesSvg1 from '../assets/images/svg/services-svg1.svg';
import ServicesSvg2 from '../assets/images/svg/services-svg2.svg';
import ServicesSvg3 from '../assets/images/svg/services-svg3.svg';
import ServicesSvg4 from '../assets/images/svg/services-svg4.svg';
import ServicesSvg5 from '../assets/images/svg/services-svg5.svg';
import ServicesSvg6 from '../assets/images/svg/services-svg6.svg';
import servicesData from "../data/servicesData.json";

export interface ServiceItem {
    id: number;
    img: string;
    svg?: string;
    title: string;
    desc: string;
    link: string;
}

// Map para las imágenes de servicios
const serviceImages: { [key: string]: string } = {
    'slider-img1.jpg': SliderImg1,
    'slider-img2.jpg': SliderImg2,
    'slider-img3.jpg': SliderImg3,
    'slider-img4.jpg': SliderImg4,
    'slider-img5.jpg': SliderImg5,
    'slider-img6.jpg': SliderImg6,
    'slider-img7.jpg': SliderImg7,
};

// Map para los SVGs de servicios
const serviceSvgs: { [key: string]: string } = {
    'services-svg1.svg': ServicesSvg1,
    'services-svg2.svg': ServicesSvg2,
    'services-svg3.svg': ServicesSvg3,
    'services-svg4.svg': ServicesSvg4,
    'services-svg5.svg': ServicesSvg5,
    'services-svg6.svg': ServicesSvg6,
};

function ServicesFeatured() {
    const services = servicesData.services;
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
                {services.map((item: ServiceItem) => (
                    <SwiperSlide key={item.id} className="swiper-slide cleaning-card">
                        <div className="cleaning-card-img-main">
                            <img
                                src={item.img.startsWith('data:') ? item.img : (serviceImages[item.img] || SliderImg1)}
                                alt={item.title}
                            />
                        </div>

                        {item.svg && (
                            <div className="services-svg-main">
                                <img
                                    src={item.svg.startsWith('data:') ? item.svg : (serviceSvgs[item.svg] || ServicesSvg1)}
                                    alt={item.title}
                                />
                            </div>
                        )}

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