import React from 'react'
import { Link } from 'react-router-dom'
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import servicesData from "../data/servicesData.json";

import img1 from "../assets/images/services/slider-img1.jpg";
import img2 from "../assets/images/services/slider-img2.jpg";
import img3 from "../assets/images/services/slider-img3.jpg";
import img4 from "../assets/images/services/slider-img4.jpg";
import img5 from "../assets/images/services/slider-img5.jpg";
import img6 from "../assets/images/services/slider-img6.jpg";

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

const Services: React.FC = () => {
    return (
        <>
            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">Our Services</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/Services">SERVICES</Link>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Nine ===================================== --> */}
            <section className="section-eight testimonial-page">
                <div className="container">
                    <h2 className="d-none">hidden</h2>
                    <div className="row services-page-row">
                        {(servicesData as ServiceItem[]).map((item) => (
                            <div
                                className="col-xxl-4 col-xl-4 col-lg-4 col-md-6" key={item.id}
                            >
                                <div className="cleaning-card">
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
                                    <Link to={item.link} className="card-learn-more">
                                        Learn More <img src={CrossArrow} alt="cross-arrow" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services