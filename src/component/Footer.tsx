import { Link } from 'react-router-dom';
import WhiteLogoSvg from '../assets/images/svg/white-logo.svg';
import facebook from "../assets/images/svg/facebook.svg";
import tiktok from '../assets/images/svg/tiktok.svg';
import insta from '../assets/images/svg/insta.svg';

const Footer = () => {
    return (
        <>
            {/* <!-- ====================================== Footer Section ===================================== --> */}
            <footer style={{
                backgroundColor: '#184A8C',
                color: '#ffffff',
                padding: '80px 0 0 0',
                position: 'relative'
            }}>
                <div className="container">
                    <div className="row">
                        {/* Column 1: Logo & About */}
                        <div className="col-lg-3 col-md-6 mb-5">
                            <Link to="/" style={{ display: 'inline-block', marginBottom: '25px' }}>
                                <img src={WhiteLogoSvg} alt="Clean Solutions" style={{ height: '45px', filter: 'brightness(0) invert(1)' }} />
                            </Link>
                            <p style={{ 
                                color: 'rgba(255, 255, 255, 0.85)', 
                                fontSize: '15px', 
                                lineHeight: '1.8', 
                                marginBottom: '30px', 
                                paddingRight: '20px'
                            }}>
                                Professional cleaning services tailored to your needs. We deliver excellence in every detail for your home and office.
                            </p>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                <a href="https://www.facebook.com" className="social-icon" style={{
                                    width: '40px', 
                                    height: '40px', 
                                    backgroundColor: 'rgba(255,255,255,0.1)', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    borderRadius: '50%',
                                    transition: '0.3s',
                                    border: '1px solid rgba(255,255,255,0.2)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#ffffff';
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                    e.currentTarget.querySelector('img').style.filter = 'brightness(0) saturate(100%)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.querySelector('img').style.filter = 'brightness(0) invert(1)';
                                }}
                                >
                                    <img src={facebook} alt="facebook" style={{ width: '16px', filter: 'brightness(0) invert(1)', transition: '0.3s' }} />
                                </a>
                                <a href="https://www.tiktok.com" className="social-icon" style={{
                                    width: '40px', 
                                    height: '40px', 
                                    backgroundColor: 'rgba(255,255,255,0.1)', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    borderRadius: '50%',
                                    transition: '0.3s',
                                    border: '1px solid rgba(255,255,255,0.2)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#ffffff';
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                    e.currentTarget.querySelector('img').style.filter = 'brightness(0) saturate(100%)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.querySelector('img').style.filter = 'brightness(0) invert(1)';
                                }}
                                >
                                    <img src={tiktok} alt="tiktok" style={{ width: '16px', filter: 'brightness(0) invert(1)', transition: '0.3s' }} />
                                </a>
                                <a href="https://www.instagram.com" className="social-icon" style={{
                                    width: '40px', 
                                    height: '40px', 
                                    backgroundColor: 'rgba(255,255,255,0.1)', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center', 
                                    borderRadius: '50%',
                                    transition: '0.3s',
                                    border: '1px solid rgba(255,255,255,0.2)'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = '#ffffff';
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                    e.currentTarget.querySelector('img').style.filter = 'brightness(0) saturate(100%)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)';
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.querySelector('img').style.filter = 'brightness(0) invert(1)';
                                }}
                                >
                                    <img src={insta} alt="instagram" style={{ width: '16px', filter: 'brightness(0) invert(1)', transition: '0.3s' }} />
                                </a>
                            </div>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div className="col-lg-2 col-md-6 mb-5 offset-lg-1">
                            <h4 style={{ 
                                fontSize: '20px', 
                                fontWeight: '700', 
                                marginBottom: '30px',
                                position: 'relative',
                                display: 'inline-block',
                                color: '#fff'
                            }}>
                                Quick Links
                            </h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {['Home', 'Services', 'About Us', 'Contact'].map((item, index) => (
                                    <li key={index} style={{ marginBottom: '15px' }}>
                                        <Link to={item === 'Home' ? '/' : `/${item.replace(' ', '')}`} style={{ 
                                            color: 'rgba(255,255,255,0.75)', 
                                            textDecoration: 'none', 
                                            transition: '0.3s', 
                                            fontSize: '15px',
                                            fontWeight: '500',
                                            display: 'inline-block'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = '#fff';
                                            e.currentTarget.style.transform = 'translateX(5px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = 'rgba(255,255,255,0.75)';
                                            e.currentTarget.style.transform = 'translateX(0)';
                                        }}
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Working Hours */}
                        <div className="col-lg-3 col-md-6 mb-5">
                            <h4 style={{ 
                                fontSize: '20px', 
                                fontWeight: '700', 
                                marginBottom: '30px',
                                position: 'relative',
                                display: 'inline-block',
                                color: '#fff'
                            }}>
                                Working Hours
                            </h4>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                <li style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
                                    <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '15px' }}>Mon - Fri</span>
                                    <span style={{ fontWeight: '600', fontSize: '15px', color: '#fff' }}>8:00 AM - 5:00 PM</span>
                                </li>
                                <li style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>
                                    <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '15px' }}>Saturday</span>
                                    <span style={{ fontWeight: '600', fontSize: '15px', color: '#fff' }}>8:00 AM - 3:00 PM</span>
                                </li>
                                <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: '15px' }}>Sunday</span>
                                    <span style={{ color: '#ff6b6b', fontWeight: '700', fontSize: '15px' }}>Close</span>
                                </li>
                            </ul>
                        </div>

                        {/* Column 4: Contact */}
                        <div className="col-lg-3 col-md-6 mb-5">
                            <h4 style={{ 
                                fontSize: '20px', 
                                fontWeight: '700', 
                                marginBottom: '30px',
                                position: 'relative',
                                display: 'inline-block',
                                color: '#fff'
                            }}>
                                Contact Us
                            </h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <div style={{ 
                                        minWidth: '40px', 
                                        height: '40px', 
                                        borderRadius: '50%', 
                                        background: 'rgba(255,255,255,0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <span style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '12px', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Call Us</span>
                                        <a href="tel:+17573058237" style={{ color: '#fff', fontSize: '16px', fontWeight: '700', textDecoration: 'none', whiteSpace: 'nowrap' }}>(757) 305-8237</a>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '15px' }}>
                                    <div style={{ 
                                        minWidth: '40px', 
                                        height: '40px', 
                                        borderRadius: '50%', 
                                        background: 'rgba(255,255,255,0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <div style={{ overflow: 'hidden' }}>
                                        <span style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '12px', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email Us</span>
                                        <a href="mailto:info.cleansolutions91@gmail.com" style={{ color: '#fff', fontSize: '14px', fontWeight: '500', textDecoration: 'none' }}>info.cleansolutions91@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Copyright Section */}
                    <div style={{ 
                        borderTop: '1px solid rgba(255,255,255,0.1)', 
                        padding: '25px 0', 
                        marginTop: '10px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '20px'
                    }}>
                        <p style={{ margin: 0, color: 'rgba(255,255,255,0.6)', fontSize: '14px' }}>
                            © {new Date().getFullYear()} Clean Solutions CO. LLC. All Rights Reserved.
                        </p>
                        <ul style={{ 
                            listStyle: 'none', 
                            padding: 0, 
                            margin: 0, 
                            display: 'flex', 
                            gap: '25px',
                            flexWrap: 'wrap'
                        }}>
                            <li><Link to="/Privacy" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px' }}>Privacy Policy</Link></li>
                            <li><Link to="/Terms" style={{ color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontSize: '14px' }}>Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
