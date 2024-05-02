import uniqid from "uniqid"

import { useCartContext } from "@/context/cartContext"

import CartDrawerProductCard from "./CartDrawerProductCard"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function CartProductsList() {
    const { cart } = useCartContext()
    
    return (
        <Container>
            <Row className="gx-3 gy-4">
                {cart.products.map((product) => (
                    <Col xs={6} key={uniqid()}>
                        <CartDrawerProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default CartProductsList