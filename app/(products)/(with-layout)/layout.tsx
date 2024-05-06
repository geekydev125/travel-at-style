import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import LuggageAccessoriesLayoutTitle from "@/components/Pages/LuggageAccessories/LuggageAccessoriesLayoutTitle";
import FlyingAirplane from "@/components/Pages/LuggageAccessories/FlyingAirplane";

interface Props {
    children: React.ReactNode
}

function ProductsLayout({
    children
}: Props) {
    return (
        <Container as='div' className="pt-4 pb-5 py-md-5">
            <Row className="pb-4 pb-md-5">
                <Col xs={4} md={5} className="d-flex flex-column justify-content-center align-items-center">
                    <FlyingAirplane />
                </Col>
                <Col xs={8} md={7} className="d-flex flex-column justify-content-center">
                    <LuggageAccessoriesLayoutTitle />
                </Col>
            </Row>

            <Row as='section' className="gx-2 gx-md-3 gy-4 d-flex flex-row align-items-stretch flex-wrap">
                {children}
            </Row>
        </Container>
    )
}

export default ProductsLayout