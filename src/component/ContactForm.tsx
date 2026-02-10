import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import DropdownArrow from "../assets/images/svg/dropdown-arrow.svg";
import CrossArrow from "../assets/images/svg/cross-arrow.svg";

const ContactForm: React.FC = () => {
    const location = useLocation();

    const [cleanType, setCleanType] = useState<string>("Full Cleaning");
    const [openDropdown, setOpenDropdown] = useState<"clean" | null>(null);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const dropdownRef1 = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef1.current && !dropdownRef1.current.contains(e.target as Node)) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const cleanTypeOptions: string[] = [
        "Full Cleaning",
        "House Cleaning",
        "Kitchen Cleaning",
        "Office Cleaning",
        "Window Cleaning",
        "Corporate Cleaning",
        "Carpet Cleaning",
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Crear el mensaje para email
            const subject = `New Contact: ${formData.fullName} - ${cleanType}`;
            const body = `Name: ${formData.fullName}%0A` +
                `Email: ${formData.email}%0A` +
                `Phone: ${formData.phone}%0A` +
                `Cleaning Area: ${cleanType}%0A` +
                `Message: ${formData.message}`;

            // Abrir email con el mensaje
            window.open(`mailto:Lolitamontalvo.91@gmail.com?subject=${subject}&body=${body}`, '_blank');

            // Resetear formulario
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                message: ''
            });
            setCleanType('Full Cleaning');
            setSubmitStatus('success');

            // Limpiar mensaje de éxito después de 3 segundos
            setTimeout(() => {
                setSubmitStatus('idle');
            }, 3000);
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {location.pathname !== "/GetQuote" && (
                <section id="contact" className="contact-form-section">
                    <div className="container">
                        <div className="row form-sec-row">

                            <div className="col-xxl-6 col-xl-6 col-lg-5">
                                <p className="cap-text fade_up">contact Clean Solutions CO. LLC</p>
                                <h2 className="sec-text get-toch fade_up">Get In Touch With Us</h2>
                                <p className="sec-sub-text fade_up">
                                    Professional cleaning services for residential and commercial properties. Contact us for a free quote and experience spotless results.
                                </p>

                                <p className="call-support-text">Call Support Center 24/7</p>
                                <a href="tel:+17573058237" className="tel-num">+1 (757) 305 8237</a>

                                <div className="adres-main-home fade_up">
                                    <div>
                                        <p className="call-support-text">Our Mail Address</p>
                                        <a href="mailto:Lolitamontalvo.91@gmail.com" className="tel-num addees">
                                            Lolitamontalvo.91@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-6 col-xl-6 col-lg-7">
                                <div className="contac-form-main zoom_in">
                                    {submitStatus === 'success' && (
                                        <div style={{
                                            padding: '15px',
                                            backgroundColor: '#10b981',
                                            color: 'white',
                                            borderRadius: '8px',
                                            marginBottom: '20px',
                                            textAlign: 'center',
                                            fontWeight: '600'
                                        }}>
                                            ✓ Message sent successfully! We'll contact you soon.
                                        </div>
                                    )}
                                    {submitStatus === 'error' && (
                                        <div style={{
                                            padding: '15px',
                                            backgroundColor: '#ef4444',
                                            color: 'white',
                                            borderRadius: '8px',
                                            marginBottom: '20px',
                                            textAlign: 'center',
                                            fontWeight: '600'
                                        }}>
                                            ✗ Error sending message. Please try again.
                                        </div>
                                    )}
                                    <form onSubmit={handleSubmit}>
                                        <div className="calcult-from-grid contac-form">
                                            <div>
                                                <h3 className="input-label-text">Full Name*</h3>
                                                <input 
                                                    type="text" 
                                                    placeholder="Enter your full name" 
                                                    autoComplete="off"
                                                    value={formData.fullName}
                                                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <h3 className="input-label-text">email address*</h3>
                                                <input 
                                                    type="email" 
                                                    placeholder="Enter your email" 
                                                    autoComplete="off"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <h3 className="input-label-text">phone number*</h3>
                                                <input 
                                                    type="text" 
                                                    placeholder="Enter phone number" 
                                                    autoComplete="off"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                                    required
                                                />
                                            </div>

                                        <div>
                                            <h3 className="input-label-text">choose cleaning area*</h3>

                                            <div className="input-main" ref={dropdownRef1}>
                                                <div className="wrapper">
                                                    <div
                                                        className="formDropDown"
                                                        onClick={() =>
                                                            setOpenDropdown(openDropdown === "clean" ? null : "clean")
                                                        }
                                                    >
                                                        {cleanType}
                                                        <img
                                                            className={`arrow-icon-form ${openDropdown === "clean" ? "up" : ""}`}
                                                            src={DropdownArrow}
                                                            alt="arrow"
                                                        />
                                                    </div>

                                                    {openDropdown === "clean" && (
                                                        <div className="position-relative">
                                                            <ul className="formDropDown-ul-list">
                                                                {cleanTypeOptions.map((item, index) => (
                                                                    <li
                                                                        key={index}
                                                                        onClick={() => {
                                                                            setCleanType(item);
                                                                            setOpenDropdown(null);
                                                                        }}
                                                                    >
                                                                        <span>{item}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="your-message-input">
                                        <h3 className="input-label-text">your message</h3>
                                        <input 
                                            type="text" 
                                            placeholder="Write here" 
                                            autoComplete="off"
                                            value={formData.message}
                                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        />
                                    </div>

                                    <div className="get-cost-estimate send-main-btn">
                                        <button 
                                            type="submit" 
                                            className="btn-quote"
                                            disabled={isSubmitting}
                                            style={{
                                                opacity: isSubmitting ? 0.7 : 1,
                                                cursor: isSubmitting ? 'not-allowed' : 'pointer'
                                            }}
                                        >
                                            {isSubmitting ? 'Sending...' : 'Send Us Your Mail'}
                                            <img src={CrossArrow} alt="cross-arrow" />
                                        </button>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {location.pathname === "/Contact" && (
                            <iframe
                                className="map-iframe"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.4846987988707!2d-76.2408!3d36.7682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89bae9694ee93ccf%3A0x7b65f4f5b7db7b1a!2s4535%20Bainbridge%20Blvd%2C%20Chesapeake%2C%20VA%2023320!5e0!3m2!1sen!2sus!4v1704092010021!5m2!1sen!2sus"
                                allowFullScreen
                                loading="lazy"
                                title="address"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        )}
                    </div>
                </section>
            )}
        </>
    );
};

export default ContactForm;
