import { useState } from 'react';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import SliderImg1 from '../assets/images/services/slider-img1.jpg';
import SliderImg2 from '../assets/images/services/slider-img2.jpg';
import SliderImg3 from '../assets/images/services/slider-img3.jpg';
import SliderImg4 from '../assets/images/services/slider-img4.jpg';
import SliderImg5 from '../assets/images/services/slider-img5.jpg';
import SliderImg6 from '../assets/images/services/slider-img6.jpg';
import SliderImg7 from '../assets/images/services/slider-img7.jpg';
import SliderImg8 from '../assets/images/services/slider-img8.jpg';
import ServicesSvg1 from '../assets/images/svg/services-svg1.svg';
import ServicesSvg2 from '../assets/images/svg/services-svg2.svg';
import ServicesSvg3 from '../assets/images/svg/services-svg3.svg';
import ServicesSvg4 from '../assets/images/svg/services-svg4.svg';
import ServicesSvg5 from '../assets/images/svg/services-svg5.svg';
import ServicesSvg6 from '../assets/images/svg/services-svg6.svg';
import servicesData from "../data/servicesData.json";
import ServiceDetailModal from './ServiceDetailModal.tsx';

export interface ServiceItem {
    id: number;
    category?: string;
    img: string;
    svg?: string;
    title: string;
    desc: string;
    link: string;
}

// Map para las imágenes de servicios
const serviceImages: { [key: string]: string } = {
    'slider-img1.jpg': SliderImg1,
    'slider-img2.jpg': SliderImg2,
    'slider-img3.jpg': SliderImg3,
    'slider-img4.jpg': SliderImg4,
    'slider-img5.jpg': SliderImg5,
    'slider-img6.jpg': SliderImg6,
    'slider-img7.jpg': SliderImg7,
    'slider-img8.jpg': SliderImg8,
};

// Map para los SVGs de servicios
const serviceSvgs: { [key: string]: string } = {
    'services-svg1.svg': ServicesSvg1,
    'services-svg2.svg': ServicesSvg2,
    'services-svg3.svg': ServicesSvg3,
    'services-svg4.svg': ServicesSvg4,
    'services-svg5.svg': ServicesSvg5,
    'services-svg6.svg': ServicesSvg6,
};

function ServicesFeatured() {
    const services = servicesData.services;
    const [activeCategory, setActiveCategory] = useState<string>('Residential Cleaning');
    const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
    
    // Mapeo de títulos de servicios a IDs del JSON de detalles
    const serviceIdMap: { [key: string]: string } = {
        'Regular Cleaning': 'regularCleaning',
        'Deep Cleaning': 'deepCleaning',
        'Move In/Move Out Cleaning': 'moveInOut',
        'Airbnb Cleaning': 'regularCleaning', // Usa regular cleaning como base
        'Post-Construction Cleaning': 'postConstruction',
        'Office Cleaning': 'officeCleaning',
        'Janitorial Services': 'commercialCleaning'
    };
    
    // Agrupar servicios por categoría
    const groupedServices = services.reduce((acc: { [key: string]: ServiceItem[] }, service: ServiceItem) => {
        const category = service.category || 'Other';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(service);
        return acc;
    }, {});

    const categories = Object.keys(groupedServices);

    const handleLearnMore = (title: string) => {
        const serviceId = serviceIdMap[title];
        if (serviceId) {
            setSelectedServiceId(serviceId);
        }
    };

    return (
        <>
            <div style={{ marginTop: '30px', marginBottom: '30px' }}>
                {/* Tabs de categorías */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                    marginBottom: '40px',
                    flexWrap: 'wrap'
                }}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            style={{
                                padding: '16px 40px',
                                backgroundColor: activeCategory === category ? '#1a1a1a' : 'white',
                                color: activeCategory === category ? 'white' : '#1a1a1a',
                                border: activeCategory === category ? '2px solid #1a1a1a' : '2px solid #333',
                                borderRadius: '8px',
                                fontSize: '17px',
                                fontWeight: '700',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: activeCategory === category 
                                    ? '0 6px 20px rgba(0, 0, 0, 0.3)' 
                                    : '0 2px 8px rgba(0, 0, 0, 0.15)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}
                            onMouseEnter={(e) => {
                                if (activeCategory !== category) {
                                    e.currentTarget.style.backgroundColor = '#f0f0f0';
                                    e.currentTarget.style.transform = 'translateY(-2px)';
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (activeCategory !== category) {
                                    e.currentTarget.style.backgroundColor = 'white';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.15)';
                                }
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid de servicios */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '30px',
                    padding: '0 15px'
                }}>
                    {groupedServices[activeCategory]?.map((item: ServiceItem) => (
                        <div 
                            key={item.id} 
                            onClick={() => handleLearnMore(item.title)}
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.12)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
                            }}
                        >
                            <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                                <img
                                    src={item.img.startsWith('data:') ? item.img : (serviceImages[item.img] || SliderImg1)}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                                {item.svg && (
                                    <div style={{
                                        position: 'absolute',
                                        top: '15px',
                                        right: '15px',
                                        width: '50px',
                                        height: '50px',
                                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '10px'
                                    }}>
                                        <img
                                            src={item.svg.startsWith('data:') ? item.svg : (serviceSvgs[item.svg] || ServicesSvg1)}
                                            alt={item.title}
                                            style={{ width: '100%', height: '100%' }}
                                        />
                                    </div>
                                )}
                            </div>

                            <div style={{ padding: '25px' }}>
                                <h3 style={{
                                    fontSize: '20px',
                                    fontWeight: '700',
                                    marginBottom: '12px',
                                    color: '#1a1a1a'
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{
                                    fontSize: '14px',
                                    lineHeight: '1.6',
                                    color: '#666',
                                    marginBottom: '20px'
                                }}>
                                    {item.desc}
                                </p>
                                <div 
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        color: '#00adef',
                                        fontSize: '15px',
                                        fontWeight: '600',
                                        textDecoration: 'none'
                                    }}
                                >
                                    Learn More <img src={CrossArrow} alt="arrow" style={{ width: '16px' }} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {selectedServiceId && (
                <ServiceDetailModal 
                    serviceId={selectedServiceId}
                    onClose={() => setSelectedServiceId(null)}
                />
            )}
        </>
    )
}

export default ServicesFeatured