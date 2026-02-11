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
        <section className="faq-section" style={{ padding: '50px 0', backgroundColor: '#f9f9f9' }}>
            <div className="container">
                <p className="cap-text fade_up" style={{ textAlign: 'center', fontSize: '16px', color: '#1e3a8a', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>FAQ</p>
                <h2 className="sec-text fade_up" style={{ textAlign: 'center', marginBottom: '50px', fontSize: '48px', fontWeight: '700', color: '#1a1a1a' }}>
                    Frequently Asked Questions
                </h2>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    {faqData.map((item: FAQItem) => (
                        <div 
                            key={item.id}
                            style={{
                                backgroundColor: 'white',
                                marginBottom: '15px',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                                transition: 'box-shadow 0.2s ease'
                            }}
                        >
                            <button
                                onClick={() => toggleAccordion(item.id)}
                                style={{
                                    width: '100%',
                                    padding: '20px 25px',
                                    backgroundColor: 'white',
                                    border: 'none',
                                    textAlign: 'left',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    color: '#1a1a1a',
                                    transition: 'background-color 0.2s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#f5f5f5';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'white';
                                }}
                            >
                                <span>{item.question}</span>
                                <span style={{
                                    fontSize: '24px',
                                    fontWeight: '300',
                                    transition: 'transform 0.3s ease',
                                    transform: openId === item.id ? 'rotate(45deg)' : 'rotate(0deg)',
                                    color: '#1e3a8a'
                                }}>
                                    +
                                </span>
                            </button>
                            <div
                                style={{
                                    maxHeight: openId === item.id ? '500px' : '0',
                                    overflow: 'hidden',
                                    transition: 'max-height 0.3s ease',
                                }}
                            >
                                <div style={{
                                    padding: '0 25px 20px',
                                    fontSize: '15px',
                                    lineHeight: '1.7',
                                    color: '#666'
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
