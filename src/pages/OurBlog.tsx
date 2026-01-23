import React from 'react'
import { Link } from 'react-router-dom'
import BlogSec1 from '../component/BlogSec1.tsx';

const OurBlog: React.FC = () => {
    return (
        <>
            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">Our Blog</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/OurBlog"> Our Blog</Link>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== About Section Two ===================================== --> */}
            <section className="blog-section">
                <div className="container">
                    <p className="cap-text cost-cal fade_up show">latest news</p>
                    <h2 className="sec-text mazing pb-0 fade_up show">Our Most Recent Posts</h2>
                    <BlogSec1 />
                </div>
            </section>
        </>
    )
}

export default OurBlog