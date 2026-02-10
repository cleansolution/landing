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
            backgroundColor: '#f8f9fa',
            padding: '60px 0',
            borderTop: '1px solid #e5e7eb',
            borderBottom: '1px solid #e5e7eb'
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
                                backgroundColor: 'white',
                                borderRadius: '12px',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                                transition: 'all 0.3s ease',
                                cursor: 'default'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 8px 20px rgba(30, 58, 138, 0.12)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
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
                                color: '#1a1a1a',
                                marginBottom: '5px',
                                lineHeight: '1.2'
                            }}>
                                {badge.title}
                            </h3>
                            <p style={{
                                fontSize: '16px',
                                color: '#666',
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
