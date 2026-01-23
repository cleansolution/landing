import React from 'react'
import { Link } from 'react-router-dom'
import testimonailData from '../data/testimonailData.json';
import QuoteSvg from "../assets/images/svg/quote.svg";
import BlogSec1 from '../component/BlogSec1.tsx';
import client1 from "../assets/images/testimonials/testimonial-client-img1.jpg";

export const testimonialImageMap = {
    "testimonial-client-img1.jpg": client1,
} as const;


export interface Testimonial {
    id: number;
    text: string;
    name: string;
    role: string;
    image: keyof typeof testimonialImageMap;
}
const TestimonialsPage: React.FC = () => {
    return (
        <>
            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">Testimonial</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/TestimonialsPage">Testimonial</Link>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Nine ===================================== --> */}
            <section className="section-eight testimonial-page">
                <div className="container">
                    <div className="row testimonial-page-row">
                        {(testimonailData as Testimonial[]).map((item) => (
                            <div key={item.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                <div className="testimonialSlider-swiper-slide">
                                    <img src={QuoteSvg} alt="quote" />
                                    <h3 className="cellent">“{item.text}”</h3>
                                    <div className="client-details-main">
                                        <img
                                            src={testimonialImageMap[item.image]}
                                            alt={item.name}
                                        />
                                        <div className="client-details">
                                            <h3>{item.name}</h3>
                                            <p>{item.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Blog ===================================== --> */}
            <section className="blog-section">
                <div className="container">
                    <p className="cap-text cost-cal fade_up">latest news</p>
                    <h2 className="sec-text mazing pb-0 fade_up">Our Most Recent Posts</h2>
                    <div className="container">
                        <BlogSec1 limit={3} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default TestimonialsPage