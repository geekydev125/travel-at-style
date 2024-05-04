"use client"
import { useRef } from "react";
import { useInView } from "framer-motion";

function FlyingAirplane() {
    const imgRef = useRef(null);
    const isInView = useInView(imgRef, { once: true })

    return (
        <img
            src="/assets/img/airplane.png"
            alt="Airplane"
            ref={imgRef}
            className="img-fluid"
            style={{
                position: 'relative',
                transition: 'all 1.1s ease-in-out',
                opacity: isInView ? 1 : 0,
                left: isInView ? 0 : -200
            }}
        />
    )
}

export default FlyingAirplane