import React from 'react'
import { Link } from 'react-router-dom';
import SearchIcon from '../assets/images/svg/search-icon.svg';
import RecentPostsImg1 from '../assets/images/blog/recent-posts-img1.jpg';
import RecentPostsImg2 from '../assets/images/blog/recent-posts-img2.jpg';
import RecentPostsImg3 from '../assets/images/blog/recent-posts-img3.jpg';
import RecentPostsImg4 from '../assets/images/blog/recent-posts-img4.jpg';
import RecentPostsImg5 from '../assets/images/blog/recent-posts-img5.jpg';
import AddImg from '../assets/images/house-cleaning/add-img.jpg';
import downloadImg from '../assets/images/house-cleaning/download.png';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';
import BlogImg1 from "../assets/images/blog/blog-img1.jpg";
import BlogImg2 from "../assets/images/blog/blog-img2.jpg";
import BlogImg3 from "../assets/images/blog/blog-img3.jpg";
import BlogImg4 from "../assets/images/blog/blog-img4.jpg";
import BlogImg5 from "../assets/images/blog/blog-img5.jpg";
import BlogImg6 from "../assets/images/blog/blog-img6.jpg";
import blogData from '../data/blogData.json';

/* ---------------- Image Map ---------------- */
const blogImages: Record<string, string> = {
    "blog-img1.jpg": BlogImg1,
    "blog-img2.jpg": BlogImg2,
    "blog-img3.jpg": BlogImg3,
    "blog-img4.jpg": BlogImg4,
    "blog-img5.jpg": BlogImg5,
    "blog-img6.jpg": BlogImg6,
};

interface BlogItem {
    id: number;
    image: string;
    date: string;
    title: string;
    desc: string;
    link: string;
}


const Blog2: React.FC = () => {
    return (
        <>
            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">Our Blog</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/Blog2">Blog2</Link>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== About Section Two ===================================== --> */}
            <section className="blog-section">
                <div className="container">
                    <div className="row blog-two-grid-row">
                        <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-12">
                            <p className="cap-text cost-cal fade_up">latest news</p>
                            <h2 className="sec-text mazing pb-0 fade_up">Our Most Recent Posts</h2>
                            <div className="row home-blog-row blogPage-row2">
                                {blogData.map((blog: BlogItem) => (
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6" key={blog.id}>
                                        <Link to={blog.link} className="blog-box-main zoom_in">
                                            <div className="blog-img-main">
                                                <img
                                                    src={blogImages[blog.image] ?? BlogImg1}
                                                    alt={blog.title}
                                                />
                                                <h3 className="blog-date">{blog.date}</h3>
                                            </div>
                                            <div className="blog-containe-main">
                                                <h2>{blog.title}</h2>
                                                <p>{blog.desc}</p>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
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

export default Blog2