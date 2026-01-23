import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoSvg from '../assets/images/svg/logo.svg';
import menu2 from '../assets/images/svg/menu2.svg';
import CloseIcon from '../assets/images/svg/close-icon.svg';
import dsad from '../assets/images/home/dsad.png';
import DropdownArrow from '../assets/images/svg/dropdown-arrow.svg';
import headphoneIcon from '../assets/images/svg/headphone-icon.svg';
import CrossArrow from '../assets/images/svg/cross-arrow.svg';



const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const menuItems = [
        { label: "Home", link: "#home" },
        { label: "Services", link: "#services" },
        { label: "About Us", link: "#about" },
        { label: "Contact", link: "#contact" }
    ];

    return (
        <>
            {/* Overlay */}
            {menuOpen && <div className="overlay active" onClick={() => setMenuOpen(false)}></div>}
            <header className={`header`} id="top-navbar">
                <div className="header-container">
                    <Link to="/" className="logo">
                        <img src={LogoSvg} alt="Logo" />
                    </Link>

                    <div className="hamburger" id="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        {!menuOpen && <img src={menu2} className="menu-icon" alt="menu2" />}
                        {menuOpen && <img src={CloseIcon} alt="close-icon" className="close-icon" />}
                    </div>

                    <nav className={`nav ${menuOpen ? "open" : ""}`} id="main-menu">

                        <img className="dsad" src={dsad} alt="dsad" />

                        <div className="for-mobile-menu position-relative">
                            <Link to="/" className="mobile-logo">
                                <img src={LogoSvg} alt="Logo" />
                            </Link>
                            <ul className="menu">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.link}
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="nav-actions">
                            <div className="call">
                                <div className="headphone-main">
                                    <img src={headphoneIcon} alt="headphone-icon" />
                                </div>
                                <div className="need-help-main">
                                    <p>Need Help Now?</p>
                                    <a href="tel:+17573058237">+1 (757) 305 8237</a>
                                </div>
                            </div>
                            <a href="#contact" className="btn-quote get-quote-btn">Get A Quote
                                <img src={CrossArrow} alt="cross-arrow" />
                            </a>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header