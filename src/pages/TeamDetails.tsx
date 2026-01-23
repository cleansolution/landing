import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SingleTeam from "../assets/images/team/single-team.png";
import CrossArrow from "../assets/images/svg/cross-arrow.svg";
import Facebook from "../assets/images/svg/facebook.svg";
import Insta from "../assets/images/svg/insta.svg";
import Whatsapp from "../assets/images/svg/whatsapp.svg";
import Twitter from "../assets/images/svg/twitter.svg";
import DropdownArrow from "../assets/images/svg/dropdown-arrow.svg";
import Testimonials from "../component/Testimonials.tsx";
import BlogSec1 from "../component/BlogSec1.tsx";

type ProgressItem = {
    title: string;
    percentage: number;
};

const progressItems: ProgressItem[] = [
    { title: "Repair Quality", percentage: 74 },
    { title: "Happy Customer", percentage: 94 },
    { title: "Support Centre", percentage: 86 },
    { title: "Cleaning", percentage: 70 },
];
const TeamDetails: React.FC = () => {
    /** ---------------- Progress Bar Animation ---------------- */
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const barsRef = useRef<(HTMLDivElement | null)[]>([]);
    const animationDone = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || animationDone.current) return;

            const sectionTop = sectionRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 50) {
                animationDone.current = true;

                barsRef.current.forEach((bar) => {
                    if (!bar) return;

                    const percentage = Number(bar.dataset.percentage) || 0;
                    const progressContent = bar.querySelector<HTMLDivElement>(".progress-content");
                    const numberMark = bar.querySelector<HTMLDivElement>(".progress-number-mark");
                    const percentText = bar.querySelector<HTMLElement>(".percent");

                    if (!progressContent || !numberMark || !percentText) return;

                    const duration = 2000;
                    const startTime = performance.now();

                    const animate = (now: number) => {
                        const progress = Math.min((now - startTime) / duration, 1);
                        const value = Math.round(percentage * progress);

                        progressContent.style.width = `${value}%`;
                        numberMark.style.left = `${value}%`;
                        percentText.textContent = `${value}%`;

                        if (progress < 1) requestAnimationFrame(animate);
                    };

                    requestAnimationFrame(animate);
                });

                window.removeEventListener("scroll", handleScroll);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    /** ---------------- Dropdown ---------------- */
    const [cleanType, setCleanType] = useState<string>("Full Cleaning");
    const [openDropdown, setOpenDropdown] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpenDropdown(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const cleanTypeOptions: string[] = [
        "Full Cleaning",
        "House Cleaning",
        "Kitchen Cleaning",
        "Office Cleaning",
        "Window Cleaning",
        "Corporate Cleaning",
        "Carpet Cleaning",
    ];

    return (
        <>
            {/* Hero */}
            <section className="heroSection">
                <div className="container">
                    <h1 className="img-header-text fade_down">Our Team</h1>
                    <div className="breadcrumb-group fade_up">
                        <Link to="/">HOME / </Link>
                        <Link to="/Team">Team / </Link>
                        <Link to="/TeamDetails"> Richard Powel</Link>
                    </div>
                </div>
            </section>
            {/* Team Details */}
            <section className="section-eight">
                <div className="container">
                    <div className="single-1" id="single-1">
                        <div className="row gy-md-3 gy-sm-3">
                            <div className="col-lg-4 position-relative">
                                <div className="team-single-box">
                                    <div className="single-team-main">
                                        <img className="single-team" src={SingleTeam} alt="single-team" />
                                    </div>
                                    <div className="team-contact-1">
                                        <h2 className="rich">Richard Powel</h2>
                                        <p className="clane">Cleaner</p>
                                        <ul className="team-meta mb-0">
                                            <li>
                                                <span>Phone:</span>
                                                <a href="tel:+12483578866">+1 (248) 357 8866</a>
                                            </li>
                                            <li>
                                                <span>Email:</span>
                                                <a href="mailto:homerakshak@mail.com">homerakshak@mail.com</a>
                                            </li>
                                            <li>
                                                <span>Website:</span>
                                                <a href="https://up2client.com/envato/home-rakshak/handyman/html/preview/index-slider.html">
                                                    www.homeraksak.com
                                                </a>
                                            </li>
                                            <li>
                                                <span>Experience:</span>
                                                <p>7+ Years</p>
                                            </li>
                                        </ul>
                                        <div className="single-team-social">
                                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                                <img src={Facebook} alt="facebook" />
                                            </a>
                                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                                                <img src={Insta} alt="insta" />
                                            </a>
                                            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                                <img src={Whatsapp} alt="whatsapp" />
                                            </a>
                                            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                                <img src={Twitter} alt="twitter" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="entry-content-1 mt-0" data-aos="fade-left">
                                    <div className="personal-main">
                                        <h2>Personal Information</h2>
                                        <p>
                                            Volutpat et malesuada maecenas amet. Ultrices volutpat auctor euismod eget pulvinar
                                            nulla porttitor. Faucibus faucibus consectetur et tellus magnis. Nunc proin mauris
                                            enim duis aliquet fringilla. Erat semper amet turpis cursus. Vel tellus tellus risus
                                            eu lacus volutpat morbi. Cursus tincidunt urna condimentum egestas integer.
                                        </p>
                                        <p className="menu-1">
                                            Purus auctor eu rhoncus mi enim facilisi. In suspendisse libero suspendisse lacinia
                                            vulputate faucibus fusce. Blandit ultrices morbi eu rhoncus amet at. Placerat in mi id
                                            dolor odio nulla. Feugiat in volutpat iaculis sit. Tincidunt gravida enim eget arcu
                                            turpis sed nunc metus est. Purus sed elementum tristique sit malesuada sagittis odio.
                                            Ipsum dolor enim nulla sed nulla dignissim
                                        </p>
                                        <div id="first-sec" ref={sectionRef}>
                                            <h2>Professional Skills</h2>
                                            <p>
                                                Volutpat et malesuada maecenas amet. Ultrices volutpat auctor euismod eget pulvinar
                                                nulla porttitor. Faucibus faucibus consectetur et tellus magnis. Nunc proin mauris
                                                enim duis aliquet fringilla. Erat semper amet turpis cursus. Vel tellus tellus risus
                                                eu lacus volutpat morbi. Cursus tincidunt urna condimentum egestas integer.
                                            </p>
                                            {progressItems.map((item, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`progress-bar ${idx === progressItems.length - 1 ? "mb-0" : ""}`}
                                                    data-percentage={item.percentage}
                                                    ref={(el) => {
                                                        barsRef.current[idx] = el;
                                                    }}
                                                >
                                                    <h3 className="progress-title-holder">
                                                        <span className="progress-title">{item.title}</span>
                                                        <span className="progress-number-wrapper">
                                                            <span className="progress-number-mark">
                                                                <span className="percent"></span>
                                                            </span>
                                                        </span>
                                                    </h3>
                                                    <div className="progress-content-outter">
                                                        <div className="progress-content" style={{ width: "0%" }}></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <h2>Contact Me</h2>
                                        <div className="contac-form-main contact-form-1 zoom_in">
                                            <div className="calcult-from-grid contac-form">
                                                <div>
                                                    <h3 className="input-label-text">Full Name*</h3>
                                                    <input type="text" placeholder="Enter your full name" name="full name" autoComplete="off" />
                                                </div>
                                                <div>
                                                    <h3 className="input-label-text">email address*</h3>
                                                    <input type="email" placeholder="Enter your email" name="email" autoComplete="off" />
                                                </div>
                                                <div>
                                                    <h3 className="input-label-text">phone number*</h3>
                                                    <input type="text" placeholder="Enter phone number" name="phone" autoComplete="off" />
                                                </div>
                                                <div>
                                                    <h3 className="input-label-text">choose cleaning area*</h3>
                                                    {/* Dropdown */}
                                                    <div ref={dropdownRef} className="input-main input-mainteam">
                                                        <button
                                                            type="button"
                                                            className="formDropDown"
                                                            onClick={() => setOpenDropdown((prev) => !prev)}
                                                        >
                                                            {cleanType}
                                                            <img src={DropdownArrow} alt="toggle" />
                                                        </button>

                                                        {openDropdown && (
                                                            <ul className="formDropDown-ul-list">
                                                                {cleanTypeOptions.map((item) => (
                                                                    <li key={item}>
                                                                        <button
                                                                            type="button"
                                                                            onClick={() => {
                                                                                setCleanType(item);
                                                                                setOpenDropdown(false);
                                                                            }}
                                                                        >
                                                                            {item}
                                                                        </button>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="your-message-input">
                                                <h3 className="input-label-text">your message</h3>
                                                <input type="text" placeholder="Write here" name="message" autoComplete="off" />
                                            </div>
                                            <div className="get-cost-estimate send-main-btn">
                                                <button className="btn-quote">
                                                    Send Message
                                                    <img src={CrossArrow} alt="cross-arrow" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Testimonials */}
            <section className="section-nine pt-0">
                <Testimonials />
            </section>
            {/* Blog */}
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
    );
};
export default TeamDetails;
