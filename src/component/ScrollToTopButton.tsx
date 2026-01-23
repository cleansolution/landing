import React, { useEffect, useState } from "react";

const ScrollToTopButton: React.FC = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.pageYOffset > 100);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            className={`bottom-top-button ${visible ? "show" : ""}`}
            onClick={scrollToTop}
        >
            ↑
        </button>
    );
};

export default ScrollToTopButton;
