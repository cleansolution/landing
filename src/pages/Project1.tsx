import React from 'react'
import { Link } from 'react-router-dom';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import projectData from '../data/projectData.json';
import ProjectSlider from '../component/ProjectSlider.tsx';
import ProjectImg1 from "../assets/images/project/project-img1.jpg";
import ProjectImg2 from "../assets/images/project/project-img2.jpg";
import ProjectImg3 from "../assets/images/project/project-img3.jpg";
import ProjectImg4 from "../assets/images/project/project-img4.jpg";
import ProjectImg5 from "../assets/images/project/project-img5.jpg";
import ProjectImg6 from "../assets/images/project/project-img6.jpg";

/* ---------------- Image Map ---------------- */
const projectImages: Record<string, string> = {
    "project-img1.jpg": ProjectImg1,
    "project-img2.jpg": ProjectImg2,
    "project-img3.jpg": ProjectImg3,
    "project-img4.jpg": ProjectImg4,
    "project-img5.jpg": ProjectImg5,
    "project-img6.jpg": ProjectImg6,
};

interface ProjectItem {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
}

const Project1: React.FC = () => {

    const projectSlider2 = {
        modules: [Autoplay, Navigation],
        loop: true,
        speed: 1000,
        slidesPerView: 4,
        autoplay: {
            reverseDirection: true,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1300: {
                slidesPerView: 4,
            },
            991: {
                slidesPerView: 3,
            },
            670: {
                slidesPerView: 2,
            },
            220: {
                slidesPerView: 1,
            },
        }
    }

    return (
        <>
            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">Our Projects</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/Project1"> Projects</Link>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== About Section Two ===================================== --> */}
            <section className="section-two">
                <div className="container">
                    <p className="cap-text fade_up">OUR works</p>
                    <div className="section-main-text-flex">
                        <h2 className="sec-text pb-0 fade_up">Our Recent Projects</h2>
                        <p className="sec-sub-text ornare fade_up">Eu ornare ac amet at tempor id sollicitudin. Mi nam faucibus
                            turpis eu feugiat feugiat aliquet.</p>
                    </div>
                </div>
                <ProjectSlider />

                <Swiper {...projectSlider2} className="swiper projectSlider2">
                    {projectData.map((item: ProjectItem) => (
                        <SwiperSlide key={item.id}>
                            <div className="single-img">
                                <img
                                    src={projectImages[item.image] ?? ProjectImg1}
                                    alt={item.title}
                                    className="home-project-img"
                                />
                                <div className="img-overlay">
                                    <div>
                                        <h3 className="project-name-home">{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                    <Link to={item.link} className="btn-quote view-project-btn">
                                        View Project
                                        <img src={CrossArrow} alt="cross-arrow" />
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-button-next project-button-next"></div>
                    <div className="swiper-button-prev project-button-prev"></div>
                </Swiper>
            </section>
        </>
    )
}

export default Project1   