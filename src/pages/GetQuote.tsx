import React from 'react'
import { Link } from 'react-router-dom'
import HowWorkBg from '../assets/images/about/how-to-work-bg.png';
import HowWorkSvg1 from '../assets/images/svg/how-to-work-svg1.svg';
import HowWorkSvg2 from '../assets/images/svg/how-to-work-svg2.svg';
import HowWorkSvg3 from '../assets/images/svg/how-to-work-svg3.svg';
import HowWorkArrow from '../assets/images/svg/how-to-work-arrow.svg';
import CostCalculator from '../component/CostCalculator.tsx'

const GetQuote: React.FC = () => {
    return (
        <>
            {/* <!-- ====================================== About Hero Section ===================================== --> */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">Get Your Quote</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/GetQuote">Get Your Quote</Link>
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Form ===================================== --> */}
            <section className="section-five get-quote-page-section">
                <div className="container">
                    <p className="cap-text cost-cal fade_up">Cost Calculator</p>
                    <h2 className="sec-text fami-cal pb-0 fade_up">Be a Part of Hundreds of Happy Families.</h2>
                    <div className="calculator-box-main get-quote-calculator zoom_in">
                        <CostCalculator />
                    </div>
                </div>
            </section>
            {/* <!-- ====================================== Section Six ===================================== --> */}
            <section className="contact-form-section">
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
        </>
    )
}

export default GetQuote    