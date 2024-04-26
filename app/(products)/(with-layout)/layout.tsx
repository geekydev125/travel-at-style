"use client"
import { useRef } from "react";
import { useInView } from "framer-motion";
import { usePathname } from "next/navigation";

interface Props {
    children: React.ReactNode
}

function ProductsLayout({
    children
}: Props) {
    const pathname = usePathname();
    const imgRef = useRef(null);
	const isInView = useInView(imgRef, { once: true })

    return (
        <div className="container pt-4 pb-5 py-md-5">
            <div className="row pb-4 pb-md-5">
                <div className="col-4 col-md-5 d-flex flex-column justify-content-center align-items-center">
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
                </div>
                <div className="col-8 col-md-7 d-flex flex-column justify-content-center">
                    <h3 className="display-2 text-center text-custom-dark mb-0 fw-semibold">
                        {pathname === '/luggage' ? 'Luggage' : 'Travel Accessories'}
                    </h3>
                </div>
            </div>

            {children}
        </div>
    )
}

export default ProductsLayout