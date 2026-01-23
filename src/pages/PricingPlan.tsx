import React from 'react'
import { Link } from 'react-router-dom';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import Testimonials from '../component/Testimonials.tsx';
import BlogSec1 from '../component/BlogSec1.tsx';

const PricingPlan: React.FC = () => {
    return (
        <>
            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">Pricing Plan</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/PricingPlan">Pricing Plan</Link>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== About Section Two ===================================== --> */}
            <section className="section-eight">
                <div className="container">
                    <p className="cap-text cost-cal fade_up">BEST PLANS</p>
                    <h2 className="sec-text mazing pb-0 fade_up">The best pricing plans</h2>
                    <div className="row pricing-row">
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                            <div className="pricing-card basic">
                                <h2>BASIC PLAN</h2>
                                <div className="price-box">
                                    <span className="price">$299</span><span className="month">/Month</span>
                                </div>
                                <ul className="features">
                                    <li className="active">Deep cleaning for entire home</li>
                                    <li className="active">Window and glass cleaning</li>
                                    <li className="active">Floor polishing and scrubbing</li>
                                    <li>Appliance exterior cleaning</li>
                                    <li>Sanitization of high-touch areas</li>
                                    <li>Trash removal and deodorizing</li>
                                </ul>
                                <button className="btn-quote getStarted-btn">Get Started
                                    <img src={CrossArrow} alt="cross-arrow" />
                                </button>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                            <div className="pricing-card enterprise">
                                <h2>GOLD PLAN</h2>
                                <div className="price-box">
                                    <span className="price">$599</span><span className="month">/Month</span>
                                </div>
                                <ul className="features">
                                    <li className="active">Deep cleaning for entire home</li>
                                    <li className="active">Window and glass cleaning</li>
                                    <li className="active">Floor polishing and scrubbing</li>
                                    <li className="active">Appliance exterior cleaning</li>
                                    <li className="active">Sanitization of high-touch areas</li>
                                    <li className="active">Trash removal and deodorizing</li>
                                </ul>
                                <button className="btn-quote view-project-btn w-100">Get Started
                                    <img src={CrossArrow} alt="cross-arrow" />
                                </button>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                            <div className="pricing-card premium">
                                <h2>SILVER PLAN</h2>
                                <div className="price-box">
                                    <span className="price">$899</span><span className="month">/Month</span>
                                </div>
                                <ul className="features">
                                    <li className="active">Deep cleaning for entire home</li>
                                    <li className="active">Window and glass cleaning</li>
                                    <li className="active">Floor polishing and scrubbing</li>
                                    <li className="active">Appliance exterior cleaning</li>
                                    <li className="active">Sanitization of high-touch areas</li>
                                    <li className="active">Trash removal and deodorizing</li>
                                </ul>
                                <button className="btn-quote getStarted-btn">Get Started
                                    <img src={CrossArrow} alt="cross-arrow" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Nine ===================================== --> */}
            <section className="section-nine pt-0">
                <Testimonials />
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

export default PricingPlan
