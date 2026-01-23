import React from 'react'
import { Link } from 'react-router-dom';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import Video2 from '../assets/video/video2.mp4';
import headphoneIcon from '../assets/images/svg/headphone-icon.svg'
import AboutSvg1 from '../assets/images/svg/about-svg1.svg';
import AboutSvg2 from '../assets/images/svg/about-svg2.svg';
import AboutSvg3 from '../assets/images/svg/about-svg3.svg';
import AboutSvg4 from '../assets/images/svg/about-svg4.svg';
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
import ServicesFeatured from '../component/ServicesFeatured.tsx';
import CostCalculator from '../component/CostCalculator.tsx';
import ProjectSlider from '../component/ProjectSlider.tsx';
import TeamSection from '../component/TeamSection.tsx';
import Testimonials from '../component/Testimonials.tsx';
import BlogSec1 from '../component/BlogSec1.tsx';
import ImageZoomScroll from '../component/ImageZoomScroll.tsx';
import HomeHeroVideo from '../component/HomeHeroVideo.tsx';

const HomeVideo: React.FC = () => {
    return (
        <>
            {/* <!-- ====================================== Section Hero Slider ===================================== --> */}
            <HomeHeroVideo />
            {/* <!-- ====================================== Section Two ===================================== --> */}
            <section className="section-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <p className="cap-text fade_in">about home rakshak cleaning</p>
                            <h2 className="sec-text fade_up">Let Us Handle The Mess, You Enjoy The Clean</h2>
                            <p className="sec-sub-text fade_up">Eu ornare ac amet at tempor id sollicitudin. Mi nam faucibus turpis
                                eu feugiat feugiat aliquet. Ac tristique nibh vulputate convallis elementum risus nisl mus. Amet
                                ornare suscipit arcu feugiat. Rhoncus varius egestas quis ut vitae elit enim egestas gravida
                                duis id morbi gravida tellus vitae ac.</p>
                            <div className="about-grid-box-main">
                                <div className="about-box-main zoom_in">
                                    <div className="about-svg-main">
                                        <img src={AboutSvg1} alt="about-svg1" />
                                    </div>
                                    <div>
                                        <h3 className="expeStaff">Experience Staff</h3>
                                        <p className="fessional">Professional and Experienced staff ready to help you anytime.</p>
                                    </div>
                                </div>
                                <div className="about-box-main zoom_in">
                                    <div className="about-svg-main">
                                        <img src={AboutSvg2} alt="about-svg2" />
                                    </div>
                                    <div>
                                        <h3 className="expeStaff">Natural Products</h3>
                                        <p className="fessional">We only use natural products in the process, No harmful chemicals
                                            are used.</p>
                                    </div>
                                </div>
                                <div className="about-box-main zoom_in">
                                    <div className="about-svg-main">
                                        <img src={AboutSvg3} alt="about-svg3" />
                                    </div>
                                    <div>
                                        <h3 className="expeStaff">Fast Service</h3>
                                        <p className="fessional">Set your schedule and get the regular and faster cleaning everyday,
                                        </p>
                                    </div>
                                </div>
                                <div className="about-box-main zoom_in">
                                    <div className="about-svg-main">
                                        <img src={AboutSvg4} alt="about-svg4" />
                                    </div>
                                    <div>
                                        <h3 className="expeStaff">Best Equipment</h3>
                                        <p className="fessional">We use the best and world class equipment for the cleaning process.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="about-sec-main">
                                <Link to="/About" className="btn-quote our-services-btn">About Us
                                    <img src={CrossArrow} alt="cross-arrow" />
                                </Link>
                                <div className="call">
                                    <div className="headphone-main">
                                        <img src={headphoneIcon} alt="headphone-icon" />
                                    </div>
                                    <div className="need-help-main">
                                        <p>Need Help Now?</p>
                                        <a href="tel:+12483578866">+1 (248) 357 8866</a>
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
            {/* <!-- ====================================== Section Three ===================================== --> */}
            <section className="section-three">
                <div className="container">
                    <p className="cap-text fade_up">OUR FEATURED SERVICES</p>
                    <div className="section-main-text-flex">
                        <h2 className="sec-text pb-0 fade_up">The United Way For To Find Specialist Services</h2>
                        <p className="sec-sub-text ornare fade_up">Eu ornare ac amet at tempor id sollicitudin. Mi nam faucibus
                            turpis eu feugiat feugiat aliquet. Ac tristique nibh vulputate convallis elementum risus nisl mus.
                            Amet ornare suscipit arcu feugiat.</p>
                    </div>
                    <ServicesFeatured />
                </div>
            </section>
            {/* <!-- ====================================== Section Four ===================================== --> */}
            <section className="section-four">
                <div className="container">
                    <div className="row why-choose-row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <p className="cap-text fade_up">why choose us</p>
                            <h2 className="sec-text fade_up">We Will Make Absolutely Any Place Clean, Neat & Tidy.</h2>
                            <p className="sec-sub-text fade_up">Eu nascetur vitae odio faucibus sed pharetra. Mus tempus risus purus
                                diam orci mi. Amet cras urna amet tincidunt enim arcu aliquet massa enim. A aliquam quis
                                sagittis sapien. Vel aliquam mi pulvinar pulvinar urna.</p>
                            <div className="check-box-main">
                                <div className="check-box-main-sub fade_up">
                                    <img src={CheckTransparent} alt="check-transparent" />
                                    <div>
                                        <h2>Customer Focused Reviews</h2>
                                        <p>Pulvinar sed nulla egestas elit. Massa et velit tellus quis eu. Maecenas natoque
                                            pellentesque volutpat amet tincidunt convallis scelerisque.</p>
                                    </div>
                                </div>
                                <div className="check-box-main-sub fade_up">
                                    <img src={CheckTransparent} alt="check-transparent" />
                                    <div>
                                        <h2>We Are Committed</h2>
                                        <p>Sit viverra vehicula elementum sed nisl semper. Id fermentum vitae fringilla donec
                                            tellus dignissim venenatis rhoncus elit nibh viverra.</p>
                                    </div>
                                </div>
                                <div className="check-box-main-sub fade_up">
                                    <img src={CheckTransparent} alt="check-transparent" />
                                    <div>
                                        <h2>Regular & Monthly Cleaning</h2>
                                        <p>Elementum eget volutpat blandit pretium. Tincidunt a in malesuada tortor aenean elit
                                            metus hac. Suspendisse blandit in aliquet porttitor.</p>
                                    </div>
                                </div>
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
            {/* <!-- ====================================== Section Five ===================================== --> */}
            <section className="section-five">
                <div className="container">
                    <p className="cap-text cost-cal fade_up">Cost Calculator</p>
                    <h2 className="sec-text fami-cal pb-0 fade_up">Be a Part of Hundreds of Happy Families.</h2>
                    <div className="calculator-box-main zoom_in">
                        <CostCalculator />
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Six ===================================== --> */}
            <section className="section-six">
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
            {/* <!-- ====================================== Section Seven ===================================== --> */}
            <section className="section-seven">
                <div className="container">
                    <p className="cap-text fade_up">OUR works</p>
                    <div className="section-main-text-flex">
                        <h2 className="sec-text pb-0 fade_up">Our Recent Projects</h2>
                        <p className="sec-sub-text ornare fade_up">Eu ornare ac amet at tempor id sollicitudin. Mi nam faucibus
                            turpis eu feugiat feugiat aliquet.</p>
                    </div>
                </div>
                <ProjectSlider />
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
            {/* <!-- ====================================== Section Blog ===================================== --> */}
            <section className="blog-section">
                <div className="container">
                    <p className="cap-text cost-cal fade_up">latest news</p>
                    <h2 className="sec-text mazing pb-0 fade_up">Our Most Recent Posts</h2>
                    <div className="container">
                        <BlogSec1 limit={3} />
                    </div>
                </div>
            </section>
            <ImageZoomScroll />

        </>
    )
}

export default HomeVideo





