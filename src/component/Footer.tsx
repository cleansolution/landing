import { Link } from 'react-router-dom';
import WhiteLogoSvg from '../assets/images/svg/white-logo.svg';
import CallWhite from '../assets/images/svg/callWhite.svg';
import facebook from "../assets/images/svg/facebook.svg";
import twitter from '../assets/images/svg/twitter.svg';
import insta from '../assets/images/svg/insta.svg';
import whatsapp from '../assets/images/svg/whatsapp.svg';

const Footer = () => {
    return (
        <>
            {/* <!-- ====================================== Footer Section ===================================== --> */}
            <footer>
                <div className="container">
                    <div className="row footer-row-quick">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                            <h2 className="working-hours">Working Hours</h2>
                            <div className="timing-hrw pt-0">
                                <p>Mon - Fri</p>
                                <p>8:00 AM - 5:00 PM</p>
                            </div>
                            <div className="timing-hrw">
                                <p>Saturday</p>
                                <p>8:00 AM - 3:00 PM</p>
                            </div>
                            <div className="timing-hrw border-0 pb-0">
                                <p>Sunday</p>
                                <p>Close</p>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 quicklinks-main">
                            <h2 className="working-hours">Quick Links</h2>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/Services">Services</Link></li>
                                <li><Link to="/About">About Us</Link></li>
                                <li><Link to="/Contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="media-logo-call-footer fade_up show">
                        <Link to="/">
                            <img src={WhiteLogoSvg} alt="white-logo" />
                        </Link>
                        <div className="call-detl">
                            <div className="img-main-call">
                                <img src={CallWhite} alt="callWhite" />
                            </div>
                            <div>
                                <p>CONTACT US</p>
                                <a href="tel:+17573058237">+1 (757) 305 8237</a>
                            </div>
                        </div>
                        <div className="footer-med-icons-main">
                            <a href="https://www.facebook.com" className="footer-med-icons">
                                <img src={facebook} alt="facebook" />
                            </a>
                            <a href="https://x.com" className="footer-med-icons">
                                <img src={twitter} alt="twiiter" />
                            </a>
                            <a href="https://www.instagram.com" className="footer-med-icons">
                                <img src={insta} alt="insta" />
                            </a>
                        </div>
                    </div>
                    <div className="copyrights-main">
                        <p>Copyright © {new Date().getFullYear()} All Rights Reserved by Clean Solution CO. LLC
                        </p>
                        <p>Privacy Policy | Terms &amp; Conditions | Made with 🤍 Helice Digital Solutions LLC</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer