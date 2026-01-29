import React from 'react'
import HomeHeroSolid from '../component/HomeHeroSolid.tsx';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import Video2 from '../assets/video/video2.mp4';
import headphoneIcon from '../assets/images/svg/headphone-icon.svg'
import sectionsData from '../data/sectionsData.json';
import AboutSvg1 from '../assets/images/svg/about-svg1.svg';
import AboutSvg2 from '../assets/images/svg/about-svg2.svg';
import AboutSvg3 from '../assets/images/svg/about-svg3.svg';
import AboutSvg4 from '../assets/images/svg/about-svg4.svg';
import featuresData from '../data/featuresData.json';
import aboutData from '../data/aboutData.json';
import AboutImg1 from '../assets/images/about/about-img1.jpg';
import AboutImg2 from '../assets/images/about/about-img2.jpg';
import AboutImg3 from '../assets/images/about/about-img3.jpg';
import AboutImg4 from '../assets/images/about/about-img4.jpg';
import Subtract from '../assets/images/about/Subtract.png'
import CheckTransparent from '../assets/images/svg/check-transparent.svg';
import HowWorkBg from '../assets/images/about/how-to-work-bg.png';
import HowWorkSvg1 from '../assets/images/svg/how-to-work-svg1.svg';
import HowWorkSvg2 from '../assets/images/svg/how-to-work-svg2.svg';
import HowWorkSvg3 from '../assets/images/svg/how-to-work-svg3.svg';
import HowWorkArrow from '../assets/images/svg/how-to-work-arrow.svg';
import ServicesFeatured from '../component/ServicesFeatured.tsx';
import CostCalculator from '../component/CostCalculator.tsx';
import ProjectSlider from '../component/ProjectSlider.tsx';
import TeamSection from '../component/TeamSection.tsx';
import Testimonials from '../component/Testimonials.tsx';
import ImageZoomScroll from '../component/ImageZoomScroll.tsx';

