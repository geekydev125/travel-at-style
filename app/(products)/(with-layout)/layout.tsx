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
        <div className="container py-5">
            <div className="row pb-5">
                <div className="col-md-5 d-flex flex-column justify-content-center align-items-center">
                    <img
                        src="/assets/img/airplane.png"
                        alt="Airplane"
                        ref={imgRef}
                        style={{
                            position: 'relative',
                            transition: 'all 1.1s ease-in-out',
                            opacity: isInView ? 1 : 0,
                            left: isInView ? 0 : -200
                        }}
                    />
                </div>
                <div className="col-md-7 d-flex flex-column justify-content-center">
                    <h2 className="display-4 text-center text-custom-dark">
                        {pathname === '/luggage' ? 'LUGGAGE' : 'TRAVEL ACCESSORIES'}
                    </h2>
                </div>
            </div>

            {children}
        </div>
    )
}

export default ProductsLayout