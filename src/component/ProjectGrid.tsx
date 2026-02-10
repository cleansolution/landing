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
        <div style={{ marginTop: '50px' }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '30px',
                marginBottom: '40px'
            }}>
                {displayedProjects.map((item: ProjectItem) => (
                    <div 
                        key={item.id}
                        style={{
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: '12px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                            height: '350px',
                            cursor: 'pointer',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-8px)';
                            e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.15)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
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
                                e.currentTarget.style.transform = 'scale(1.1)';
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
                            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.6) 50%, transparent 100%)',
                            padding: '40px 25px 25px',
                            color: 'white'
                        }}>
                            <h3 style={{
                                fontSize: '22px',
                                fontWeight: '700',
                                marginBottom: '8px',
                                color: 'white'
                            }}>
                                {item.title}
                            </h3>
                            <p style={{
                                fontSize: '15px',
                                lineHeight: '1.5',
                                color: 'rgba(255, 255, 255, 0.95)',
                                margin: 0
                            }}>
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {projectData.length > 3 && (
                <div style={{ textAlign: 'center' }}>
                    <button
                        onClick={() => setShowAll(!showAll)}
                        style={{
                            padding: '16px 40px',
                            background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
                            color: 'white',
                            fontSize: '16px',
                            fontWeight: '700',
                            borderRadius: '8px',
                            border: 'none',
                            cursor: 'pointer',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            boxShadow: '0 4px 12px rgba(30, 58, 138, 0.3)',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-3px)';
                            e.currentTarget.style.boxShadow = '0 6px 20px rgba(30, 58, 138, 0.4)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(30, 58, 138, 0.3)';
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
