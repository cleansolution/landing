import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import QuoteSvg from '../assets/images/svg/quote.svg';
import ManCleaningHome from '../assets/images/testimonials/man-cleaning-home.jpg';
import TestimonialClientImg1 from '../assets/images/testimonials/testimonial-client-img1.jpg';
import testimonailData from '../data/testimonailData.json';

export interface Testimonial {
    id: number;
    testimonial?: string;
    text?: string;
    clientName?: string;
    name?: string;
    clientTitle?: string;
    role?: string;
    avatar?: string;
    image?: string;
}

// Map para las imágenes de testimonios
const testimonialImages: { [key: string]: string } = {
    'testimonial-client-img1.jpg': TestimonialClientImg1,
};

const Testimonials: React.FC = () => {
    const testimonialSlider = {
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        modules: [Autoplay, Navigation],
        autoplay: { delay: 2000, disableOnInteraction: false },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    }
    return (
        <>
            <div className="testimonial-section-main">
                <img className="man-cleaning-home" src={ManCleaningHome} alt="man-cleaning-home" />
                <div className="testimonials-col-main">
                    <p className="cap-text fade_up">testimonials</p>
                    <h2 className="sec-text tryse pb-0 fade_up">Trusted By Thousand Of People & Companies.</h2>
                    <Swiper {...testimonialSlider} className="swiper testimonialSlider zoom_in">
                        {(testimonailData || []).map((item: Testimonial) => (
                            <SwiperSlide
                                key={item.id}
                                className="swiper-slide testimonialSlider-swiper-slide"
                            >
                                <img src={QuoteSvg} alt="quote" />
                                <h3 className="cellent">“{item.text}”</h3>

                                <div className="client-details-main">
                                    <img
                                        src={testimonialImages[item.image] || TestimonialClientImg1}
                                        alt={item.name}
                                    />
                                    <div className="client-details">
                                        <h3>{item.name}</h3>
                                        <p>{item.role}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                        <div className="testimonial-next swiper-button-next"></div>
                        <div className="testimonial-prev swiper-button-prev"></div>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Testimonials