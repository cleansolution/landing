import React from 'react';

const CTASection: React.FC = () => {
    return (
        <section style={{
            background: 'linear-gradient(135deg, #184A8C 0%, #2667b8 100%)',
            padding: '80px 0',
            marginTop: '0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Efectos de fondo decorativos */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `
                    radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.08) 0%, transparent 40%),
                    radial-gradient(circle at 80% 70%, rgba(0, 173, 239, 0.12) 0%, transparent 50%)
                `,
                pointerEvents: 'none'
            }}></div>
            <div style={{
                position: 'absolute',
                top: '15%',
                right: '10%',
                width: '200px',
                height: '200px',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '50%',
                filter: 'blur(60px)'
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '20%',
                left: '8%',
                width: '250px',
                height: '250px',
                background: 'rgba(0, 173, 239, 0.08)',
                borderRadius: '50%',
                filter: 'blur(70px)'
            }}></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row align-items-center">
                    <div className="col-lg-8 text-center text-lg-start mb-4 mb-lg-0">
                        <h2 style={{
                            fontSize: 'clamp(36px, 5vw, 52px)',
                            fontWeight: '800',
                            color: 'white',
                            marginBottom: '20px',
                            lineHeight: '1.2',
                            textShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
                        }}>
                            Ready For A <span style={{
                                color: '#00adef',
                                textShadow: '0 4px 20px rgba(0, 173, 239, 0.4)'
                            }}>Spotless</span> Space?
                        </h2>
                        <p style={{
                            fontSize: '19px',
                            color: 'rgba(255, 255, 255, 0.95)',
                            marginBottom: '0',
                            lineHeight: '1.7',
                            fontWeight: '500',
                            textShadow: '0 2px 10px rgba(0, 0, 0, 0.15)',
                            maxWidth: '600px',
                            margin: '0 auto 0 0'
                        }}>
                            Get your free quote today and experience the Clean Solutions difference. 
                            Our team is ready to transform your space with professional cleaning services.
                        </p>
                    </div>
                    <div className="col-lg-4 text-center text-lg-end">
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
                                    justifyContent: 'center',
                                    gap: '12px',
                                    padding: '20px 50px',
                                    background: 'white',
                                    color: '#184A8C',
                                    fontSize: '18px',
                                    fontWeight: '800',
                                    borderRadius: '12px',
                                    textDecoration: 'none',
                                    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
                                    transition: 'all 0.3s ease',
                                    border: 'none',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    width: '100%',
                                    maxWidth: '280px'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = '0 12px 35px rgba(0, 0, 0, 0.3)';
                                    e.currentTarget.style.background = '#00adef';
                                    e.currentTarget.style.color = 'white';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
                                    e.currentTarget.style.background = 'white';
                                    e.currentTarget.style.color = '#184A8C';
                                }}
                            >
                                📞 Call Now
                            </a>
                            <a 
                                href="#contact"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '12px',
                                    padding: '20px 50px',
                                    background: 'rgba(255, 255, 255, 0.12)',
                                    backdropFilter: 'blur(10px)',
                                    color: 'white',
                                    fontSize: '18px',
                                    fontWeight: '700',
                                    borderRadius: '12px',
                                    textDecoration: 'none',
                                    border: '2px solid rgba(255, 255, 255, 0.3)',
                                    transition: 'all 0.3s ease',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
                                    width: '100%',
                                    maxWidth: '280px'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                                    e.currentTarget.style.transform = 'translateY(-4px)';
                                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.2)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
                                }}
                            >
                                ✉️ Get A Quote
                            </a>
                        </div>
                    </div>
                </div>

                {/* Stats con diseño moderno */}
                <div className="row mt-5 pt-5" style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.15)'
                }}>
                    <div className="col-md-4 text-center mb-4 mb-md-0">
                        <div style={{
                            padding: '25px 20px',
                            background: 'rgba(255, 255, 255, 0.08)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '16px',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}>
                            <h3 style={{
                                fontSize: '52px',
                                fontWeight: '900',
                                color: '#00adef',
                                marginBottom: '10px',
                                textShadow: '0 3px 15px rgba(0, 173, 239, 0.4)',
                                lineHeight: '1'
                            }}>5+</h3>
                            <p style={{
                                fontSize: '17px',
                                color: 'white',
                                margin: 0,
                                fontWeight: '600',
                                textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
                            }}>Years Experience</p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center mb-4 mb-md-0">
                        <div style={{
                            padding: '25px 20px',
                            background: 'rgba(255, 255, 255, 0.08)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '16px',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}>
                            <h3 style={{
                                fontSize: '52px',
                                fontWeight: '900',
                                color: '#00adef',
                                marginBottom: '10px',
                                textShadow: '0 3px 15px rgba(0, 173, 239, 0.4)',
                                lineHeight: '1'
                            }}>100%</h3>
                            <p style={{
                                fontSize: '17px',
                                color: 'white',
                                margin: 0,
                                fontWeight: '600',
                                textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
                            }}>Satisfaction Guaranteed</p>
                        </div>
                    </div>
                    <div className="col-md-4 text-center">
                        <div style={{
                            padding: '25px 20px',
                            background: 'rgba(255, 255, 255, 0.08)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '16px',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}>
                            <div style={{
                                fontSize: '36px',
                                marginBottom: '10px',
                                filter: 'drop-shadow(0 3px 10px rgba(255, 193, 7, 0.4))'
                            }}>⭐⭐⭐⭐⭐</div>
                            <p style={{
                                fontSize: '17px',
                                color: 'white',
                                margin: 0,
                                fontWeight: '600',
                                textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
                            }}>5-Star Reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
