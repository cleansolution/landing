import React, { useState } from 'react';
import projectData from '../data/projectData.json';
import ProjectImg1 from "../assets/images/project/project-img1.jpg";
import ProjectImg2 from "../assets/images/project/project-img2.jpg";
import ProjectImg3 from "../assets/images/project/project-img3.jpg";
import ProjectImg4 from "../assets/images/project/project-img4.jpg";
import ProjectImg5 from "../assets/images/project/project-img5.jpg";
import ProjectImg6 from "../assets/images/project/project-img6.jpg";

const projectImages: Record<string, string> = {
    "project-img1.jpg": ProjectImg1,
    "project-img2.jpg": ProjectImg2,
    "project-img3.jpg": ProjectImg3,
    "project-img4.jpg": ProjectImg4,
    "project-img5.jpg": ProjectImg5,
    "project-img6.jpg": ProjectImg6,
};

interface ProjectItem {
    id: number;
    title: string;
    description: string;
    image: string;
    link: string;
}

const ProjectGrid: React.FC = () => {
    const [showAll, setShowAll] = useState(false);
    const displayedProjects = showAll ? projectData : projectData.slice(0, 3);

    return (
        <div style={{ marginTop: '50px', padding: '0 15px' }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '35px',
                marginBottom: '50px',
                maxWidth: '1400px',
                margin: '0 auto'
            }}>
                {displayedProjects.map((item: ProjectItem) => (
                    <div 
                        key={item.id}
                        style={{
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '20px',
                            boxShadow: '0 8px 30px rgba(24, 74, 140, 0.12)',
                            height: '420px',
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            border: '2px solid rgba(24, 74, 140, 0.08)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = '0 15px 45px rgba(24, 74, 140, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 8px 30px rgba(24, 74, 140, 0.12)';
                        }}
                    >
                        <img
                            src={projectImages[item.image] ?? ProjectImg1}
                            alt={item.title}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.4s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'scale(1.08)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'scale(1)';
                            }}
                        />
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: 'linear-gradient(to top, rgba(24, 74, 140, 0.98) 0%, rgba(24, 74, 140, 0.80) 35%, transparent 100%)',
                            padding: '40px 30px 30px',
                            color: 'white'
                        }}>
                            <h3 style={{
                                fontSize: '28px',
                                fontWeight: '800',
                                marginBottom: '12px',
                                color: 'white',
                                textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
                                lineHeight: '1.2'
                            }}>
                                {item.title}
                            </h3>
                            <p style={{
                                fontSize: '17px',
                                lineHeight: '1.6',
                                color: 'rgba(255, 255, 255, 0.98)',
                                margin: 0,
                                fontWeight: '400',
                                textShadow: '0 1px 4px rgba(0, 0, 0, 0.2)'
                            }}>
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {projectData.length > 3 && (
                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <button
                        onClick={() => setShowAll(!showAll)}
                        style={{
                            padding: '18px 50px',
                            background: 'linear-gradient(135deg, #184A8C 0%, #2667b8 100%)',
                            color: 'white',
                            fontSize: '17px',
                            fontWeight: '700',
                            borderRadius: '12px',
                            border: 'none',
                            cursor: 'pointer',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            boxShadow: '0 6px 20px rgba(24, 74, 140, 0.3)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-4px)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(24, 74, 140, 0.4)';
                            e.currentTarget.style.background = 'linear-gradient(135deg, #2667b8 0%, #184A8C 100%)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(24, 74, 140, 0.3)';
                            e.currentTarget.style.background = 'linear-gradient(135deg, #184A8C 0%, #2667b8 100%)';
                        }}
                    >
                        {showAll ? 'Show Less' : 'View All Projects'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProjectGrid;
