import React, { useState, useEffect } from 'react';

const StickyCallButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <>
            {isVisible && (
                <a
                    href="tel:+17573058237"
                    style={{
                        position: 'fixed',
                        bottom: '20px',
                        left: '20px',
                        zIndex: 9999,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '15px 25px',
                        background: 'linear-gradient(135deg, #184A8C 0%, #2667b8 100%)',
                        color: 'white',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        boxShadow: '0 8px 30px rgba(24, 74, 140, 0.4)',
                        transition: 'all 0.3s ease',
                        fontSize: '14px',
                        fontWeight: '700',
                        textAlign: 'center',
                        minWidth: '180px'
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 12px 40px rgba(24, 74, 140, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(24, 74, 140, 0.4)';
                    }}
                >
                    <span style={{
                        fontSize: '12px',
                        opacity: 0.9,
                        marginBottom: '4px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                    }}>
                        Get In Touch With Us
                    </span>
                    <span style={{
                        fontSize: '18px',
                        fontWeight: '800',
                        letterSpacing: '0.5px'
                    }}>
                        📞 (757) 305-8237
                    </span>
                </a>
            )}
        </>
    );
};

export default StickyCallButton;