const HomeSolid: React.FC = () => {
    return (
        <>
            {/* <!-- ====================================== Section Hero Slider ===================================== --> */}
            <section id="home" className="hero-slider-section position-relative">
                <HomeHeroSolid />
                <div className="bubble_area">
                    <div className="bubbles-1"></div>
                    <div className="bubbles-2"></div>
                    <div className="bubbles-3"></div>
                    <div className="bubbles-4"></div>
                    <div className="bubbles-5"></div>
                    <div className="bubbles-6"></div>
                    <div className="bubbles-7"></div>
                    <div className="bubbles-8"></div>
                    <div className="bubbles-9"></div>
                    <div className="bubbles-10"></div>
                </div>
            </section>
            {/* <!-- ====================================== Section Two ===================================== --> */}
            <section id="about" className="section-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <p className="cap-text fade_in">{aboutData.capText}</p>
                            <h2 className="sec-text fade_up">{aboutData.mainTitle}</h2>
                            <p className="sec-sub-text fade_up">{aboutData.description}</p>
                            <div className="about-grid-box-main">
                                {featuresData.features.map((feature, index) => {
                                    const svgMap: { [key: string]: string } = {
                                        'about-svg1.svg': AboutSvg1,
                                        'about-svg2.svg': AboutSvg2,
                                        'about-svg3.svg': AboutSvg3,
                                        'about-svg4.svg': AboutSvg4,
                                    };
                                    return (
                                        <div key={feature.id} className="about-box-main zoom_in">
                                            <div className="about-svg-main">
                                                <img src={svgMap[feature.icon] || AboutSvg1} alt={feature.icon} />
                                            </div>
                                            <div>
                                                <h3 className="expeStaff">{feature.title}</h3>
                                                <p className="fessional">{feature.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="about-sec-main">
                                <a href="#about" className="btn-quote our-services-btn">About Us
                                    <img src={CrossArrow} alt="cross-arrow" />
                                </a>
                                <div className="call">
                                    <div className="headphone-main">
                                        <img src={headphoneIcon} alt="headphone-icon" />
                                    </div>
                                    <div className="need-help-main">
                                        <p>Need Help Now?</p>
                                        <a href="tel:+17573058237">+1 (757) 305 8237</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 position-relative">
                            <div className="sub-img-main">
                                <img className="about-img1" src={AboutImg1} alt="about-img1" />
                                <img className="subtract-img" src={Subtract} alt="Subtract" />
                                <img className="about-img2" src={AboutImg2} alt="about-img2" />
                                <img className="about-img3" src={AboutImg3} alt="about-img3" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Three ===================================== --> */}
            <section className="section-three">
                <div className="container">
                    <p className="cap-text fade_up">OUR FEATURED SERVICES</p>
                    <div className="section-main-text-flex">
                        <h2 className="sec-text pb-0 fade_up">The United Way For To Find Specialist Services</h2>
                        <p className="sec-sub-text ornare fade_up">We offer a comprehensive range of professional cleaning services tailored to meet your specific needs. Our experienced team delivers exceptional results with attention to detail and commitment to excellence.</p>
                    </div>
                    <ServicesFeatured />
                </div>
            </section>
            {/* <!-- ====================================== Section Four ===================================== --> */}
            <section className="section-four">
                <div className="container">
                    <div className="row why-choose-row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <p className="cap-text fade_up">{sectionsData.whyChooseUs.sectionTitle}</p>
                            <h2 className="sec-text fade_up">{sectionsData.whyChooseUs.mainTitle}</h2>
                            <p className="sec-sub-text fade_up">{sectionsData.whyChooseUs.description}</p>
                            <div className="check-box-main">
                                {sectionsData.whyChooseUs.benefits.map((benefit) => (
                                    <div className="check-box-main-sub fade_up" key={benefit.id}>
                                        <img src={CheckTransparent} alt="check-transparent" />
                                        <div>
                                            <h2>{benefit.title}</h2>
                                            <p>{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 sec-video2">
                            <video 
                                autoPlay 
                                muted 
                                loop 
                                playsInline 
                                preload="auto"
                                className="video2"
                            >
                                <source src={Video2} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="sadas"></div>
                            <img className="why-choose-img3" src={AboutImg4} alt="about-img4" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Five ===================================== --> */}
            <section id="services" className="section-five">
                <div className="container">
                    <p className="cap-text cost-cal fade_up">Cost Calculator</p>
                    <h2 className="sec-text fami-cal pb-0 fade_up">Be a Part of Hundreds of Happy Families.</h2>
                    <div className="calculator-box-main zoom_in">
                        <CostCalculator />
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Six ===================================== --> */}
            <section className="section-six">
                <div className="container position-relative">
                    <img className="how-to-work-bg" src={HowWorkBg} alt="how-to-work-bg" />
                    <p className="cap-text cost-cal position-relative fade_up">How it works</p>
                    <h2 className="sec-text mazing position-relative fade_up">Get Amazing Cleaning in 3 Simple Steps</h2>
                    <p className="sec-sub-text scetur position-relative fade_up">Our streamlined process makes it easy to get professional cleaning services. From booking to completion, we ensure a hassle-free experience with transparent pricing and flexible scheduling to accommodate your busy lifestyle.</p>
                    <div className="how-work-step-box">
                        <div className="how-work-step-box-sub fade_up">
                            <div className="how-to-work-circle">
                                <img src={HowWorkSvg1} alt="how-to-work-svg1" />
                            </div>
                            <h3>Pick a suitable plan</h3>
                            <p className="fessional send-info">Browse our range of cleaning services and select the plan that best fits your needs and budget. From one-time deep cleans to regular maintenance packages.
                            </p>
                        </div>
                        <div className="how-work-step-box-sub how-to-work-arrow">
                            <div>
                                <img src={HowWorkArrow} alt="how-to-work-arrow" />
                            </div>
                        </div>
                        <div className="how-work-step-box-sub fade_up">
                            <div className="how-to-work-circle">
                                <img src={HowWorkSvg2} alt="how-to-work-svg2" />
                            </div>
                            <h3>Set your schedule</h3>
                            <p className="fessional send-info">Choose a date and time that works best for you. We offer flexible scheduling including weekends and same-day service for your convenience.
                            </p>
                        </div>
                        <div className="how-work-step-box-sub how-to-work-arrow">
                            <div>
                                <img src={HowWorkArrow} alt="how-to-work-arrow" />
                            </div>
                        </div>
                        <div className="how-work-step-box-sub fade_up">
                            <div className="how-to-work-circle">
                                <img src={HowWorkSvg3} alt="how-to-work-svg3" />
                            </div>
                            <h3>Get things done</h3>
                            <p className="fessional send-info">Sit back and relax while our professional team transforms your space. We arrive on time with all supplies and deliver sparkling results every time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Seven ===================================== --> */}
            <section className="section-seven">
                <div className="container">
                    <p className="cap-text fade_up">OUR works</p>
                    <div className="section-main-text-flex">
                        <h2 className="sec-text pb-0 fade_up">Our Recent Projects</h2>
                        <p className="sec-sub-text ornare fade_up">Take a look at some of our recent cleaning projects and see the quality of work we deliver to our valued clients.</p>
                    </div>
                </div>
                <ProjectSlider />
            </section>
            {/* <!-- ====================================== Section Eight ===================================== --> */}
            <section className="section-eight pt-0">
                <div className="container">
                    <p className="cap-text cost-cal fade_up">Our Expert Worker</p>
                    <h2 className="sec-text mazing pb-0 fade_up">We Are Expert Team To Keep Your Vision</h2>
                    <TeamSection limit={4} />
                </div>
            </section>
            {/* <!-- ====================================== Section Nine ===================================== --> */}
            <section className="section-nine pt-0">
                <Testimonials />
            </section>
            <ImageZoomScroll />
        </>
    )
}

export default HomeSolid
