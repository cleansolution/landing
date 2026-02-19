import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FormularioBg from "../assets/images/about/formulario.jpg";
import { submitContactMessage } from "../services/api";

const ContactForm: React.FC = () => {
    const location = useLocation();

    const [cleanType, setCleanType] = useState<string>("Standard Cleaning");
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
        "Standard Cleaning",
        "Commercial Cleaning",
        "Post Construction Cleaning",
        "Deep Cleaning",
        "Move Out/In",
        "Airbnb Cleaning",
        "Office Cleaning",
        "Windows Cleaning"
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            await submitContactMessage({
                fullName: formData.fullName.trim(),
                email: formData.email.trim(),
                phone: formData.phone.trim(),
                service: cleanType,
                message: formData.message.trim(),
                source: 'contact-section'
            });

            // Resetear formulario
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                message: ''
            });
            setCleanType('Standard Cleaning');
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
                <section id="contact" className="contact-form-section" style={{
                    backgroundColor: '#f8f9fa',
                    backgroundImage: `url(${FormularioBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    padding: '80px 0'
                }}>
                    <div className="container">
                        <div className="row" style={{ gap: '40px', justifyContent: 'center' }}>

                            <div className="col-xxl-5 col-xl-5 col-lg-5" style={{ 
                                maxWidth: '500px'
                            }}>
                                <div style={{
                                    backgroundColor: 'white',
                                    borderRadius: '24px',
                                    padding: '50px 40px',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
                                }}>
                                    <h2 style={{
                                        color: '#184A8C',
                                        fontSize: 'clamp(24px, 4vw, 32px)',
                                        fontWeight: '700',
                                        marginBottom: '30px'
                                    }}>Get In Touch</h2>
                                    <p style={{
                                        color: '#6b7280',
                                        fontSize: '15px',
                                        lineHeight: '1.6',
                                        marginBottom: '30px'
                                    }}>
                                        We take great pride in everything that we do, control over products allows us to ensure customers receive the best quality service and highest standards, you need a dedicated team of specialists.
                                    </p>
                                    {submitStatus === 'success' && (
                                        <div style={{
                                            padding: '15px',
                                            background: 'linear-gradient(135deg, #184A8C 0%, #2667b8 100%)',
                                            color: 'white',
                                            borderRadius: '12px',
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
                                            borderRadius: '12px',
                                            marginBottom: '20px',
                                            textAlign: 'center',
                                            fontWeight: '600'
                                        }}>
                                            ✗ Error sending message. Please try again.
                                        </div>
                                    )}
                                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                            <div style={{ gridColumn: 'span 1' }}>
                                                <input 
                                                    type="text" 
                                                    placeholder="Name" 
                                                    autoComplete="off"
                                                    value={formData.fullName}
                                                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                                                    required
                                                    style={{
                                                        width: '100%',
                                                        padding: '14px 18px',
                                                        backgroundColor: '#e8eaf6',
                                                        border: 'none',
                                                        borderRadius: '8px',
                                                        fontSize: '15px',
                                                        color: '#6b7280',
                                                        outline: 'none'
                                                    }}
                                                />
                                            </div>

                                            <div style={{ gridColumn: 'span 1' }}>
                                                <input 
                                                    type="email" 
                                                    placeholder="Email" 
                                                    autoComplete="off"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                    required
                                                    style={{
                                                        width: '100%',
                                                        padding: '14px 18px',
                                                        backgroundColor: '#e8eaf6',
                                                        border: 'none',
                                                        borderRadius: '8px',
                                                        fontSize: '15px',
                                                        color: '#6b7280',
                                                        outline: 'none'
                                                    }}
                                                />
                                            </div>

                                            <div style={{ gridColumn: 'span 1' }}>
                                                <input 
                                                    type="text" 
                                                    placeholder="Phone" 
                                                    autoComplete="off"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                                    required
                                                    style={{
                                                        width: '100%',
                                                        padding: '14px 18px',
                                                        backgroundColor: '#e8eaf6',
                                                        border: 'none',
                                                        borderRadius: '8px',
                                                        fontSize: '15px',
                                                        color: '#6b7280',
                                                        outline: 'none'
                                                    }}
                                                />
                                            </div>

                                        <div style={{ gridColumn: 'span 1' }}>
                                            <select
                                                value={cleanType}
                                                onChange={(e) => setCleanType(e.target.value)}
                                                style={{
                                                    width: '100%',
                                                    padding: '14px 18px',
                                                    backgroundColor: '#e8eaf6',
                                                    border: 'none',
                                                    borderRadius: '8px',
                                                    fontSize: '15px',
                                                    color: '#6b7280',
                                                    outline: 'none',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                {cleanTypeOptions.map((item, index) => (
                                                    <option key={index} value={item}>{item}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div style={{ gridColumn: 'span 2' }}>
                                        <textarea 
                                            placeholder="Additional Details" 
                                            autoComplete="off"
                                            value={formData.message}
                                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                                            rows={4}
                                            style={{
                                                width: '100%',
                                                padding: '14px 18px',
                                                backgroundColor: '#e8eaf6',
                                                border: 'none',
                                                borderRadius: '8px',
                                                fontSize: '15px',
                                                color: '#6b7280',
                                                outline: 'none',
                                                resize: 'vertical',
                                                fontFamily: 'inherit'
                                            }}
                                        />
                                    </div>

                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        style={{
                                            width: '100%',
                                            padding: '16px',
                                            background: 'linear-gradient(135deg, #184A8C 0%, #2667b8 100%)',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '8px',
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                            opacity: isSubmitting ? 0.7 : 1,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '10px',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isSubmitting) e.currentTarget.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Submit Request'}
                                        {!isSubmitting && (
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        )}
                                    </button>
                                    </form>
                                </div>
                            </div>

                            <div className="col-xxl-5 col-xl-5 col-lg-5" style={{ 
                                maxWidth: '500px'
                            }}>
                                <div style={{
                                    background: 'linear-gradient(135deg, #184A8C 0%, #2667b8 100%)',
                                    borderRadius: '24px',
                                    padding: '45px 40px',
                                    color: 'white',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    minHeight: '500px',
                                    boxShadow: '0 10px 40px rgba(24, 74, 140, 0.3)'
                                }}>
                                    <div>
                                        <p style={{
                                            fontSize: '13px',
                                            letterSpacing: '1.5px',
                                            textTransform: 'uppercase',
                                            marginBottom: '15px',
                                            fontWeight: '600',
                                            opacity: '0.9'
                                        }}>contact Clean Solutions CO. LLC</p>
                                        
                                        <h3 style={{
                                            fontSize: 'clamp(28px, 4vw, 36px)',
                                            fontWeight: '800',
                                            marginBottom: '20px',
                                            lineHeight: '1.2'
                                        }}>Get In Touch With Us</h3>
                                        
                                        <p style={{
                                            fontSize: '15px',
                                            lineHeight: '1.7',
                                            opacity: '0.95',
                                            marginBottom: '35px'
                                        }}>
                                            Professional cleaning services for residential and commercial properties. Contact us for a free quote and experience spotless results.
                                        </p>
                                    </div>

                                    <div style={{
                                        marginBottom: '25px',
                                        padding: '18px',
                                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        borderRadius: '12px',
                                        border: '1px solid rgba(255, 255, 255, 0.2)'
                                    }}>
                                        <p style={{
                                            fontSize: '12px',
                                            letterSpacing: '1.2px',
                                            textTransform: 'uppercase',
                                            marginBottom: '12px',
                                            fontWeight: '700',
                                            opacity: '0.9'
                                        }}>Why Clients Choose Us</p>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                            {[
                                                'Licensed & Insured Team',
                                                'Fast Response and Scheduling',
                                                'Detail-Oriented Cleaning'
                                            ].map((item, index) => (
                                                <div key={index} style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '10px',
                                                    fontSize: '14px',
                                                    fontWeight: '500',
                                                    opacity: '0.95'
                                                }}>
                                                    <span style={{
                                                        width: '20px',
                                                        height: '20px',
                                                        borderRadius: '50%',
                                                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: '12px',
                                                        fontWeight: '700'
                                                    }}>✓</span>
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                        <div style={{ 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            gap: '15px',
                                            padding: '20px',
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            borderRadius: '12px',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(255, 255, 255, 0.2)'
                                        }}>
                                            <div style={{
                                                width: '45px',
                                                height: '45px',
                                                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: '0'
                                            }}>
                                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="white"/>
                                                </svg>
                                            </div>
                                            <div>
                                                <p style={{ fontSize: '13px', opacity: '0.85', marginBottom: '3px' }}>Phone Number</p>
                                                <a href="tel:+17573058237" style={{ 
                                                    fontSize: '18px', 
                                                    fontWeight: '700',
                                                    color: 'white',
                                                    textDecoration: 'none'
                                                }}>(757) 305-8237</a>
                                            </div>
                                        </div>

                                        <div style={{ 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            gap: '15px',
                                            padding: '20px',
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                            borderRadius: '12px',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(255, 255, 255, 0.2)'
                                        }}>
                                            <div style={{
                                                width: '45px',
                                                height: '45px',
                                                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                flexShrink: '0'
                                            }}>
                                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                                                    <path d="M22 6l-10 7L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                            </div>
                                            <div>
                                                <p style={{ fontSize: '13px', opacity: '0.85', marginBottom: '3px' }}>Our Mail Address</p>
                                                <a href="mailto:info@cleansolutionsva.com" style={{ 
                                                    fontSize: '16px', 
                                                    fontWeight: '600',
                                                    color: 'white',
                                                    textDecoration: 'none',
                                                    wordBreak: 'break-word'
                                                }}>info@cleansolutionsva.com</a>
                                            </div>
                                        </div>
                                    </div>
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
