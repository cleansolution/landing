import React from 'react'
import HomeHeroSolid from '../component/HomeHeroSolid.tsx';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import headphoneIcon from '../assets/images/svg/headphone-icon.svg'
import sectionsData from '../data/sectionsData.json';
import aboutData from '../data/aboutData.json';
import AboutImg1 from '../assets/images/about/about-img1.jpg';
import SliderImg2 from '../assets/images/services/slider-img2.jpg';
import CheckTransparent from '../assets/images/svg/check-transparent.svg';
import HowWorkBg from '../assets/images/about/how-to-work-bg.png';
import HowWorkSvg1 from '../assets/images/svg/how-to-work-svg1.svg';
import HowWorkSvg2 from '../assets/images/svg/how-to-work-svg2.svg';
import HowWorkSvg3 from '../assets/images/svg/how-to-work-svg3.svg';
import HowWorkArrow from '../assets/images/svg/how-to-work-arrow.svg';
import ServicesFeatured from '../component/ServicesFeatured.tsx';
import ProjectGrid from '../component/ProjectGrid.tsx';
import Testimonials from '../component/Testimonials.tsx';
import ContactForm from '../component/ContactForm.tsx';
import FAQ from '../component/FAQ.tsx';
import CTASection from '../component/CTASection.tsx';
import TrustBadges from '../component/TrustBadges.tsx';

const HomeSolid: React.FC = () => {
    return (
        <>
            {/* <!-- ====================================== Section Hero Slider ===================================== --> */}
            <section id="home" className="hero-slider-section position-relative">
                <HomeHeroSolid />
            </section>
            {/* <!-- ====================================== Section Two ===================================== --> */}
            <section id="about" className="section-two">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <p className="cap-text fade_in">{aboutData.capText}</p>
                            <h2 className="sec-text fade_up">{aboutData.mainTitle}</h2>
                            <p className="sec-sub-text fade_up">{aboutData.description}</p>
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
                            <div className="sub-img-main" style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '20px'
                            }}>
                                <img 
                                    src={AboutImg1} 
                                    alt="Professional Cleaning Service" 
                                    style={{
                                        width: '100%',
                                        maxWidth: '500px',
                                        height: 'auto',
                                        borderRadius: '8px',
                                        boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <TrustBadges />
            {/* <!-- ====================================== Section Three ===================================== --> */}
            <section className="section-three" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <p className="cap-text fade_up" style={{ 
                            fontSize: '16px', 
                            color: '#1e3a8a', 
                            fontWeight: '600', 
                            textTransform: 'uppercase', 
                            letterSpacing: '1px',
                            marginBottom: '15px'
                        }}>OUR FEATURED SERVICES</p>
                        <h2 className="sec-text pb-0 fade_up" style={{ 
                            fontSize: '42px', 
                            fontWeight: '700', 
                            marginBottom: '20px',
                            maxWidth: '800px',
                            margin: '0 auto 20px'
                        }}>The United Way For To Find Specialist Services</h2>
                        <p className="sec-sub-text ornare fade_up" style={{ 
                            maxWidth: '700px', 
                            margin: '0 auto',
                            fontSize: '16px',
                            lineHeight: '1.6',
                            color: '#666'
                        }}>We offer a comprehensive range of professional cleaning services tailored to meet your specific needs. Our experienced team delivers exceptional results with attention to detail and commitment to excellence.</p>
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
                                {(sectionsData?.whyChooseUs?.benefits || []).map((benefit) => (
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
                            <img 
                                src={SliderImg2}
                                alt="Professional Cleaning Service" 
                                className="video2"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    borderRadius: '8px',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Five ===================================== --> */}
            <section id="services" className="section-five">
                <div className="container">
                    <p className="cap-text cost-cal fade_up">Get in Touch</p>
                    <h2 className="sec-text fami-cal pb-0 fade_up">Ready to Experience Professional Cleaning?</h2>
                    <div className="calculator-box-main zoom_in" style={{
                        padding: '60px 40px',
                        textAlign: 'center',
                        backgroundColor: 'white',
                        borderRadius: '8px'
                    }}>
                        <p style={{
                            fontSize: '18px',
                            color: '#666',
                            marginBottom: '40px',
                            maxWidth: '600px',
                            margin: '0 auto 40px'
                        }}>
                            Contact us today to discuss your cleaning needs and receive a personalized quote for our professional services.
                        </p>
                        <div style={{
                            display: 'flex',
                            gap: '20px',
                            justifyContent: 'center',
                            flexWrap: 'wrap'
                        }}>
                            <a 
                                href="tel:+17573058237" 
                                className="btn-quote our-services-btn"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '16px 32px',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    textDecoration: 'none'
                                }}
                            >
                                <img src={headphoneIcon} alt="phone" style={{ width: '20px', height: '20px' }} />
                                Call Now
                            </a>
                            <a 
                                href="https://wa.me/+17573058237" 
                                className="btn-quote"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '16px 32px',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    textDecoration: 'none',
                                    backgroundColor: '#25D366'
                                }}
                            >
                                Get a Quote
                                <img src={CrossArrow} alt="arrow" />
                            </a>
                        </div>
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
                <ProjectGrid />
            </section>
            {/* <!-- ====================================== Section Nine ===================================== --> */}
            <section className="section-nine pt-0">
                <Testimonials />
            </section>
            <FAQ />
            <CTASection />
            <ContactForm />
        </>
    )
}

export default HomeSolid
