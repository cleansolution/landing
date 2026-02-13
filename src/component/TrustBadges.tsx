import React from 'react';

const TrustBadges: React.FC = () => {
    const badges = [
        {
            icon: "🏆",
            title: "5+ Years",
            subtitle: "Experience"
        },
        {
            icon: "🛡️",
            title: "Insured",
            subtitle: "& Bonded"
        },
        {
            icon: "🌿",
            title: "Eco-Friendly",
            subtitle: "Products"
        },
        {
            icon: "✓",
            title: "Background",
            subtitle: "Checked Team"
        }
    ];

    return (
        <section style={{
            backgroundColor: '#184A8C',
            padding: '60px 0',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '40px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {badges.map((badge, index) => (
                        <div
                            key={index}
                            style={{
                                textAlign: 'center',
                                padding: '30px 20px',
                                background: 'rgba(255, 255, 255, 0.1)',
                                backdropFilter: 'blur(10px)',
                                WebkitBackdropFilter: 'blur(10px)',
                                borderRadius: '16px',
                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
                                transition: 'all 0.3s ease',
                                cursor: 'default'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                                e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(0, 0, 0, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                                e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.2)';
                            }}
                        >
                            <div style={{
                                fontSize: '48px',
                                marginBottom: '15px',
                                filter: 'grayscale(0)',
                                transition: 'transform 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                            }}
                            >
                                {badge.icon}
                            </div>
                            <h3 style={{
                                fontSize: '24px',
                                fontWeight: '700',
                                color: '#ffffff',
                                marginBottom: '5px',
                                lineHeight: '1.2',
                                textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
                            }}>
                                {badge.title}
                            </h3>
                            <p style={{
                                fontSize: '16px',
                                color: 'rgba(255, 255, 255, 0.9)',
                                margin: 0,
                                fontWeight: '500'
                            }}>
                                {badge.subtitle}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBadges;
