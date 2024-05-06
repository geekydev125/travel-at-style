"use client";
import { useRef } from "react";

import { useInView } from "framer-motion"

function AnimatedSteamerImg() {
    const imgRef = useRef(null);
    const isInView = useInView(imgRef, { once: true })

    return (
        <>
            <img
                ref={imgRef}
                style={{
                    transform: isInView ? "scale(1)" : "scale(0)",
                    transition: 'transform 1.1s ease-in-out',
                }}
                className="img-fluid"
                src="/assets/img/steamers/besteam-blue-shadow-close-up.png"
                alt="Steamer"
            />
        </>
    )
}

export default AnimatedSteamerImg