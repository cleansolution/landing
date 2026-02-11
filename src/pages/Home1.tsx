import React, { useState } from 'react';
import '../assets/css/home1.css';
import contactData from '../data/contact.json';
import aboutData from '../data/aboutData.json';
import heroData from '../data/heroData.json';
import servicesData from '../data/servicesData.json';
import faqData from '../data/faqData.json';
import projectData from '../data/projectData.json';
import featuresData from '../data/featuresData.json';
import ctaData from '../data/ctaData.json';
import testimonialsData from '../data/testimonailData.json';

// Import images
import SliderImg2 from '../assets/images/services/slider-img2.jpg';
import AboutImg1 from '../assets/images/about/about-img1.jpg';
import CheckIcon from '../assets/images/svg/check-transparent.svg';
import PhoneIcon from '../assets/images/svg/headphone-icon.svg';

const Home1: React.FC = () => {
    const [activeAccordion, setActiveAccordion] = useState<string | null>('One');
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const toggleAccordion = (id: string) => {
        setActiveAccordion(activeAccordion === id ? null : id);
    };

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
        <div className="home1-wrapper">
            {/* Header */}
            <header className="home1-header">
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <h2>Clean Solutions</h2>
                        </div>
                        <nav className="main-nav">
                            <a href="#home">Home</a>
                            <a href="#services">Services</a>
                            <a href="#about">About</a>
                            <a href="#contact">Contact</a>
                        </nav>
                        <a href="/GetQuote" className="btn-primary-header">{ctaData.buttons.primaryCTA.text}</a>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section id="home" className="home1-hero">
                <div className="hero-overlay"></div>
                <div className="hero-image">
                    <img src={SliderImg2} alt="Professional Cleaning Service" />
                </div>
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">{heroData.slides[0].title}</h1>
                        <p className="hero-subtitle">{heroData.slides[0].subtitle}</p>
                        <div className="hero-phone">
                            <img src={PhoneIcon} alt="Phone" />
                            <a href={`tel:${contactData.phone}`}>{contactData.phone}</a>
                        </div>
                        <div className="hero-buttons">
                            <a href={`tel:${contactData.phone}`} className="btn-primary">Call Now</a>
                            <a href="/GetQuote" className="btn-secondary">{ctaData.buttons.primaryCTA.text}</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="home1-about">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-content">
                            <p className="section-label">{aboutData.capText}</p>
                            <h2 className="section-title">{aboutData.mainTitle}</h2>
                            <p className="section-description">{aboutData.description}</p>
                            <div className="about-cta">
                                <a href="/About" className="btn-primary">{ctaData.buttons.aboutCTA.text}</a>
                                <div className="phone-box">
                                    <img src={PhoneIcon} alt="Phone" />
                                    <div>
                                        <p>{ctaData.callToAction.needHelp}</p>
                                        <a href={`tel:${contactData.phone}`}>{contactData.phone}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-image">
                            <img src={AboutImg1} alt="About Clean Solutions" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="home1-trust">
                <div className="container">
                    <div className="trust-grid">
                        <div className="trust-card">
                            <div className="trust-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                </svg>
                            </div>
                            <h3>{aboutData.yearsExperience}+ Years</h3>
                            <p>Experience</p>
                        </div>
                        <div className="trust-card">
                            <div className="trust-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                                </svg>
                            </div>
                            <h3>Insured</h3>
                            <p>& Bonded</p>
                        </div>
                        <div className="trust-card">
                            <div className="trust-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/>
                                    <path d="M12 6v6l4 2"/>
                                </svg>
                            </div>
                            <h3>Eco-Friendly</h3>
                            <p>Products</p>
                        </div>
                        <div className="trust-card">
                            <div className="trust-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                                    <circle cx="8.5" cy="7" r="4"/>
                                    <path d="M20 8v6M23 11h-6"/>
                                </svg>
                            </div>
                            <h3>Background</h3>
                            <p>Checked</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="home1-services">
                <div className="container">
                    <div className="section-header">
                        <p className="section-label">Our Services</p>
                        <h2 className="section-title">Professional Cleaning Services</h2>
                    </div>
                    <div className="services-grid">
                        {servicesData.services.slice(0, 6).map((service) => (
                            <div key={service.id} className="service-card">
                                <div className="service-image">
                                    <img 
                                        src={require(`../assets/images/services/${service.img}`)} 
                                        alt={service.title}
                                    />
                                </div>
                                <div className="service-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                    <a href={service.link} className="btn-link">Learn More →</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="home1-why-choose">
                <div className="container">
                    <div className="why-choose-grid">
                        <div className="why-choose-content">
                            <p className="section-label">Why Choose Us</p>
                            <h2 className="section-title">What Makes Us Different</h2>
                            <ul className="benefits-list">
                                {featuresData.features.map((feature) => (
                                    <li key={feature.id}>
                                        <img src={CheckIcon} alt="Check" />
                                        <div>
                                            <strong>{feature.title}</strong>
                                            <p>{feature.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="why-choose-image">
                            <img src={SliderImg2} alt="Why Choose Us" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="home1-process">
                <div className="container">
                    <div className="section-header">
                        <p className="section-label">How It Works</p>
                        <h2 className="section-title">Simple 3-Step Process</h2>
                    </div>
                    <div className="process-grid">
                        <div className="process-step">
                            <div className="step-number">1</div>
                            <div className="step-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M9 11l3 3L22 4"/>
                                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                                </svg>
                            </div>
                            <h3>Pick a Plan</h3>
                            <p>Choose from our range of cleaning services that fit your needs and budget</p>
                        </div>
                        <div className="process-arrow">→</div>
                        <div className="process-step">
                            <div className="step-number">2</div>
                            <div className="step-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                    <path d="M16 2v4M8 2v4M3 10h18"/>
                                </svg>
                            </div>
                            <h3>Set Schedule</h3>
                            <p>Book your preferred date and time that works best for your schedule</p>
                        </div>
                        <div className="process-arrow">→</div>
                        <div className="process-step">
                            <div className="step-number">3</div>
                            <div className="step-icon">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

            {/* Projects Gallery */}
            <section className="home1-projects">
                <div className="container">
                    <div className="section-header">
                        <p className="section-label">Our Work</p>
                        <h2 className="section-title">Recent Projects</h2>
                    </div>
                    <div className="projects-grid">
                        {projectData.slice(0, 6).map((project) => (
                            <div key={project.id} className="project-card">
                                <img 
                                    src={require(`../assets/images/project/${project.image}`)} 
                                    alt={project.title}
                                />
                                <div className="project-overlay">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <a href={project.link} className="btn-link">View Details →</a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="projects-footer">
                        <a href="/Projects" className="btn-secondary">View All Projects</a>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="home1-testimonials">
                <div className="container">
                    <div className="section-header">
                        <p className="section-label">Testimonials</p>
                        <h2 className="section-title">What Our Clients Say</h2>
                    </div>
                    <div className="testimonial-carousel">
                        <button className="testimonial-nav prev" onClick={prevTestimonial}>
                            ←
                        </button>
                        <div className="testimonial-content">
                            <div className="stars">
                                {[...Array(testimonialsData[currentTestimonial].rating)].map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>
                            <p className="testimonial-text">"{testimonialsData[currentTestimonial].text}"</p>
                            <div className="testimonial-author">
                                <img 
                                    src={require(`../assets/images/testimonials/${testimonialsData[currentTestimonial].image}`)} 
                                    alt={testimonialsData[currentTestimonial].name}
                                />
                                <div>
                                    <h4>{testimonialsData[currentTestimonial].name}</h4>
                                    <p>{testimonialsData[currentTestimonial].role}</p>
                                </div>
                            </div>
                        </div>
                        <button className="testimonial-nav next" onClick={nextTestimonial}>
                            →
                        </button>
                    </div>
                    <div className="testimonial-dots">
                        {testimonialsData.map((_, index) => (
                            <button
                                key={index}
                                className={index === currentTestimonial ? 'active' : ''}
                                onClick={() => setCurrentTestimonial(index)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="home1-faq">
                <div className="container">
                    <div className="section-header">
                        <p className="section-label">FAQ</p>
                        <h2 className="section-title">Frequently Asked Questions</h2>
                    </div>
                    <div className="faq-container">
                        {faqData.map((faq) => (
                            <div key={faq.id} className={`faq-item ${activeAccordion === faq.id ? 'active' : ''}`}>
                                <button 
                                    className="faq-question"
                                    onClick={() => toggleAccordion(faq.id)}
                                >
                                    {faq.question}
                                    <span className="faq-icon">{activeAccordion === faq.id ? '−' : '+'}</span>
                                </button>
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="home1-cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready for a Spotless Space?</h2>
                        <p>Get professional cleaning services today. Contact us for a free quote!</p>
                        <div className="cta-buttons">
                            <a href={`tel:${contactData.phone}`} className="btn-primary">
                                Call Now: {contactData.phone}
                            </a>
                            <a href="/GetQuote" className="btn-secondary">
                                {ctaData.buttons.primaryCTA.text}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="home1-footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-col">
                            <h3>Clean Solutions</h3>
                            <p>{aboutData.description}</p>
                        </div>
                        <div className="footer-col">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/Services">Services</a></li>
                                <li><a href="/About">About</a></li>
                                <li><a href="/Contact">Contact</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Contact Info</h4>
                            <ul>
                                <li>
                                    <strong>Phone:</strong><br/>
                                    <a href={`tel:${contactData.phone}`}>{contactData.phone}</a>
                                </li>
                                <li>
                                    <strong>Email:</strong><br/>
                                    <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
                                </li>
                                <li>
                                    <strong>Location:</strong><br/>
                                    {contactData.city}, {contactData.state}
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Business Hours</h4>
                            <ul>
                                <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                                <li>Saturday: 9:00 AM - 4:00 PM</li>
                                <li>Sunday: Closed</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; 2026 Clean Solutions. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home1;
