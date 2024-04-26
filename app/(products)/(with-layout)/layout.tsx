"use client"
import { useRef } from "react";
import { useInView } from "framer-motion";
import { usePathname } from "next/navigation";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
            <Row className="pb-4 pb-md-5">
                <Col xs={4} md={5} className="d-flex flex-column justify-content-center align-items-center">
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
                </Col>
                <Col xs={8} md={7} className="d-flex flex-column justify-content-center">
                    <h3 className="display-2 text-center text-custom-dark mb-0 fw-semibold">
                        {pathname === '/luggage' ? 'Luggage' : 'Travel Accessories'}
                    </h3>
                </Col>
            </Row>

            <section>
                <Row className="gx-2 gx-md-3 gy-4 d-flex flex-row align-items-stretch flex-wrap">
                    {children}
                </Row>
            </section>
        </div>
    )
}

export default ProductsLayout