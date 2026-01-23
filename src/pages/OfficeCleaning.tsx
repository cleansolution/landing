import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import OfficeImg1 from '../assets/images/house-cleaning/office-img1.jpg';
import OfficeImg2 from '../assets/images/house-cleaning/office-img2.jpg';
import OfficeImg3 from '../assets/images/house-cleaning/office-img3.jpg';
import OfficeImg4 from '../assets/images/house-cleaning/office-img4.jpg';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import AddImg from '../assets/images/house-cleaning/add-img.jpg';
import DownloadImg from '../assets/images/house-cleaning/download.png';
import Brochure from '../assets/images/svg/brochure.svg';
import Brochure2 from '../assets/images/svg/brochure2.svg';

const OfficeCleaning: React.FC = () => {
    return (
        <>
            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">Office Cleaning</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/Services">Service / </Link>
                        <Link to="/OfficeCleaning">Office Cleaning</Link>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Nine ===================================== --> */}
            <section className="section-eight">
                <div className="container">
                    <div className="row all-services-row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                            <h2 className="sec-text pb-0 fade_up">Where Clean Offices Mean Clear Minds</h2>
                            <img className="layers-img1 zoom_in" src={OfficeImg1} alt="house-clening-img1" />
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
                            <h3 className="ourServicesPrcoes mt-0">We Hope You Find What You are Looking for</h3>
                            <p className="fusce pb-0">Volutpat et malesuada maecenas amet. Ultrices volutpat auctor euismod eget
                                pulvinar nulla porttitor. Faucibus faucibus consectetur et tellus magnis. Nunc proin mauris enim
                                duis aliquet fringilla. Erat semper amet turpis cursus. Vel tellus tellus risus eu lacus
                                volutpat morbi. Cursus tincidunt urna condimentum egestas integer.</p>
                            <div className="swiper singleServicesSlider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <img src={OfficeImg2} alt="office-img2" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={OfficeImg3} alt="office-img3" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src={OfficeImg4} alt="office-img4" />
                                    </div>
                                </div>
                            </div>
                            <h3 className="ourServicesPrcoes mt-0">Ipsum eget non faucibus platea vel euismod dui ut</h3>
                            <p className="fusce">Purus auctor eu rhoncus mi enim facilisi. In suspendisse libero
                                suspendisse lacinia vulputate faucibus fusce. Blandit ultrices morbi eu rhoncus amet at.
                                Placerat in mi id dolor odio nulla. Feugiat in volutpat iaculis sit. Tincidunt gravida enim eget
                                arcu turpis sed nunc metus est. Purus sed elementum tristique sit malesuada sagittis odio. Ipsum
                                dolor enim nulla sed nulla dignissim. Tincidunt quam tellus vitae hac scelerisque massa.
                                Condimentum sit interdum eget vel congue egestas pretium.</p>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            What are the most common Cleaning materials?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Donec massa sapien faucibus et molestie ac. Sed blandit libero volutpat sed cras
                                            ornare arcu. Vulputate mi sit amet mauris. Integer enim neque volutpat ac tincidunt.
                                            Augue neque gravida in fermentum et sollicitudin.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            What causes Cleaning leaks?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Donec massa sapien faucibus et molestie ac. Sed blandit libero volutpat sed cras
                                            ornare arcu. Vulputate mi sit amet mauris. Integer enim neque volutpat ac tincidunt.
                                            Augue neque gravida in fermentum et sollicitudin.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Can I Cleaning myself?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Donec massa sapien faucibus et molestie ac. Sed blandit libero volutpat sed cras
                                            ornare arcu. Vulputate mi sit amet mauris. Integer enim neque volutpat ac tincidunt.
                                            Augue neque gravida in fermentum et sollicitudin.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            What services do architects provide?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Donec massa sapien faucibus et molestie ac. Sed blandit libero volutpat sed cras
                                            ornare arcu. Vulputate mi sit amet mauris. Integer enim neque volutpat ac tincidunt.
                                            Augue neque gravida in fermentum et sollicitudin.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingSix">
                                        <button className="accordion-button mb-0 collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            Can A Handyman Do Cleaning Work?
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix"
                                        data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Donec massa sapien faucibus et molestie ac. Sed blandit libero volutpat sed cras
                                            ornare arcu. Vulputate mi sit amet mauris. Integer enim neque volutpat ac tincidunt.
                                            Augue neque gravida in fermentum et sollicitudin.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-8 all-service-col">
                            <div className="services-list-box zoom_in">
                                <h2 className="all-service-text">Our All Service</h2>
                                <div className="roofing-services-list-main">
                                    <NavLink to="/HouseCleaning"
                                        className={({ isActive }) =>
                                            `service-list-arow-main ${isActive ? "active" : ""}`
                                        }
                                    >
                                        <p>House Cleaning</p>
                                        <img src={CrossArrow} alt="right-arrow" />
                                    </NavLink>

                                    <NavLink to="/KitchenCleaning"
                                        className={({ isActive }) =>
                                            `service-list-arow-main ${isActive ? "active" : ""}`
                                        }
                                    >
                                        <p>Kitchen Cleaning</p>
                                        <img src={CrossArrow} alt="right-arrow" />
                                    </NavLink>

                                    <NavLink to="/OfficeCleaning"
                                        className={({ isActive }) =>
                                            `service-list-arow-main ${isActive ? "active" : ""}`
                                        }
                                    >
                                        <p>Office Cleaning</p>
                                        <img src={CrossArrow} alt="right-arrow" />
                                    </NavLink>

                                    <NavLink to="/WindowCleaning"
                                        className={({ isActive }) =>
                                            `service-list-arow-main ${isActive ? "active" : ""}`
                                        }
                                    >
                                        <p>Window Cleaning</p>
                                        <img src={CrossArrow} alt="right-arrow" />
                                    </NavLink>

                                    <NavLink to="/CorporateCleaning"
                                        className={({ isActive }) =>
                                            `service-list-arow-main ${isActive ? "active" : ""}`
                                        }
                                    >
                                        <p>Corporate Cleaning</p>
                                        <img src={CrossArrow} alt="right-arrow" />
                                    </NavLink>

                                    <NavLink to="/CarpetCleaning"
                                        className={({ isActive }) =>
                                            `service-list-arow-main mb-0 ${isActive ? "active" : ""}`
                                        }
                                    >
                                        <p>CarpetCleaning</p>
                                        <img src={CrossArrow} alt="right-arrow" />
                                    </NavLink>
                                </div>
                            </div>
                            <div className="card-adds-main zoom_in">
                                <div className="card-adds-main zoom_in">
                                    <div className="adds-details-main">
                                        <img className="adds-img-home w-100" src={AddImg} alt="adds-img-home" />
                                        <img className="shape-img" src={DownloadImg} alt="download" />
                                        <h3>Get 10% Off on Your First Service</h3>
                                        <Link to="/Contact" className="btn-quote">Contact Us
                                            <img src={CrossArrow} alt="right-arrow" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="documents-box zoom_in">
                                    <button className="brochure-main">
                                        <div className="brochure">
                                            <img src={Brochure} alt="brochure" />
                                        </div>
                                        <h3>Cleaning Models.doc</h3>
                                    </button>
                                    <button className="brochure-main mb-0">
                                        <div className="brochure">
                                            <img src={Brochure2} alt="brochure2" />
                                        </div>
                                        <h3>Service Details.pdf</h3>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OfficeCleaning