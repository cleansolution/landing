import React, { useState } from 'react';
import servicesDetails from '../data/servicesDetails.json';

interface ServiceDetailModalProps {
    serviceId: string;
    onClose: () => void;
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ serviceId, onClose }) => {
    const serviceData = servicesDetails[serviceId as keyof typeof servicesDetails] as any;

    if (!serviceData) return null;

    return (
        <div 
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
                padding: '20px',
                overflowY: 'auto'
            }}
            onClick={onClose}
        >
            <div 
                style={{
                    backgroundColor: 'white',
                    borderRadius: '12px',
                    maxWidth: '900px',
                    width: '100%',
                    maxHeight: '90vh',
                    overflow: 'auto',
                    position: 'relative'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <div style={{
                    position: 'sticky',
                    top: 0,
                    backgroundColor: 'white',
                    padding: '30px',
                    borderBottom: '2px solid #f0f0f0',
                    zIndex: 10
                }}>
                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute',
                            top: '20px',
                            right: '20px',
                            background: 'none',
                            border: 'none',
                            fontSize: '32px',
                            cursor: 'pointer',
                            color: '#666',
                            lineHeight: '1'
                        }}
                    >
                        ×
                    </button>
                    <h2 style={{
                        fontSize: '32px',
                        fontWeight: '700',
                        color: '#1a1a1a',
                        marginBottom: '15px'
                    }}>
                        {serviceData.title}
                    </h2>
                    <p style={{
                        fontSize: '16px',
                        lineHeight: '1.7',
                        color: '#666'
                    }}>
                        {serviceData.description}
                    </p>
                </div>

                <div style={{ padding: '30px' }}>
                    <div style={{
                        backgroundColor: '#f8f9fa',
                        padding: '20px',
                        borderRadius: '8px',
                        marginBottom: '30px',
                        borderLeft: '4px solid #00adef'
                    }}>
                        <h3 style={{
                            fontSize: '16px',
                            fontWeight: '600',
                            color: '#00adef',
                            marginBottom: '8px'
                        }}>
                            RECOMMENDED FOR
                        </h3>
                        <p style={{
                            fontSize: '15px',
                            lineHeight: '1.6',
                            color: '#333',
                            margin: 0
                        }}>
                            {serviceData.recommended}
                        </p>
                    </div>

                    <h3 style={{
                        fontSize: '24px',
                        fontWeight: '700',
                        color: '#1a1a1a',
                        marginBottom: '25px'
                    }}>
                        What Includes
                    </h3>

                    {serviceData.includes.wholeHouse && (
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{
                                fontSize: '18px',
                                fontWeight: '600',
                                color: '#00adef',
                                marginBottom: '12px'
                            }}>
                                WHOLE HOUSE:
                            </h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                {serviceData.includes.wholeHouse.map((item, index) => (
                                    <li key={index} style={{
                                        fontSize: '15px',
                                        lineHeight: '2',
                                        color: '#555',
                                        paddingLeft: '25px',
                                        position: 'relative'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#00adef',
                                            fontWeight: '700'
                                        }}>✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {serviceData.includes.bathrooms && (
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{
                                fontSize: '18px',
                                fontWeight: '600',
                                color: '#00adef',
                                marginBottom: '12px'
                            }}>
                                BATHROOMS:
                            </h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                {serviceData.includes.bathrooms.map((item, index) => (
                                    <li key={index} style={{
                                        fontSize: '15px',
                                        lineHeight: '2',
                                        color: '#555',
                                        paddingLeft: '25px',
                                        position: 'relative'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#00adef',
                                            fontWeight: '700'
                                        }}>✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {serviceData.includes.kitchen && (
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{
                                fontSize: '18px',
                                fontWeight: '600',
                                color: '#00adef',
                                marginBottom: '12px'
                            }}>
                                KITCHEN:
                            </h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                {serviceData.includes.kitchen.map((item, index) => (
                                    <li key={index} style={{
                                        fontSize: '15px',
                                        lineHeight: '2',
                                        color: '#555',
                                        paddingLeft: '25px',
                                        position: 'relative'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#00adef',
                                            fontWeight: '700'
                                        }}>✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {serviceData.includes.main && (
                        <div style={{ marginBottom: '25px' }}>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                {serviceData.includes.main.map((item, index) => (
                                    <li key={index} style={{
                                        fontSize: '15px',
                                        lineHeight: '2',
                                        color: '#555',
                                        paddingLeft: '25px',
                                        position: 'relative'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#00adef',
                                            fontWeight: '700'
                                        }}>✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {serviceData.includes.daily && (
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{
                                fontSize: '18px',
                                fontWeight: '600',
                                color: '#00adef',
                                marginBottom: '12px'
                            }}>
                                DAILY COMMERCIAL CLEANING:
                            </h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                {serviceData.includes.daily.map((item, index) => (
                                    <li key={index} style={{
                                        fontSize: '15px',
                                        lineHeight: '2',
                                        color: '#555',
                                        paddingLeft: '25px',
                                        position: 'relative'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#00adef',
                                            fontWeight: '700'
                                        }}>✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {serviceData.includes.bathroomKitchen && (
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{
                                fontSize: '18px',
                                fontWeight: '600',
                                color: '#00adef',
                                marginBottom: '12px'
                            }}>
                                BATHROOM AND KITCHEN/BREAK ROOM:
                            </h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                {serviceData.includes.bathroomKitchen.map((item, index) => (
                                    <li key={index} style={{
                                        fontSize: '15px',
                                        lineHeight: '2',
                                        color: '#555',
                                        paddingLeft: '25px',
                                        position: 'relative'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#00adef',
                                            fontWeight: '700'
                                        }}>✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {serviceData.additionalServices && (
                        <div style={{ marginBottom: '25px' }}>
                            <h4 style={{
                                fontSize: '18px',
                                fontWeight: '600',
                                color: '#00adef',
                                marginBottom: '12px'
                            }}>
                                ADDITIONAL CLEANING SERVICES:
                            </h4>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0
                            }}>
                                {serviceData.additionalServices.map((item, index) => (
                                    <li key={index} style={{
                                        fontSize: '15px',
                                        lineHeight: '2',
                                        color: '#555',
                                        paddingLeft: '25px',
                                        position: 'relative'
                                    }}>
                                        <span style={{
                                            position: 'absolute',
                                            left: '0',
                                            color: '#00adef',
                                            fontWeight: '700'
                                        }}>+</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {serviceData.notes && (
                        <div style={{
                            backgroundColor: '#fff3cd',
                            padding: '20px',
                            borderRadius: '8px',
                            borderLeft: '4px solid #ffc107',
                            marginTop: '30px'
                        }}>
                            <h4 style={{
                                fontSize: '16px',
                                fontWeight: '600',
                                color: '#856404',
                                marginBottom: '10px'
                            }}>
                                Important Notes:
                            </h4>
                            {serviceData.notes.map((note, index) => (
                                <p key={index} style={{
                                    fontSize: '14px',
                                    lineHeight: '1.6',
                                    color: '#856404',
                                    margin: '5px 0'
                                }}>
                                    • {note}
                                </p>
                            ))}
                        </div>
                    )}

                    <div style={{
                        marginTop: '40px',
                        textAlign: 'center'
                    }}>
                        <a 
                            href="#contact" 
                            onClick={onClose}
                            style={{
                                display: 'inline-block',
                                padding: '16px 40px',
                                backgroundColor: '#00adef',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '8px',
                                fontSize: '16px',
                                fontWeight: '600',
                                transition: 'background-color 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#0099d6';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = '#00adef';
                            }}
                        >
                            Get a Quote for This Service
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailModal;
