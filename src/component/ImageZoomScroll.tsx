import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PersonTakingCare from "../assets/images/expand-img/person-taking-care.jpg";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ImageZoomScroll: React.FC = () => {
    const imageRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const imageEl = imageRef.current;
        if (!imageEl) return;

        const tween = gsap.to(imageEl, {
            scale: 1.6,
            ease: "none",
            scrollTrigger: {
                trigger: imageEl,
                start: "top 70%",
                end: "bottom top+=50%",
                scrub: true,
            },
        });

        return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
        };
    }, []);

    return (
        <div className="zoom-trigger">
            <div className="expand-img-main">
                <img
                    ref={imageRef}
                    src={PersonTakingCare}
                    className="zoom-image"
                    alt="zoom"
                    style={{ transformOrigin: "center center" }}
                />
            </div>
        </div>
    );
};

export default ImageZoomScroll;
