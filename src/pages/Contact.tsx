import React from 'react'
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
    return (
        <>
            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">Contact Us</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/Contact">Contact Us</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact