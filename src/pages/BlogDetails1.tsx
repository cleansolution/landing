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

const BlogDetails1 = () => {
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
                        <Link to="/BlogDetails1">Things to know choosing a cleaning service.</Link>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== About Section Two ===================================== --> */}
            <section className="blog-section">
                <div className="container">
                    <div className="row blog-two-grid-row">
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
                            <p className="fusce fade_down">It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout. The point of using Lorem Ipsum is
                                that it has a more-or-less normal distribution of letters, as opposed to using am so happy my
                                dear frend so has take possion of my entire souing like these sweet mornng spring whch enjoy the
                                with my whole heart I am alone, and feel the charm of existenc.the spot whch was create For then
                                bliss of souls like mineing.
                            </p>
                            <p className="fusce psum fade_down">Ipsum sit netus nisi sapien vitae nec augue massa. Mi vel penatibus
                                non sit lacus mattis purus. Id sed non cursus sed tristique viverra feugiat egestas dis.
                                Porttitor diam at elementum massa eget et risus. Aliquet sed pulvinar auctor suspendisse mauris
                                arcu nunc. Pellentesque massa iaculis neque tincidunt ut dolor magna nec. In donec pretium in
                                nulla bibendum risus vel.
                            </p>
                            <div className="qoute-box">
                                <h2>Amidst the chaos of life, let your home be a crystal gentle dance of flames and the energy
                                    of creating a haven of pure serenity and magic.</h2>
                                <div className="line_client">
                                    <div className="line"></div>
                                    <h3 className="jordon">By Jordon Smith</h3>
                                </div>
                            </div>
                            <h2 className="ourServicesPrcoes pt-0 fade_down">Donec commodo ac velit integer aliquam tellus
                                pellentesque tincidunt ultricies.</h2>
                            <p className="fusce fade_down">In pharetra lectus porttitor eros massa sit mattis quis.
                                Ultricies
                                sed cras arcu integer nisi aliquam. Nibh consequat dignissim iaculis auctor tortor aliquam.
                                Condimentum orci consectetur risus vel vitae sit ipsum eu amet. Elit risus scelerisque sit
                                semper. Eu faucibus at diam pellentesque tortor bibendum nec ullamcorper. Morbi sem quis
                                porttitor suspendisse hendrerit quis rhoncus porttitor in. Sed eros amet bibendum odio lacus eu.
                                Elit volutpat vitae massa id.
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
                                    <Link to="/BlogDetails2" className="diamond-btn next">
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
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogDetails1