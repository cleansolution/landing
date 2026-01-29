import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import BlogDetailsImg1 from '../assets/images/blog/blog-details-img1.jpg';
import UserCircle from '../assets/images/svg/user-circle.svg';
import CalendarWeek from '../assets/images/svg/calendar-week.svg';
import MessageCircle from '../assets/images/svg/message-circle.svg';
import corporateImg2 from '../assets/images/house-cleaning/corporate-img2.jpg';
import corporateImg3 from '../assets/images/house-cleaning/corporate-img3.jpg';
import corporateImg4 from '../assets/images/house-cleaning/corporate-img4.jpg';
import AddImg from '../assets/images/house-cleaning/add-img.jpg';
import downloadImg from '../assets/images/house-cleaning/download.png';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import SearchIcon from '../assets/images/svg/search-icon.svg';
import RecentPostsImg1 from '../assets/images/blog/recent-posts-img1.jpg';
import RecentPostsImg2 from '../assets/images/blog/recent-posts-img2.jpg';
import RecentPostsImg3 from '../assets/images/blog/recent-posts-img3.jpg';
import RecentPostsImg4 from '../assets/images/blog/recent-posts-img4.jpg';
import RecentPostsImg5 from '../assets/images/blog/recent-posts-img5.jpg';
import ArrowLeft from '../assets/images/svg/arrow-left.svg';
import ArrowRight from '../assets/images/svg/arrow-right.svg';

const BlogDetails2 = () => {

    const SingleService = {
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        spaceBetween: 20,
        modules: [Autoplay],
        autoplay: { delay: 2000, disableOnInteraction: false },
        breakpoints: {
            575: {
                slidesPerView: 2,
            }
        }
    };
    return (
        <>
            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">Things to know choosing a cleaning service.</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/BlogDetails2">Things to know choosing a cleaning service.</Link>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== About Section Two ===================================== --> */}
            <section className="blog-section">
                <h2 className="d-none">hidden</h2>
                <div className="container">
                    <div className="row blog-two-grid-row2">
                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-8">
                            <div className="search-box-main">
                                <div className="search-input">
                                    <input type="text" placeholder="Search Here..." name="search2" />
                                    <div className="search-box">
                                        <img src={SearchIcon} alt="search-icon" />
                                    </div>
                                </div>
                            </div>
                            <div className="single-services-black-box" id="recent-post-box">
                                <h3>Recent Posts</h3>
                            </div>
                            <Link to="/OurBlog" className="recent-post-main">
                                <img src={RecentPostsImg1} alt="recent-posts-img1" />
                                <div className="recent-post-text-main">
                                    <p>20 DEC 2025</p>
                                    <h2>Things to know choosing a cleaning service.</h2>
                                </div>
                            </Link>
                            <Link to="/OurBlog" className="recent-post-main">
                                <img src={RecentPostsImg2} alt="recent-posts-img2" />
                                <div className="recent-post-text-main">
                                    <p>1 DEC 2025</p>
                                    <h2>Step by step guide to clean your carpets.</h2>
                                </div>
                            </Link>
                            <Link to="/OurBlog" className="recent-post-main">
                                <img src={RecentPostsImg3} alt="recent-posts-img3" />
                                <div className="recent-post-text-main">
                                    <p>30 NOV 2025</p>
                                    <h2>How you typically do your cleaning process</h2>
                                </div>
                            </Link>
                            <Link to="/OurBlog" className="recent-post-main">
                                <img src={RecentPostsImg4} alt="recent-posts-img4" />
                                <div className="recent-post-text-main">
                                    <p>15 DEC 2025</p>
                                    <h2>How to use cleaning equipment properly.</h2>
                                </div>
                            </Link>
                            <Link to="/OurBlog" className="recent-post-main">
                                <img src={RecentPostsImg5} alt="recent-posts-img5" />
                                <div className="recent-post-text-main">
                                    <p>5 DEC 2025</p>
                                    <h2>Tips to keep your bedroom fresh and clean.</h2>
                                </div>
                            </Link>
                            <div className="adds-details-main">
                                <img className="adds-img-home w-100" src={AddImg} alt="adds-img-home" />
                                <img className="shape-img" src={downloadImg} alt="download" />
                                <h3>Get 10% Off on Your First Service</h3>
                                <Link to="/Contact" className="btn-quote">Contact Us
                                    <img src={CrossArrow} alt="cross-arrow" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xxl-8 col-xl-8 col-lg-8">
                            <img className="single-blog-img1" src={BlogDetailsImg1} alt="blog-details-img1" />
                            <div className="tag-date border-bottom-0">
                                <div className="tag-date-sub">
                                    <img className="blog-cal-svg" src={UserCircle} alt="user-circle" />
                                    <p>Admin</p>
                                </div>
                                <div className="tag-date-sub">
                                    <img className="blog-cal-svg" src={CalendarWeek} alt="calendar-week" />
                                    <p>20 Dec 2025</p>
                                </div>
                                <div className="tag-date-sub">
                                    <img src={MessageCircle} alt="message-circle" />
                                    <p>1.2k</p>
                                </div>
                            </div>
                            <p className="fusce fade_down">Carpet cleaning is an essential part of maintaining a healthy and fresh home environment. Over time, carpets accumulate dirt, dust, allergens, and stains that regular vacuuming alone cannot remove. Professional carpet cleaning not only improves the appearance of your carpets but also extends their lifespan and contributes to better indoor air quality. Whether you're dealing with high-traffic areas, stubborn stains, or just routine maintenance, understanding the proper carpet cleaning process will help you achieve the best results and keep your carpets looking and feeling like new for years to come.
                            </p>
                            <p className="fusce psum fade_down">The first step in professional carpet cleaning is a thorough inspection and pre-treatment. Our technicians assess the carpet's condition, identify problem areas, and determine the most effective cleaning method based on the carpet's fiber type and level of soiling. We then pre-treat heavily soiled areas and stubborn stains with specialized solutions that break down dirt and grime. This preparation phase is crucial for achieving optimal cleaning results. Using hot water extraction method, also known as steam cleaning, we apply a cleaning solution deep into the carpet fibers and then extract it along with the loosened dirt, leaving your carpets fresh, clean, and sanitized.
                            </p>
                            <div className="qoute-box">
                                <h2>Amidst the chaos of life, let your home be a crystal gentle dance of flames and the energy
                                    of creating a haven of pure serenity and magic.</h2>
                                <div className="line_client">
                                    <div className="line"></div>
                                    <h3 className="jordon">By Jordon Smith</h3>
                                </div>
                            </div>
                            <h2 className="ourServicesPrcoes pt-0 fade_down">Proper drying and post-cleaning care ensure lasting cleanliness and carpet longevity.</h2>
                            <p className="fusce fade_down">After the cleaning process, proper drying is essential to prevent mold growth and ensure your carpets are ready for use as quickly as possible. We use powerful extraction equipment to remove as much moisture as possible, and in most cases, carpets are dry within 6-12 hours. To maintain your freshly cleaned carpets, we recommend regular vacuuming at least once a week, immediate attention to spills and stains, and professional deep cleaning every 12-18 months depending on foot traffic. With proper care and maintenance, your carpets will continue to look beautiful and contribute to a healthier living environment for you and your family.
                            </p>
                            <p className="fusce fade_down psum">Pretium orci quam volutpat tortor dignissim fames tellus. Pulvinar
                                pellentesque ut massa adipiscing neque risus tempor. Egestas molestie nibh amet sodales aliquam.
                                Feugiat at interdum nibh enim ornare. Accumsan sodales adipiscing fringilla eget nulla. Eget
                                nunc consequat non praesent pharetra nibh arcu vulputate arcu. Auctor venenatis elementum sed
                                tincidunt duis pretium ultrices. Nibh pharetra ut sed ipsum.
                            </p>
                            <Swiper {...SingleService} className="swiper singleServicesSlider">
                                <div className="swiper-wrapper">
                                    <SwiperSlide className="swiper-slide">
                                        <img src={corporateImg2} alt="corporate-img2" />
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <img src={corporateImg3} alt="corporate-img3" />
                                    </SwiperSlide>
                                    <SwiperSlide className="swiper-slide">
                                        <img src={corporateImg4} alt="corporate-img4" />
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                            <div className="diamond-nextbtn-head">
                                <div className="diamond-next-btn">
                                    <Link to="/BlogDetails1" className="diamond-btn next">
                                        <img src={ArrowLeft} alt="arrow-left" />
                                    </Link>
                                    <h3>Window Cleaning</h3>
                                </div>
                                <div className="diamond-next-btn">
                                    <h3>House Cleaning</h3>
                                    <Link to="/BlogDetails3" className="diamond-btn next">
                                        <img src={ArrowRight} alt="arrow-right" />
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

export default BlogDetails2



