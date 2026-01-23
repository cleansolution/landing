import React from 'react'
import { Link } from 'react-router-dom';
import GirlImg from '../assets/images/faq/girl-img.png';
import faqData from '../data/faqData.json'
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import BlogSec1 from '../component/BlogSec1.tsx';


const Faq: React.FC = () => {
    return (
        <>
            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">FAQs</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/Faq">FAQs</Link>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Nine ===================================== --> */}
            <section className="section-eight testimonial-page">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <p className="cap-text fade_in">EXPLORE THE FEATURES</p>
                            <h2 className="sec-text fade_up pb-0">Few Of The Problems We Solve</h2>
                            <div className="accordion" id="accordionExample">
                                {faqData.map((item, index) => (
                                    <div className="accordion-item" key={index}>
                                        <h2 className="accordion-header" id={`heading${item.id}`}>
                                            <button
                                                className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#collapse${item.id}`}
                                                aria-expanded={index === 0 ? "true" : "false"}
                                                aria-controls={`collapse${item.id}`}
                                            >
                                                {item.question}
                                            </button>
                                        </h2>

                                        <div
                                            id={`collapse${item.id}`}
                                            className={`accordion-collapse collapse ${index === 0 ? "show" : ""
                                                }`}
                                            aria-labelledby={`heading${item.id}`}
                                            data-bs-parent="#accordionExample"
                                        >
                                            <div className="accordion-body">{item.answer}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 pulm-multi-main">
                            <img className="pulm-multi" src={GirlImg} alt="girl-img" />
                        </div>
                    </div>
                </div>
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

export default Faq