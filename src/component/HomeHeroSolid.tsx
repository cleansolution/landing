import React from 'react'
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import Video1 from '../assets/video/CleanSolutions.mp4';

const HomeHeroSolid: React.FC = () => {
    return (
        <>
            <style>{`
                .video-slide video {
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                    background: #000;
                }
            `}</style>
            <div className="hero-slider">
                <div className="swiper-slide main-swiper-video-bg video-slide">
                    <video autoPlay muted loop playsInline preload="auto" style={{ backgroundColor: '#000' }}>
                        <source src={Video1} type="video/mp4" />
                    </video>
                    <div className="slide-content">
                        <div className="container">
                            <div className="row main-swiper-row">
                                <div className="col-xxl-7 col-xl-7 col-lg-10 clearfix-space" style={{ opacity: 1, transform: 'none' }}>
                                    <div style={{
                                        width: '60px',
                                        height: '3px',
                                        backgroundColor: '#00adef',
                                        marginBottom: '20px'
                                    }}></div>
                                    <h1 className="lets-us-do" style={{ 
                                        color: 'white',
                                        fontSize: '68px',
                                        lineHeight: '1.15',
                                        marginBottom: '20px'
                                    }}>
                                        Clean Spaces<br/>Happy Faces
                                    </h1>
                                    <p style={{
                                        fontSize: '22px',
                                        fontWeight: '700',
                                        color: '#00adef',
                                        letterSpacing: '3px',
                                        textTransform: 'uppercase',
                                        marginBottom: '15px'
                                    }}>
                                        RESIDENTIAL & COMMERCIAL
                                    </p>
                                    <div style={{
                                        width: '60px',
                                        height: '3px',
                                        backgroundColor: '#00adef',
                                        marginBottom: '30px'
                                    }}></div>
                                    <p style={{
                                        fontSize: '18px',
                                        fontWeight: '600',
                                        color: 'rgba(255,255,255,0.85)',
                                        marginBottom: '8px'
                                    }}>
                                        Got An Emergency?
                                    </p>
                                    <a href="tel:+17573058237" style={{
                                        fontSize: '38px',
                                        fontWeight: '700',
                                        color: '#00adef',
                                        textDecoration: 'none',
                                        display: 'inline-block',
                                        marginBottom: '30px'
                                    }}>
                                        (757) 305-8237
                                    </a>
                                    <br/>
                                    <a href="#services" className="btn-quote our-services-btn">Our Services
                                        <img src={CrossArrow} alt="cross-arrow" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeHeroSolid