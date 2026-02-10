import React from 'react';

const CTASection: React.FC = () => {
    return (
        <section style={{
            background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
            padding: '100px 0',
            marginTop: '0',
            position: 'relative',
            overflow: 'hidden',
            borderTop: '1px solid #e5e7eb',
            borderBottom: '1px solid #e5e7eb'
        }}>
            {/* Patron de fondo sutil */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.03,
                backgroundImage: 'radial-gradient(circle, #1e3a8a 1px, transparent 1px)',
                backgroundSize: '30px 30px'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row align-items-center">
                    <div className="col-lg-8 text-center text-lg-start">
                        <h2 style={{
                            fontSize: '48px',
                            fontWeight: '700',
                            color: '#1a1a1a',
                            marginBottom: '15px',
                            lineHeight: '1.2'
                        }}>
                            Ready For A Spotless Space?
                        </h2>
                        <p style={{
                            fontSize: '18px',
                            color: '#666',
                            marginBottom: '0',
                            lineHeight: '1.6'
                        }}>
                            Get your free quote today and experience the Clean Solutions difference. 
                            Our team is ready to transform your space with professional cleaning services.
                        </p>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end mt-4 mt-lg-0">
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '15px',
                            alignItems: 'center'
                        }}>
                            <a 
                                href="tel:+17573058237" 
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '18px 45px',
                                    background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
                                    color: 'white',
                                    fontSize: '18px',
                                    fontWeight: '700',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    boxShadow: '0 6px 20px rgba(30, 58, 138, 0.3)',
                                    transition: 'all 0.3s ease',
                                    border: 'none',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(30, 58, 138, 0.4)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(30, 58, 138, 0.3)';
                                }}
                            >
                                📞 Call Now
                            </a>
                            <a 
                                href="#contact"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '18px 45px',
                                    backgroundColor: 'white',
                                    color: '#1e3a8a',
                                    fontSize: '18px',
                                    fontWeight: '700',
                                    borderRadius: '8px',
                                    textDecoration: 'none',
                                    border: '2px solid #1e3a8a',
                                    transition: 'all 0.3s ease',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#1e3a8a';
                                    e.currentTarget.style.color = 'white';
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(30, 58, 138, 0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'white';
                                    e.currentTarget.style.color = '#1e3a8a';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                                }}
                            >
                                ✉️ Get A Quote
                            </a>
                        </div>
                    </div>
                </div>

                {/* Stats adicionales */}
                <div className="row mt-5 pt-5" style={{
                    borderTop: '1px solid #e5e7eb'
                }}>
                    <div className="col-md-4 text-center mb-3 mb-md-0">
                        <h3 style={{
                            fontSize: '42px',
                            fontWeight: '700',
                            color: '#1e3a8a',
                            marginBottom: '8px'
                        }}>5+</h3>
                        <p style={{
                            fontSize: '16px',
                            color: '#666',
                            margin: 0,
                            fontWeight: '500'
                        }}>Years Experience</p>
                    </div>
                    <div className="col-md-4 text-center mb-3 mb-md-0">
                        <h3 style={{
                            fontSize: '42px',
                            fontWeight: '700',
                            color: '#1e3a8a',
                            marginBottom: '8px'
                        }}>100%</h3>
                        <p style={{
                            fontSize: '16px',
                            color: '#666',
                            margin: 0,
                            fontWeight: '500'
                        }}>Satisfaction Guaranteed</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h3 style={{
                            fontSize: '42px',
                            fontWeight: '700',
                            color: '#1e3a8a',
                            marginBottom: '8px'
                        }}>⭐⭐⭐⭐⭐</h3>
                        <p style={{
                            fontSize: '16px',
                            color: '#666',
                            margin: 0,
                            fontWeight: '500'
                        }}>5-Star Reviews</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
