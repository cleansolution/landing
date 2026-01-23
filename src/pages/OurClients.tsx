import React from 'react'
import { Link } from 'react-router-dom';
import ClientImg1 from '../assets/images/our-client/client-img1.jpg';
import ClientImg2 from '../assets/images/our-client/client-img2.jpg';
import ClientImg3 from '../assets/images/our-client/client-img3.jpg';
import ClientImg4 from '../assets/images/our-client/client-img4.jpg';
import ClientImg5 from '../assets/images/our-client/client-img5.jpg';
import ClientImg6 from '../assets/images/our-client/client-img6.jpg';
import ClientImg7 from '../assets/images/our-client/client-img7.jpg';
import ClientImg8 from '../assets/images/our-client/client-img8.jpg';
import ClientImg9 from '../assets/images/our-client/client-img9.jpg';
import ClientImg10 from '../assets/images/our-client/client-img10.jpg';
import ClientImg11 from '../assets/images/our-client/client-img11.jpg';
import ClientImg12 from '../assets/images/our-client/client-img12.jpg';
import ClientImg13 from '../assets/images/our-client/client-img13.jpg';
import ClientImg14 from '../assets/images/our-client/client-img14.jpg';
import ClientImg15 from '../assets/images/our-client/client-img15.jpg';
import ClientImg16 from '../assets/images/our-client/client-img16.jpg';
import ClientImg17 from '../assets/images/our-client/client-img17.jpg';
import ClientImg18 from '../assets/images/our-client/client-img18.jpg';
import Testimonials from '../component/Testimonials.tsx';
import BlogSec1 from '../component/BlogSec1.tsx';

const OurClients: React.FC = () => {
    return (
        <>
            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">Our Clients</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/OurClients">Our Clients</Link>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== About Section Two ===================================== --> */}
            <section className="section-eight">
                <div className="container">
                    <p className="cap-text cost-cal fade_up">HOME RAKSHAK</p>
                    <h2 className="sec-text mazing pb-0 fade_up">Our valuable customers</h2>
                    <div className="clients-main">
                        <img className="flip_left" src={ClientImg1} alt="client-img1" />
                        <img className="flip_left" src={ClientImg2} alt="client-img2" />
                        <img className="flip_left" src={ClientImg3} alt="client-img3" />
                        <img className="flip_left" src={ClientImg4} alt="client-img4" />
                        <img className="flip_left" src={ClientImg5} alt="client-img5" />
                        <img className="flip_left" src={ClientImg6} alt="client-img6" />
                        <img className="flip_left" src={ClientImg7} alt="client-img7" />
                        <img className="flip_left" src={ClientImg8} alt="client-img8" />
                        <img className="flip_left" src={ClientImg9} alt="client-img9" />
                        <img className="flip_left" src={ClientImg10} alt="client-img10" />
                        <img className="flip_left" src={ClientImg11} alt="client-img11" />
                        <img className="flip_left" src={ClientImg12} alt="client-img12" />
                        <img className="flip_left" src={ClientImg13} alt="client-img13" />
                        <img className="flip_left" src={ClientImg14} alt="client-img14" />
                        <img className="flip_left" src={ClientImg15} alt="client-img15" />
                        <img className="flip_left" src={ClientImg16} alt="client-img16" />
                        <img className="flip_left" src={ClientImg17} alt="client-img17" />
                        <img className="flip_left" src={ClientImg18} alt="client-img18" />
                    </div>
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

export default OurClients
