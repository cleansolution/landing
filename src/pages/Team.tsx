import React from 'react'
import { Link } from 'react-router-dom';
import TeamSection from '../component/TeamSection.tsx';
import Testimonials from '../component/Testimonials.tsx';
import BlogSec1 from '../component/BlogSec1.tsx';

const Team: React.FC = () => {
    return (
        <>
            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">Our Team</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/Team"> Team</Link>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Team Section Two ===================================== --> */}
            <section className="section-eight">
                <div className="container">
                    <p className="cap-text cost-cal fade_up">Our Expert Worker</p>
                    <h2 className="sec-text mazing pb-0 fade_up">We Are Expert Team To Keep Your Vision</h2>
                    <TeamSection />
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
        </>
    )
}

export default Team