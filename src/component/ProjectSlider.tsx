import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import projectData from '../data/projectData.json'
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


const ProjectSlider: React.FC = () => {
    const projectSlider = {
        loop: true,
        speed: 1000,
        slidesPerView: 4,
        modules: [Autoplay, Navigation],
        autoplay: { delay: 2000, disableOnInteraction: false },
        navigation: {
            nextEl: ".project-button-next",
            prevEl: ".project-button-prev",
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
            <Swiper {...projectSlider} className="swiper projectSlider">
                {(projectData || []).map((item: ProjectItem) => (
                    <SwiperSlide key={item.id}>
                        <div className="single-img" style={{
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '8px'
                        }}>
                            <img
                                src={projectImages[item.image] ?? ProjectImg1}
                                alt={item.title}
                                className="home-project-img"
                                style={{
                                    transition: 'transform 0.4s ease'
                                }}
                            />
                            <div 
                                className="img-overlay"
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.5) 50%, transparent 100%)',
                                    padding: '30px 20px 20px',
                                    transform: 'translateY(100%)',
                                    transition: 'transform 0.4s ease',
                                    color: 'white'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    const img = e.currentTarget.previousElementSibling as HTMLElement;
                                    if (img) img.style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(100%)';
                                    const img = e.currentTarget.previousElementSibling as HTMLElement;
                                    if (img) img.style.transform = 'scale(1)';
                                }}
                            >
                                <div>
                                    <h3 className="project-name-home" style={{
                                        fontSize: '18px',
                                        fontWeight: '700',
                                        marginBottom: '8px',
                                        color: 'white'
                                    }}>{item.title}</h3>
                                    <p style={{
                                        fontSize: '14px',
                                        lineHeight: '1.5',
                                        color: 'rgba(255, 255, 255, 0.9)',
                                        margin: 0
                                    }}>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="swiper-button-next project-button-next"></div>
                <div className="swiper-button-prev project-button-prev"></div>
            </Swiper>
        </>
    )
}

export default ProjectSlider