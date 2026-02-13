import React from 'react'
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import Video1 from '../assets/video/CleanSolutions.mp4';

const HomeHeroSolid: React.FC = () => {
    return (
        <>
            <style>{`
                .main-swiper-video-bg {
                    position: relative;
                    width: 100%;
                    height: 100vh;
                    min-height: 550px;
                    overflow: hidden;
                }
                
                .main-swiper-video-bg::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(
                        135deg,
                        rgba(0, 0, 0, 0.75) 0%,
                        rgba(0, 0, 0, 0.5) 50%,
                        rgba(0, 0, 0, 0.6) 100%
                    );
                    z-index: 1;
                    pointer-events: none;
                }
                
                .main-swiper-video-bg .slide-content {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                    z-index: 2;
                    padding: 0 15px;
                }
                
                .video-slide video {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    min-width: 100%;
                    min-height: 100%;
                    width: auto;
                    height: auto;
                    transform: translateX(-50%) translateY(-50%);
                    object-fit: cover;
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                    background: #000;
                    z-index: 0;
                }
                
                .hero-location-text {
                    font-size: clamp(13px, 3vw, 17px);
                    font-weight: 600;
                    color: rgba(255,255,255,0.95);
                    letter-spacing: 1.5px;
                    text-shadow: 0 2px 8px rgba(0,0,0,0.5);
                    text-transform: uppercase;
                    display: inline-block;
                    background: rgba(24, 74, 140, 0.6);
                    padding: 5px 15px;
                    border-radius: 30px;
                    backdrop-filter: blur(5px);
                    border: 1px solid rgba(255,255,255,0.1);
                }
                
                .hero-main-title {
                    color: white;
                    font-size: clamp(32px, 8vw, 68px);
                    line-height: 1.1;
                    font-weight: 800;
                    text-shadow: 0 3px 15px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.8);
                    letter-spacing: -0.5px;
                }
                
                .hero-subtitle {
                    font-size: clamp(16px, 4vw, 26px);
                    font-weight: 700;
                    color: #00adef;
                    letter-spacing: 1.2px;
                    text-shadow: 0 2px 10px rgba(0,0,0,0.8);
                    text-transform: uppercase;
                }
                
                .hero-description {
                    font-size: clamp(14px, 3.5vw, 18px);
                    font-weight: 400;
                    color: rgba(255,255,255,0.95);
                    letter-spacing: 0.3px;
                    line-height: 1.6;
                    text-shadow: 0 2px 8px rgba(0,0,0,0.6);
                }
                
                .hero-quote-title {
                    font-size: clamp(22px, 5vw, 30px);
                    font-weight: 700;
                    color: white;
                    text-shadow: 0 2px 8px rgba(0,0,0,0.6);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                
                .hero-phone-container {
                    font-size: clamp(18px, 4.5vw, 24px);
                    font-weight: 600;
                    color: rgba(255,255,255,0.95);
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    flex-wrap: wrap;
                    text-shadow: 0 2px 6px rgba(0,0,0,0.5);
                }
                
                .hero-phone-link {
                    color: #00adef;
                    text-decoration: none;
                    font-weight: 800;
                    font-size: clamp(22px, 3vw, 28px);
                    text-shadow: 0 2px 10px rgba(0,0,0,0.8);
                    transition: color 0.3s ease;
                }
                
                .hero-phone-link:hover {
                    color: #0099d6;
                }
                
                .hero-tagline {
                    font-size: clamp(14px, 1.9vw, 16px);
                    font-weight: 400;
                    color: rgba(255,255,255,0.9);
                    font-style: italic;
                    text-shadow: 0 2px 6px rgba(0,0,0,0.5);
                }
                
                .hero-divider {
                    width: clamp(45px, 9vw, 70px);
                    height: 4px;
                    background: linear-gradient(90deg, #00adef 0%, #0099d6 100%);
                    box-shadow: 0 2px 10px rgba(0, 173, 239, 0.4);
                }
                
                @media (max-width: 991px) {
                    .main-swiper-video-bg {
                        height: auto !important;
                        min-height: 100vh;
                    }
                    
                    .main-swiper-video-bg .slide-content {
                        position: relative !important;
                        top: auto !important;
                        left: auto !important;
                        transform: none !important;
                        padding: 110px 20px 50px !important;
                    }
                    
                    .main-swiper-video-bg .clearfix-space {
                        text-align: center !important;
                        display: flex !important;
                        flex-direction: column !important;
                        align-items: center !important;
                    }
                    
                    .hero-phone-container {
                        flex-direction: column;
                        align-items: center !important;
                        gap: 4px;
                    }
                    
                    .hero-description {
                        max-width: 400px !important;
                        margin-left: auto;
                        margin-right: auto;
                    }
                    
                    .main-swiper-video-bg::before {
                        background: linear-gradient(
                            180deg,
                            rgba(0, 0, 0, 0.8) 0%,
                            rgba(0, 0, 0, 0.55) 40%,
                            rgba(0, 0, 0, 0.7) 100%
                        );
                    }
                    
                    .clearfix-space {
                        margin-top: 0 !important;
                    }
                }
                
                @media (max-width: 576px) {
                    .main-swiper-video-bg .slide-content {
                        padding: 100px 18px 40px !important;
                    }
                    
                    .hero-main-title {
                        font-size: clamp(26px, 8.5vw, 38px) !important;
                        line-height: 1.15 !important;
                    }
                    
                    .hero-subtitle {
                        font-size: clamp(13px, 3.8vw, 17px) !important;
                        letter-spacing: 1px !important;
                    }
                    
                    .hero-location-text {
                        font-size: clamp(11px, 2.8vw, 14px) !important;
                        padding: 4px 12px !important;
                        letter-spacing: 1px !important;
                    }
                    
                    .hero-description {
                        font-size: clamp(13px, 3.5vw, 15px) !important;
                        max-width: 320px !important;
                    }
                    
                    .hero-quote-title {
                        font-size: clamp(19px, 5vw, 24px) !important;
                    }
                    
                    .hero-phone-link {
                        font-size: clamp(20px, 6vw, 26px) !important;
                    }
                    
                    .hero-tagline {
                        font-size: clamp(12px, 3.2vw, 14px) !important;
                    }
                    
                    .hero-divider {
                        width: clamp(35px, 12vw, 55px) !important;
                        height: 3px !important;
                    }
                    
                    .our-services-btn {
                        font-size: 14px !important;
                        padding: 12px 28px !important;
                    }
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
                                    <div className="hero-divider" style={{ marginBottom: 'clamp(12px, 2vh, 18px)' }}></div>
                                    
                                    <p className="hero-location-text" style={{ marginBottom: 'clamp(12px, 2vh, 18px)' }}>
                                        Virginia Beach and surrounding areas
                                    </p>
                                    
                                    <h1 className="hero-main-title" style={{ marginBottom: '4px' }}>
                                        We Don't Just Clean.
                                    </h1>
                                    <h1 className="hero-main-title" style={{ marginBottom: 'clamp(16px, 2.5vh, 24px)' }}>
                                        We Elevate Your Space.
                                    </h1>
                                    
                                    <p className="hero-subtitle" style={{ marginBottom: 'clamp(8px, 1.5vh, 12px)' }}>
                                        Residential & Commercial Cleaning
                                    </p>
                                    
                                    <p className="hero-description" style={{ 
                                        marginBottom: 'clamp(20px, 3vh, 28px)',
                                        maxWidth: '600px'
                                    }}>
                                        We focus on the details — because details make the difference.
                                    </p>
                                    
                                    <div className="hero-divider" style={{ marginBottom: 'clamp(14px, 2.5vh, 20px)' }}></div>
                                    
                                    <p className="hero-quote-title" style={{ marginBottom: 'clamp(8px, 1.5vh, 12px)' }}>
                                        Get a free quote
                                    </p>
                                    
                                    <div className="hero-phone-container" style={{ marginBottom: 'clamp(6px, 1vh, 10px)' }}>
                                        <span>Call Now:</span> 
                                        <a href="tel:+17573058237" className="hero-phone-link">(757) 305 8237</a>
                                    </div>
                                    
                                    <p className="hero-tagline" style={{ marginBottom: 'clamp(20px, 3vh, 30px)' }}>
                                        Fast response. Real people. Real results.
                                    </p>
                                    
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