import React from 'react'
import HomeHeroSolid from '../component/HomeHeroSolid.tsx';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import headphoneIcon from '../assets/images/svg/headphone-icon.svg'
import sectionsData from '../data/sectionsData.json';
import aboutData from '../data/aboutData.json';
import Video2 from '../assets/video/video2.mp4';
import CheckTransparent from '../assets/images/svg/check-transparent.svg';
import HowWorkSvg1 from '../assets/images/svg/how-to-work-svg1.svg';
import HowWorkSvg2 from '../assets/images/svg/how-to-work-svg2.svg';
import HowWorkSvg3 from '../assets/images/svg/how-to-work-svg3.svg';
import ServicesFeatured from '../component/ServicesFeatured.tsx';
import ProjectGrid from '../component/ProjectGrid.tsx';
import Testimonials from '../component/Testimonials.tsx';
import ContactForm from '../component/ContactForm.tsx';
import FAQ from '../component/FAQ.tsx';
import CTASection from '../component/CTASection.tsx';
import TrustBadges from '../component/TrustBadges.tsx';
import StickyCallButton from '../component/StickyCallButton.tsx';

const HomeSolid: React.FC = () => {
    return (
        <>
            <StickyCallButton />
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
                                        <a href="tel:+17573058237">(757) 305-8237</a>
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
                                <div style={{
                                    position: 'relative',
                                    width: '100%',
                                    maxWidth: '500px',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow: '0 15px 40px rgba(24, 74, 140, 0.2)',
                                    border: '4px solid white'
                                }}>
                                    <img 
                                        src="https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                        alt="Professional Cleaning Team" 
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            display: 'block'
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <TrustBadges />
            {/* <!-- ====================================== Section Three ===================================== --> */}
            <section id="featured-services" className="section-three" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <p className="cap-text fade_up" style={{ 
                            fontSize: '16px', 
                            color: '#184A8C', 
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
            <section id="why-us" className="section-four">
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
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '20px'
                            }}>
                                <div style={{
                                    position: 'relative',
                                    width: '100%',
                                    maxWidth: '400px',
                                    aspectRatio: '9/16',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                                    border: '4px solid white'
                                }}>
                                    <video 
                                        autoPlay 
                                        muted 
                                        loop 
                                        playsInline
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            display: 'block'
                                        }}
                                    >
                                        <source src={Video2} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Five ===================================== --> */}
            <section id="services" className="section-five" style={{
                padding: '80px 0',
                backgroundColor: '#f8f9fa'
            }}>
                <div className="container">
                    <p className="cap-text cost-cal fade_up" style={{
                        color: '#ffffff',
                        textAlign: 'center',
                        marginBottom: '15px',
                        textTransform: 'uppercase',
                        fontWeight: '600',
                        letterSpacing: '1.5px'
                    }}>Get in Touch</p>
                    <h2 className="sec-text fami-cal pb-0 fade_up" style={{
                        textAlign: 'center',
                        marginBottom: '50px',
                        color: '#ffffff',
                        textShadow: '0 2px 12px rgba(0, 0, 0, 0.45)',
                        fontSize: '42px',
                        fontWeight: '700'
                    }}>Ready to Experience Professional Cleaning?</h2>
                    <div className="calculator-box-main zoom_in" style={{
                        padding: '50px 40px',
                        textAlign: 'center',
                        backgroundColor: '#184A8C',
                        borderRadius: '16px',
                        boxShadow: '0 10px 40px rgba(24, 74, 140, 0.3)',
                        maxWidth: '900px',
                        margin: '0 auto'
                    }}>
                        <p style={{
                            fontSize: '18px',
                            color: 'white',
                            marginBottom: '35px',
                            maxWidth: '700px',
                            margin: '0 auto 35px',
                            lineHeight: '1.6',
                            fontWeight: '400'
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
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '16px 32px',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    textDecoration: 'none',
                                    backgroundColor: 'white',
                                    color: '#184A8C',
                                    border: 'none',
                                    borderRadius: '8px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                                }}
                            >
                                <img src={headphoneIcon} alt="phone" style={{ width: '20px', height: '20px' }} />
                                Call Now
                            </a>
                            <a 
                                href="#contact" 
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '16px 32px',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    textDecoration: 'none',
                                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                    color: 'white',
                                    border: '2px solid rgba(255, 255, 255, 0.3)',
                                    borderRadius: '8px',
                                    backdropFilter: 'blur(10px)',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                Get a Quote
                                <img src={CrossArrow} alt="arrow" style={{ filter: 'brightness(0) invert(1)' }} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Six ===================================== --> */}
            <section id="how-it-works" className="section-six" style={{
                padding: '100px 0',
                background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `
                        repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(24, 74, 140, 0.02) 49px, rgba(24, 74, 140, 0.02) 50px),
                        repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(24, 74, 140, 0.02) 49px, rgba(24, 74, 140, 0.02) 50px)
                    `,
                    pointerEvents: 'none'
                }}></div>
                <div className="container position-relative" style={{ zIndex: 1 }}>
                    <p className="cap-text cost-cal position-relative fade_up" style={{
                        color: '#184A8C',
                        textAlign: 'center',
                        marginBottom: '15px',
                        textTransform: 'uppercase',
                        fontWeight: '700',
                        letterSpacing: '2px',
                        fontSize: '14px'
                    }}>How it works</p>
                    <h2 className="sec-text mazing position-relative fade_up" style={{
                        textAlign: 'center',
                        marginBottom: '20px',
                        color: '#1a1a1a',
                        fontSize: '48px',
                        fontWeight: '800',
                        lineHeight: '1.2'
                    }}>Get Amazing Cleaning in <span style={{ color: '#184A8C' }}>3 Simple Steps</span></h2>
                    <p className="sec-sub-text scetur position-relative fade_up" style={{
                        textAlign: 'center',
                        maxWidth: '750px',
                        margin: '0 auto 70px',
                        color: '#555',
                        fontSize: '18px',
                        lineHeight: '1.8',
                        fontWeight: '400'
                    }}>Our streamlined process makes it easy to get professional cleaning services. From booking to completion, we ensure a hassle-free experience with transparent pricing and flexible scheduling to accommodate your busy lifestyle.</p>
                    <div className="how-work-step-box" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '40px',
                        alignItems: 'start'
                    }}>
                        <div className="how-work-step-box-sub fade_up" style={{
                            textAlign: 'center',
                            padding: '40px 30px',
                            backgroundColor: 'white',
                            borderRadius: '20px',
                            boxShadow: '0 8px 30px rgba(24, 74, 140, 0.1)',
                            border: '1px solid rgba(24, 74, 140, 0.08)',
                            transition: 'all 0.3s ease',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '-20px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '50px',
                                height: '50px',
                                backgroundColor: '#184A8C',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '24px',
                                fontWeight: '800',
                                color: 'white',
                                boxShadow: '0 4px 15px rgba(24, 74, 140, 0.3)'
                            }}>1</div>
                            <div className="how-to-work-circle" style={{
                                width: '120px',
                                height: '120px',
                                margin: '30px auto 25px',
                                backgroundColor: 'rgba(24, 74, 140, 0.08)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '3px solid rgba(24, 74, 140, 0.15)'
                            }}>
                                <img src={HowWorkSvg1} alt="how-to-work-svg1" style={{ width: '60px', height: '60px' }} />
                            </div>
                            <h3 style={{
                                fontSize: '24px',
                                fontWeight: '700',
                                color: '#184A8C',
                                marginBottom: '15px',
                                lineHeight: '1.3'
                            }}>Pick a suitable plan</h3>
                            <p className="fessional send-info" style={{
                                fontSize: '16px',
                                color: '#666',
                                lineHeight: '1.7',
                                margin: 0
                            }}>Browse our range of cleaning services and select the plan that best fits your needs and budget. From one-time deep cleans to regular maintenance packages.</p>
                        </div>
                        
                        <div className="how-work-step-box-sub fade_up" style={{
                            textAlign: 'center',
                            padding: '40px 30px',
                            backgroundColor: 'white',
                            borderRadius: '20px',
                            boxShadow: '0 8px 30px rgba(24, 74, 140, 0.1)',
                            border: '1px solid rgba(24, 74, 140, 0.08)',
                            transition: 'all 0.3s ease',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '-20px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '50px',
                                height: '50px',
                                backgroundColor: '#184A8C',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '24px',
                                fontWeight: '800',
                                color: 'white',
                                boxShadow: '0 4px 15px rgba(0, 173, 239, 0.3)'
                            }}>2</div>
                            <div className="how-to-work-circle" style={{
                                width: '120px',
                                height: '120px',
                                margin: '30px auto 25px',
                                backgroundColor: 'rgba(0, 173, 239, 0.08)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '3px solid rgba(0, 173, 239, 0.15)'
                            }}>
                                <img src={HowWorkSvg2} alt="how-to-work-svg2" style={{ width: '60px', height: '60px' }} />
                            </div>
                            <h3 style={{
                                fontSize: '24px',
                                fontWeight: '700',
                                color: '#184A8C',
                                marginBottom: '15px',
                                lineHeight: '1.3'
                            }}>Set your schedule</h3>
                            <p className="fessional send-info" style={{
                                fontSize: '16px',
                                color: '#666',
                                lineHeight: '1.7',
                                margin: 0
                            }}>Choose a date and time that works best for you. We offer flexible scheduling including weekends and same-day service for your convenience.</p>
                        </div>
                        
                        <div className="how-work-step-box-sub fade_up" style={{
                            textAlign: 'center',
                            padding: '40px 30px',
                            backgroundColor: 'white',
                            borderRadius: '20px',
                            boxShadow: '0 8px 30px rgba(24, 74, 140, 0.1)',
                            border: '1px solid rgba(24, 74, 140, 0.08)',
                            transition: 'all 0.3s ease',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '-20px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '50px',
                                height: '50px',
                                backgroundColor: '#184A8C',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '24px',
                                fontWeight: '800',
                                color: 'white',
                                boxShadow: '0 4px 15px rgba(24, 74, 140, 0.3)'
                            }}>3</div>
                            <div className="how-to-work-circle" style={{
                                width: '120px',
                                height: '120px',
                                margin: '30px auto 25px',
                                backgroundColor: 'rgba(24, 74, 140, 0.08)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '3px solid rgba(24, 74, 140, 0.15)'
                            }}>
                                <img src={HowWorkSvg3} alt="how-to-work-svg3" style={{ width: '60px', height: '60px' }} />
                            </div>
                            <h3 style={{
                                fontSize: '24px',
                                fontWeight: '700',
                                color: '#184A8C',
                                marginBottom: '15px',
                                lineHeight: '1.3'
                            }}>Get things done</h3>
                            <p className="fessional send-info" style={{
                                fontSize: '16px',
                                color: '#666',
                                lineHeight: '1.7',
                                margin: 0
                            }}>Sit back and relax while our professional team transforms your space. We arrive on time with all supplies and deliver sparkling results every time.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Seven ===================================== --> */}
            <section id="projects" className="section-seven" style={{
                padding: '100px 0',
                background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `
                        repeating-linear-gradient(90deg, transparent, transparent 99px, rgba(24, 74, 140, 0.03) 99px, rgba(24, 74, 140, 0.03) 100px),
                        repeating-linear-gradient(0deg, transparent, transparent 99px, rgba(24, 74, 140, 0.03) 99px, rgba(24, 74, 140, 0.03) 100px)
                    `,
                    pointerEvents: 'none'
                }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <p className="cap-text fade_up" style={{
                        color: '#184A8C',
                        textAlign: 'center',
                        marginBottom: '15px',
                        textTransform: 'uppercase',
                        fontWeight: '700',
                        letterSpacing: '2px',
                        fontSize: '14px'
                    }}>OUR WORKS</p>
                    <div className="section-main-text-flex" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        marginBottom: '60px'
                    }}>
                        <h2 className="sec-text pb-0 fade_up" style={{
                            fontSize: '48px',
                            fontWeight: '800',
                            color: '#1a1a1a',
                            marginBottom: '20px',
                            lineHeight: '1.2'
                        }}>Our Recent <span style={{ 
                            color: '#184A8C'
                        }}>Projects</span></h2>
                        <p className="sec-sub-text ornare fade_up" style={{
                            maxWidth: '700px',
                            margin: '0 auto',
                            fontSize: '18px',
                            lineHeight: '1.8',
                            color: '#555',
                            fontWeight: '400'
                        }}>Take a look at some of our recent cleaning projects and see the quality of work we deliver to our valued clients.</p>
                    </div>
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <ProjectGrid />
                </div>
            </section>
            {/* <!-- ====================================== Section Nine ===================================== --> */}
            <section id="testimonials" className="section-nine pt-0">
                <Testimonials />
            </section>
            <FAQ />
            <CTASection />
            <ContactForm />
        </>
    )
}

export default HomeSolid
