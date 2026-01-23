import React, { useState, useRef, useEffect } from "react";
import DropdownArrow from '../assets/images/svg/dropdown-arrow.svg';
import CrossArrow from "../assets/images/svg/cross-arrow.svg";

const CostCalculator: React.FC = () => {

    const [service, setService] = useState("Residential Cleaning");
    const [cleanType, setCleanType] = useState("Full Cleaning");
    const [openDropdown, setOpenDropdown] = useState<"service" | "clean" | null>(null);

    const dropdownRef1 = useRef<HTMLDivElement | null>(null);
    const dropdownRef2 = useRef<HTMLDivElement | null>(null);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                (dropdownRef1.current && !dropdownRef1.current.contains(e.target as Node)) &&
                (dropdownRef2.current && !dropdownRef2.current.contains(e.target as Node))
            ) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const serviceOptions = [
        "Residential Cleaning",
        "House Cleaning",
        "Kitchen Cleaning",
        "Office Cleaning",
        "Window Cleaning",
        "Corporate Cleaning",
        "Carpet Cleaning",
    ];

    const cleanTypeOptions = [
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
            <div className="calcult-from-grid">
                {/* --- SERVICE DROPDOWN --- */}
                <div>
                    <h3 className="input-label-text">Choose a Service</h3>
                    <div className="input-main" ref={dropdownRef1}>
                        <div className="wrapper">
                            <div
                                className="formDropDown"
                                onClick={() =>
                                    setOpenDropdown(openDropdown === "service" ? null : "service")
                                }
                            >
                                {service}
                                <img
                                    className={`arrow-icon-form ${openDropdown === "service" ? "up" : ""}`}
                                    src={DropdownArrow}
                                    alt="arrow"
                                />
                            </div>

                            {openDropdown === "service" && (
                                <div className="position-relative">
                                    <ul className="formDropDown-ul-list">
                                        {serviceOptions.map((item, index) => (
                                            <li
                                                key={index}
                                                onClick={() => {
                                                    setService(item);
                                                    setOpenDropdown(null);
                                                }}
                                            >
                                                <button className="ashb">{item}</button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* --- CLEAN TYPE DROPDOWN --- */}
                <div>
                    <h3 className="input-label-text">TYPE OF CLEAN</h3>
                    <div className="input-main" ref={dropdownRef2}>
                        <div className="wrapper">
                            <div
                                className="formDropDown"
                                onClick={() =>
                                    setOpenDropdown(openDropdown === "clean" ? null : "clean")
                                }
                            >
                                {cleanType}
                                <img
                                    className={`arrow-icon-form ${openDropdown === "clean" ? "up" : ""}`}
                                    src={DropdownArrow}
                                    alt="arrow"
                                />
                            </div>

                            {openDropdown === "clean" && (
                                <div className="position-relative">
                                    <ul className="formDropDown-ul-list">
                                        {cleanTypeOptions.map((item, index) => (
                                            <li
                                                key={index}
                                                onClick={() => {
                                                    setCleanType(item);
                                                    setOpenDropdown(null);
                                                }}
                                            >
                                                <button className="ashb">{item}</button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* --- TOTAL FLOOR AREA --- */}
                <div>
                    <h3 className="input-label-text">TOTAL FLOOR AREA</h3>
                    <input type="text" placeholder="ex. 1590 sq ft" />
                </div>

                {/* --- NAME --- */}
                <div>
                    <h3 className="input-label-text">Your Name</h3>
                    <input type="text" placeholder="Enter your full name" />
                </div>

                {/* --- ZIP CODE --- */}
                <div>
                    <h3 className="input-label-text">zip code</h3>
                    <input type="text" placeholder="Your area code" />
                </div>

                {/* --- EMAIL --- */}
                <div>
                    <h3 className="input-label-text">email address</h3>
                    <input type="email" placeholder="Enter your email address" />
                </div>
            </div>

            {/* --- BUTTON SECTION --- */}
            <div className="get-cost-estimate">
                <button className="btn-quote">
                    Get Cost Estimate
                    <img src={CrossArrow} alt="cross-arrow" />
                </button>
                <p className="fessional send-info">
                    Submit this information and we will send you the cost for the service.
                </p>
            </div>
        </>
    );
};

export default CostCalculator;
