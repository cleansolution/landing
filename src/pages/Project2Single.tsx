import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SingleProjectImg1 from '../assets/images/project/single-project-img1.jpg';
import SingleProjectImg2 from '../assets/images/project/single-project-img2.jpg';
import SingleProjectImg3 from '../assets/images/project/single-project-img3.jpg';
import SingleProjectImg4 from '../assets/images/project/single-project-img4.jpg';
import SingleProjectImg5 from '../assets/images/project/single-project-img5.jpg';
import ArrowLeft from '../assets/images/svg/arrow-left.svg';
import ArrowRight from '../assets/images/svg/arrow-right.svg';
import FacebookSvg from '../assets/images/svg/facebook.svg';
import TwitterSvg from '../assets/images/svg/twitter.svg';
import InstaSvg from '../assets/images/svg/insta.svg';
import WhatsappSvg from '../assets/images/svg/whatsapp.svg';

const Project2Single: React.FC = () => {
    const singleProject2 = {
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 20,
        modules: [Autoplay],
        autoplay: { delay: 2000, disableOnInteraction: false },
        breakpoints: {
            575: {
                slidesPerView: 3,
            }
        }
    };
    return (
        <>
            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">Single Project</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/Project1">Project / </Link>
                        <Link to="/Project2Single"> Single Project 2</Link>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== About Section Two ===================================== --> */}
            <section className="section-two">
                <div className="container">
                    <div className="row all-services-row all-services-row2">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-8 all-service-col">
                            <div className="send-inquiry-form">
                                <h2 className="project-info-text">Project Info</h2>
                                <div className="project-info-main pt-0">
                                    <p>Category :</p>
                                    <p>Industrial</p>
                                </div>
                                <div className="project-info-main">
                                    <p>Date :</p>
                                    <p>20 AUG, 2024</p>
                                </div>
                                <div className="project-info-main">
                                    <p>Client :</p>
                                    <p>John Duo</p>
                                </div>
                                <div className="project-info-main">
                                    <p>Date :</p>
                                    <p>22-2-2024</p>
                                </div>
                                <div className="project-info-main">
                                    <p>Location :</p>
                                    <p>Evanto HQ st</p>
                                </div>
                                <div className="project-info-main">
                                    <p>Year :</p>
                                    <p>2025</p>
                                </div>
                                <div className="footer-med-icons-main project-details-icon">
                                    <a href="https://www.facebook.com" className="footer-med-icons">
                                        <img src={FacebookSvg} alt="facebook" />
                                    </a>
                                    <a href="https://x.com" className="footer-med-icons">
                                        <img src={TwitterSvg} alt="twiiter" />
                                    </a>
                                    <a href="https://www.instagram.com" className="footer-med-icons">
                                        <img src={InstaSvg} alt="insta" />
                                    </a>
                                    <a href="https://wa.me/+1234567890" className="footer-med-icons">
                                        <img src={WhatsappSvg} alt="whatsapp" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                            <h2 className="sec-text pb-0">House Cleaning Solutions</h2>
                            <img className="layers-img1 zoom_in" src={SingleProjectImg1} alt="single-project-img1" />
                            <p className="fusce pb-2">Volutpat et malesuada maecenas amet. Ultrices volutpat auctor euismod eget
                                pulvinar nulla porttitor. Faucibus faucibus consectetur et tellus magnis. Nunc proin mauris enim
                                duis aliquet fringilla. Erat semper amet turpis cursus. Vel tellus tellus risus eu lacus
                                volutpat morbi. Cursus tincidunt urna condimentum egestas integer.</p>
                            <p className="fusce mt-0 ">Purus auctor eu rhoncus mi enim facilisi. In suspendisse libero
                                suspendisse lacinia vulputate faucibus fusce. Blandit ultrices morbi eu rhoncus amet at.
                                Placerat in mi id dolor odio nulla. Feugiat in volutpat iaculis sit. Tincidunt gravida enim eget
                                arcu turpis sed nunc metus est. Purus sed elementum tristique sit malesuada sagittis odio. Ipsum
                                dolor enim nulla sed nulla dignissim. Tincidunt quam tellus vitae hac scelerisque massa.
                                Condimentum sit interdum eget vel congue egestas pretium.</p>
                            <h3 className="ourServicesPrcoes fade_up pb-0">The Challenge of Project</h3>
                            <Swiper {...singleProject2} className="swiper singleProject2">
                                <SwiperSlide>
                                    <img className="layers-img" src={SingleProjectImg2} alt="window-img2" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img className="layers-img" src={SingleProjectImg3} alt="window-img3" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img className="layers-img" src={SingleProjectImg4} alt="window-img4" />
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img className="layers-img" src={SingleProjectImg5} alt="window-img5" />
                                </SwiperSlide>
                            </Swiper>
                            <p className="fusce mt-0 ">Purus auctor eu rhoncus mi enim facilisi. In suspendisse libero
                                suspendisse lacinia vulputate faucibus fusce. Blandit ultrices morbi eu rhoncus amet at.
                                Placerat in mi id dolor odio nulla. Feugiat in volutpat iaculis sit. Tincidunt gravida enim eget
                                arcu turpis sed nunc metus est. Purus sed elementum tristique sit malesuada sagittis odio. Ipsum
                                dolor enim nulla sed nulla dignissim. Tincidunt quam tellus vitae hac scelerisque massa.
                                Condimentum sit interdum eget vel congue egestas pretium.</p>
                            <div className="diamond-nextbtn-head">
                                <div className="diamond-next-btn">
                                    <Link to="/Project1Single" className="diamond-btn next">
                                        <img src={ArrowLeft} alt="left-arrow" />
                                    </Link>
                                    <h3>Window Cleaning</h3>
                                </div>
                                <div className="diamond-next-btn">
                                    <h3>House Cleaning</h3>
                                    <Link to="/Project3Single" className="diamond-btn next">
                                        <img src={ArrowRight} alt="right-arrow" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project2Single