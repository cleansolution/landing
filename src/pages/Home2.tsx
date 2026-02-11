import React, { useState, useEffect } from 'react';
import '../assets/css/home2.css';
import contactData from '../data/contact.json';
import aboutData from '../data/aboutData.json';
import heroData from '../data/heroData.json';
import servicesData from '../data/servicesData.json';
import projectData from '../data/projectData.json';
import featuresData from '../data/featuresData.json';
import ctaData from '../data/ctaData.json';
import testimonialsData from '../data/testimonailData.json';

// Import images
import SliderImg2 from '../assets/images/services/slider-img2.jpg';
import AboutImg1 from '../assets/images/about/about-img1.jpg';

const Home2: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => 
            prev === testimonialsData.length - 1 ? 0 : prev + 1
        );
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => 
            prev === 0 ? testimonialsData.length - 1 : prev - 1
        );
    };

    return (
        <div className="home2-wrapper">
            {/* Transparent Header */}
            <header className={`home2-header ${scrolled ? 'scrolled' : ''}`}>
                <div className="header-container">
                    <div className="logo-section">
                        <h2>Clean Solutions</h2>
                    </div>
                    <nav className="nav-menu">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#services">Services</a>
                        <a href="#contact">Contact</a>
                    </nav>
                    <a href={`tel:${contactData.phone}`} className="cta-call">Call Us</a>
                </div>
            </header>

            {/* Hero Section - Lifestyle Image */}
            <section id="home" className="home2-hero">
                <div className="hero-image-container">
                    <img src={SliderImg2} alt="Clean Home Lifestyle" />
                    <div className="hero-overlay"></div>
                </div>
                <div className="hero-content-wrapper">
                    <div className="hero-text">
                        <h1 className="hero-title-elegant">{heroData.slides[0].title}</h1>
                        <p className="hero-subtitle-clean">{heroData.slides[0].subtitle}</p>
                        <a href="/GetQuote" className="btn-hero-primary">{ctaData.buttons.primaryCTA.text}</a>
                    </div>
                </div>
            </section>

            {/* About Section - Editorial Style */}
            <section id="about" className="home2-about-editorial">
                <div className="editorial-layout">
                    <div className="editorial-image">
                        <img src={AboutImg1} alt="About Us" />
                    </div>
                    <div className="editorial-content">
                        <span className="label-minimal">{aboutData.capText}</span>
                        <h2 className="title-editorial">{aboutData.mainTitle}</h2>
                        <p className="text-editorial">{aboutData.description}</p>
                        <div className="editorial-cta">
                            <a href="/About" className="btn-text-link">{ctaData.buttons.aboutCTA.text} →</a>
                            <div className="contact-inline">
                                <span>Need help?</span>
                                <a href={`tel:${contactData.phone}`}>{contactData.phone}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services - Hero Cards */}
            <section id="services" className="home2-services-hero">
                <div className="services-intro">
                    <span className="label-minimal">What We Offer</span>
                    <h2 className="title-editorial">Professional Cleaning Services</h2>
                </div>
                <div className="services-hero-grid">
                    {servicesData.services.slice(0, 6).map((service) => (
                        <div key={service.id} className="service-hero-card">
                            <div className="service-bg-image">
                                <img 
                                    src={require(`../assets/images/services/${service.img}`)} 
                                    alt={service.title}
                                />
                                <div className="service-gradient-overlay"></div>
                            </div>
                            <div className="service-hero-content">
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <a href={service.link} className="btn-service-link">Explore →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Benefits - Visual Strip */}
            <section className="home2-benefits-visual">
                <div className="benefits-container">
                    {featuresData.features.map((feature) => (
                        <div key={feature.id} className="benefit-block">
                            <div className="benefit-icon-large">
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10"/>
                                    <path d="M9 12l2 2 4-4"/>
                                </svg>
                            </div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* How We Work - Timeline */}
            <section className="home2-timeline">
                <div className="timeline-header">
                    <span className="label-minimal">Our Process</span>
                    <h2 className="title-editorial">How We Work</h2>
                </div>
                <div className="timeline-container">
                    <div className="timeline-step">
                        <div className="step-marker">
                            <span className="step-number-circle">1</span>
                            <div className="step-line"></div>
                        </div>
                        <div className="step-content">
                            <div className="step-icon-illustration">
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M9 11l3 3L22 4"/>
                                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                                </svg>
                            </div>
                            <h3>Pick a Plan</h3>
                            <p>Choose from our range of cleaning services that fit your needs and budget</p>
                        </div>
                    </div>
                    <div className="timeline-step">
                        <div className="step-marker">
                            <span className="step-number-circle">2</span>
                            <div className="step-line"></div>
                        </div>
                        <div className="step-content">
                            <div className="step-icon-illustration">
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                    <path d="M16 2v4M8 2v4M3 10h18"/>
                                </svg>
                            </div>
                            <h3>Set Schedule</h3>
                            <p>Book your preferred date and time that works best for your schedule</p>
                        </div>
                    </div>
                    <div className="timeline-step">
                        <div className="step-marker">
                            <span className="step-number-circle">3</span>
                        </div>
                        <div className="step-content">
                            <div className="step-icon-illustration">
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                                    <path d="M22 4L12 14.01l-3-3"/>
                                </svg>
                            </div>
                            <h3>Get Things Done</h3>
                            <p>Sit back and relax while our professional team makes your space spotless</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery - Masonry Style */}
            <section className="home2-gallery-masonry">
                <div className="gallery-header">
                    <span className="label-minimal">Recent Work</span>
                    <h2 className="title-editorial">Our Projects</h2>
                </div>
                <div className="masonry-grid">
                    {projectData.map((project, index) => (
                        <div key={project.id} className={`masonry-item item-${index % 3 === 0 ? 'tall' : 'normal'}`}>
                            <img 
                                src={require(`../assets/images/project/${project.image}`)} 
                                alt={project.title}
                            />
                            <div className="masonry-overlay">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials - Large Cards */}
            <section className="home2-testimonials-large">
                <div className="testimonials-header">
                    <span className="label-minimal">Testimonials</span>
                    <h2 className="title-editorial">What Our Clients Say</h2>
                </div>
                <div className="testimonial-large-container">
                    <button className="testimonial-arrow prev" onClick={prevTestimonial}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6"/>
                        </svg>
                    </button>
                    <div className="testimonial-card-large">
                        <div className="testimonial-photo-section">
                            <img 
                                src={require(`../assets/images/testimonials/${testimonialsData[currentTestimonial].image}`)} 
                                alt={testimonialsData[currentTestimonial].name}
                            />
                        </div>
                        <div className="testimonial-text-section">
                            <div className="stars-large">
                                {[...Array(testimonialsData[currentTestimonial].rating)].map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                            <p className="testimonial-quote">"{testimonialsData[currentTestimonial].text}"</p>
                            <div className="testimonial-author-info">
                                <h4>{testimonialsData[currentTestimonial].name}</h4>
                                <p>{testimonialsData[currentTestimonial].role}</p>
                            </div>
                        </div>
                    </div>
                    <button className="testimonial-arrow next" onClick={nextTestimonial}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6"/>
                        </svg>
                    </button>
                </div>
                <div className="testimonial-indicators">
                    {testimonialsData.map((_, index) => (
                        <button
                            key={index}
                            className={index === currentTestimonial ? 'active' : ''}
                            onClick={() => setCurrentTestimonial(index)}
                        />
                    ))}
                </div>
            </section>

            {/* Mid CTA - Visual Background */}
            <section className="home2-cta-mid">
                <div className="cta-mid-bg">
                    <img src={AboutImg1} alt="Clean Home" />
                    <div className="cta-mid-overlay"></div>
                </div>
                <div className="cta-mid-content">
                    <h2>Disfruta tu espacio, nosotros nos encargamos del resto</h2>
                    <p>Experience the peace of mind that comes with a professionally cleaned space</p>
                    <a href="/GetQuote" className="btn-cta-mid">{ctaData.buttons.primaryCTA.text}</a>
                </div>
            </section>

            {/* Final CTA - Dark Elegant */}
            <section className="home2-cta-final">
                <div className="cta-final-wrapper">
                    <h2>Ready for a Spotless Space?</h2>
                    <p>Get professional cleaning services today. Contact us for a free quote!</p>
                    <div className="cta-final-buttons">
                        <a href={`tel:${contactData.phone}`} className="btn-cta-primary">
                            Call Now: {contactData.phone}
                        </a>
                        <a href="/GetQuote" className="btn-cta-secondary">
                            {ctaData.buttons.primaryCTA.text}
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer - Minimal */}
            <footer className="home2-footer-minimal">
                <div className="footer-minimal-container">
                    <div className="footer-main-content">
                        <div className="footer-brand">
                            <h3>Clean Solutions</h3>
                            <p>{aboutData.description}</p>
                        </div>
                        <div className="footer-links-group">
                            <div className="footer-links-col">
                                <h4>Quick Links</h4>
                                <a href="/">Home</a>
                                <a href="/Services">Services</a>
                                <a href="/About">About</a>
                                <a href="/Contact">Contact</a>
                            </div>
                            <div className="footer-contact-col">
                                <h4>Contact</h4>
                                <a href={`tel:${contactData.phone}`}>{contactData.phone}</a>
                                <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
                                <p>{contactData.city}, {contactData.state}</p>
                            </div>
                            <div className="footer-hours-col">
                                <h4>Hours</h4>
                                <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                                <p>Saturday: 9:00 AM - 4:00 PM</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-minimal">
                        <p>&copy; 2026 Clean Solutions. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home2;
