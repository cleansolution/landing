import React from 'react'
import { Link } from 'react-router-dom';
import projectData from '../data/projectData.json';
import ProjectImg1 from "../assets/images/project/project-img1.jpg";
import ProjectImg2 from "../assets/images/project/project-img2.jpg";
import ProjectImg3 from "../assets/images/project/project-img3.jpg";
import ProjectImg4 from "../assets/images/project/project-img4.jpg";
import ProjectImg5 from "../assets/images/project/project-img5.jpg";
import ProjectImg6 from "../assets/images/project/project-img6.jpg";

/* ---------------- Image Map ---------------- */
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

const Project2: React.FC = () => {
    return (
        <>
            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">Our Projects</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/Project2"> Projects</Link>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== About Section Two ===================================== --> */}
            <section className="section-two">
                <div className="container">
                    <div className="row project-two-row">
                        {projectData.map((item: ProjectItem) => (
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6" key={item.id}>
                                <Link to={item.link} className="project-box-main">
                                    <div className="project-box-main-img">
                                        <img
                                            src={projectImages[item.image] ?? ProjectImg1}
                                            alt={item.title}
                                            className="home-project-img"
                                        />
                                        <div className="project-two-img-ovelry"></div>
                                        <div className="overlay-title">
                                            <h2>{item.title}</h2>
                                            <p>Home cleaning</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project2