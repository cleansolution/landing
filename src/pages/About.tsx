import React from 'react'
import { Link } from 'react-router-dom';
import Video2 from '../assets/video/video2.mp4';
import headphoneIcon from '../assets/images/svg/headphone-icon.svg'
import AboutSvg1 from '../assets/images/svg/about-svg1.svg';
import AboutSvg2 from '../assets/images/svg/about-svg2.svg';
import AboutSvg3 from '../assets/images/svg/about-svg3.svg';
import AboutSvg4 from '../assets/images/svg/about-svg4.svg';
import aboutData from '../data/aboutData.json';
import featuresData from '../data/featuresData.json';
import sectionsData from '../data/sectionsData.json';
import AboutImg1 from '../assets/images/about/about-img1.jpg';
import AboutImg2 from '../assets/images/about/about-img2.jpg';
import AboutImg3 from '../assets/images/about/about-img3.jpg';
import Subtract from '../assets/images/about/Subtract.png'
import CheckTransparent from '../assets/images/svg/check-transparent.svg';
import HowWorkBg from '../assets/images/about/how-to-work-bg.png';
import HowWorkSvg1 from '../assets/images/svg/how-to-work-svg1.svg';
import HowWorkSvg2 from '../assets/images/svg/how-to-work-svg2.svg';
import HowWorkSvg3 from '../assets/images/svg/how-to-work-svg3.svg';
import HowWorkArrow from '../assets/images/svg/how-to-work-arrow.svg';
import TeamSection from '../component/TeamSection.tsx';
import Testimonials from '../component/Testimonials.tsx';


const About: React.FC = () => {
    return (
        <>

            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">About Us</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/About"> ABOUT US</Link>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== About Section Two ===================================== --> */}
            <section className="section-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <p className="cap-text fade_in">{aboutData.capText}</p>
                            <h2 className="sec-text fade_up">{aboutData.mainTitle}</h2>
                            <p className="sec-sub-text fade_up">{aboutData.description}</p>
                            <div className="about-grid-box-main">
                                {featuresData.features.map((feature) => {
                                    // Map para los iconos
                                    const iconMap: { [key: string]: string } = {
                                        'about-svg1.svg': AboutSvg1,
                                        'about-svg2.svg': AboutSvg2,
                                        'about-svg3.svg': AboutSvg3,
                                        'about-svg4.svg': AboutSvg4,
                                    };
                                    return (
                                        <div className="about-box-main zoom_in" key={feature.id}>
                                            <div className="about-svg-main">
                                                <img src={iconMap[feature.icon]} alt={feature.icon} />
                                            </div>
                                            <div>
                                                <h3 className="expeStaff">{feature.title}</h3>
                                                <p className="fessional">{feature.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="about-sec-main">
                                <div className="call">
                                    <div className="headphone-main">
                                        <img src={headphoneIcon} alt="headphone-icon" />
                                    </div>
                                    <div className="need-help-main">
                                        <p>Need Help Now?</p>
                                        <a href="tel:+17573058237">+1 (757) 305 8237</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 position-relative">
                            <div className="sub-img-main">
                                <img className="about-img1" src={AboutImg1} alt="about-img1" />
                                <img className="subtract-img" src={Subtract} alt="Subtract" />
                                <img className="about-img2" src={AboutImg2} alt="about-img2" />
                                <img className="about-img3" src={AboutImg3} alt="about-img3" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Six ===================================== --> */}
            <section className="section-six about-section-three">
                <div className="container position-relative">
                    <img className="how-to-work-bg" src={HowWorkBg} alt="how-to-work-bg" />
                    <p className="cap-text cost-cal position-relative fade_up">How it works</p>
                    <h2 className="sec-text mazing position-relative fade_up">Get Amazing Cleaning in 3 Simple Steps</h2>
                    <p className="sec-sub-text scetur position-relative fade_up">At amet in adipiscing hac suspendisse. Laoreet sit
                        consectetur donec odio ornare elementum pellentesque. Ante gravida netus dignissim sed tristique mauris
                        egestas egestas aenean turpis id eget.</p>
                    <div className="how-work-step-box">
                        <div className="how-work-step-box-sub fade_up">
                            <div className="how-to-work-circle">
                                <img src={HowWorkSvg1} alt="how-to-work-svg1" />
                            </div>
                            <h3>Pick a suitable plan</h3>
                            <p className="fessional send-info">Rule first third above first tree saw Grass subdue great eep saying
                                forth rule hath to the replenish.
                            </p>
                        </div>
                        <div className="how-work-step-box-sub how-to-work-arrow">
                            <div>
                                <img src={HowWorkArrow} alt="how-to-work-arrow" />
                            </div>
                        </div>
                        <div className="how-work-step-box-sub fade_up">
                            <div className="how-to-work-circle">
                                <img src={HowWorkSvg2} alt="how-to-work-svg2" />
                            </div>
                            <h3>Set your schedule</h3>
                            <p className="fessional send-info">Quam nulla maecenas aliquam non erat auctor tristique. Ut quis quam
                                donec cum. Eu sed ante scelerisque massa.
                            </p>
                        </div>
                        <div className="how-work-step-box-sub how-to-work-arrow">
                            <div>
                                <img src={HowWorkArrow} alt="how-to-work-arrow" />
                            </div>
                        </div>
                        <div className="how-work-step-box-sub fade_up">
                            <div className="how-to-work-circle">
                                <img src={HowWorkSvg3} alt="how-to-work-svg3" />
                            </div>
                            <h3>Get things done</h3>
                            <p className="fessional send-info">Urna praesent fusce risus pellentesque odio. Eget nulla volutpat
                                proin sagittis lacus ornare sagittis risus.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Four ===================================== --> */}
            <section className="section-four">
                <div className="container">
                    <div className="row why-choose-row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <p className="cap-text fade_up">{sectionsData.whyChooseUs.sectionTitle}</p>
                            <h2 className="sec-text fade_up">{sectionsData.whyChooseUs.mainTitle}</h2>
                            <p className="sec-sub-text fade_up">{sectionsData.whyChooseUs.description}</p>
                            <div className="check-box-main">
                                {sectionsData.whyChooseUs.benefits.map((benefit) => (
                                    <div className="check-box-main-sub fade_up" key={benefit.id}>
                                        <img src={CheckTransparent} alt="check-transparent" />
                                        <div>
                                            <h2>{benefit.title}</h2>
                                            <p>{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 sec-video2">
                            <video autoPlay muted loop playsInline className="video2">
                                <source src={Video2} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="sadas"></div>
                            <img className="why-choose-img3" src={AboutImg3} alt="about-img3" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Eight ===================================== --> */}
            <section className="section-eight pt-0">
                <div className="container">
                    <p className="cap-text cost-cal fade_up">Our Expert Worker</p>
                    <h2 className="sec-text mazing pb-0 fade_up">We Are Expert Team To Keep Your Vision</h2>
                    <TeamSection limit={4} />
                </div>
            </section>
            {/* <!-- ====================================== Section Nine ===================================== --> */}
            <section className="section-nine pt-0">
                <Testimonials />
            </section>
        </>
    )
}

export default About