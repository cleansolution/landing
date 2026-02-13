import React, { useState } from 'react';
import faqData from '../data/faqData.json';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

const FAQ: React.FC = () => {
    const [openId, setOpenId] = useState<string | null>(null);

    const toggleAccordion = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section id="faq" className="faq-section" style={{ 
            padding: '60px 0', 
            background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `
                    repeating-linear-gradient(90deg, transparent, transparent 99px, rgba(24, 74, 140, 0.03) 99px, rgba(24, 74, 140, 0.03) 100px),
                    repeating-linear-gradient(0deg, transparent, transparent 99px, rgba(24, 74, 140, 0.03) 99px, rgba(24, 74, 140, 0.03) 100px)
                `,
                pointerEvents: 'none'
            }}></div>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <p className="cap-text fade_up" style={{ 
                    textAlign: 'center', 
                    fontSize: '13px', 
                    color: '#00adef', 
                    fontWeight: '700', 
                    textTransform: 'uppercase', 
                    letterSpacing: '2px',
                    marginBottom: '10px'
                }}>FAQ</p>
                <h2 className="sec-text fade_up" style={{ 
                    textAlign: 'center', 
                    marginBottom: '15px', 
                    fontSize: 'clamp(32px, 5vw, 48px)', 
                    fontWeight: '800', 
                    color: '#1a1a1a',
                    lineHeight: '1.2'
                }}>
                    Frequently Asked <span style={{ 
                        color: '#184A8C'
                    }}>Questions</span>
                </h2>
                <p className="fade_up" style={{
                    textAlign: 'center',
                    maxWidth: '700px',
                    margin: '0 auto 40px',
                    fontSize: 'clamp(15px, 3vw, 18px)',
                    lineHeight: '1.7',
                    color: '#555',
                    fontWeight: '500',
                    padding: '0 15px'
                }}>Find answers to common questions about our cleaning services, pricing, and scheduling.</p>
                <div style={{ 
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '20px',
                    maxWidth: '1300px',
                    margin: '0 auto'
                }}>
                    {faqData.map((item: FAQItem) => (
                        <div 
                            key={item.id}
                            style={{
                                background: 'linear-gradient(135deg, #184A8C 0%, #2667b8 100%)',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                border: '1px solid rgba(24, 74, 140, 0.2)',
                                boxShadow: '0 6px 25px rgba(24, 74, 140, 0.15)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 10px 35px rgba(24, 74, 140, 0.25)';
                                e.currentTarget.style.transform = 'translateY(-4px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0 6px 25px rgba(24, 74, 140, 0.15)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <button
                                onClick={() => toggleAccordion(item.id)}
                                style={{
                                    width: '100%',
                                    padding: '20px 22px',
                                    backgroundColor: openId === item.id ? 'rgba(0, 173, 239, 0.15)' : 'transparent',
                                    border: 'none',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    fontSize: '16px',
                                    fontWeight: '700',
                                    color: 'white',
                                    transition: 'all 0.3s ease',
                                    gap: '15px'
                                }}
                            >
                                <span style={{
                                    flex: 1,
                                    lineHeight: '1.4',
                                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
                                }}>{item.question}</span>
                                <div style={{
                                    width: '32px',
                                    height: '32px',
                                    minWidth: '32px',
                                    borderRadius: '8px',
                                    background: openId === item.id 
                                        ? '#00adef' 
                                        : 'rgba(255, 255, 255, 0.15)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s ease',
                                    boxShadow: openId === item.id ? '0 3px 15px rgba(0, 173, 239, 0.4)' : 'none'
                                }}>
                                    <span style={{
                                        fontSize: '24px',
                                        fontWeight: '300',
                                        transition: 'all 0.3s ease',
                                        transform: openId === item.id ? 'rotate(45deg)' : 'rotate(0deg)',
                                        color: 'white',
                                        lineHeight: '1'
                                    }}>
                                        +
                                    </span>
                                </div>
                            </button>
                            <div
                                style={{
                                    maxHeight: openId === item.id ? '400px' : '0',
                                    overflow: 'hidden',
                                    transition: 'max-height 0.4s ease',
                                }}
                            >
                                <div style={{
                                    padding: '0 22px 20px',
                                    fontSize: '15px',
                                    lineHeight: '1.7',
                                    color: 'rgba(255, 255, 255, 0.95)',
                                    fontWeight: '400',
                                    textShadow: '0 1px 4px rgba(0, 0, 0, 0.15)'
                                }}>
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
