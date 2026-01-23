import React from 'react'
import { Link } from 'react-router-dom'
import OopsErrorGif from '../assets/images/error/OopsError.gif';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';

const NotFound: React.FC = () => {
    return (
        <>
            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">404 Page</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/NotFound">404 Page</Link>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Nine ===================================== --> */}
            <section className="section-eight testimonial-page">
                <div className="container">
                    <p className="cap-text cost-cal fade_up">404 ERROR</p>
                    <h2 className="sec-text mazing  fade_up">Oops ! The Page Not Found.</h2>
                    <p className="sec-sub-text scetur fade_up">We apologize for the inconvenience. You can use our search bar to
                        find what you're looking for, or contact us for further assistance.</p>
                    <div className="error-img-btn">
                        <img className="error-img" src={OopsErrorGif} alt="error" />
                        <Link to="/" className="btn-quote">Back To Home
                            <img src={CrossArrow} alt="cross-arrow" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NotFound