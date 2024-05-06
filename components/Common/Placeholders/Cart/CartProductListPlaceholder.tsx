"use client";
import uniqid from "uniqid";

import { useCartContext } from "@/context/cartContext"

import DrawerProductCardPlaceholder from "./DrawerProductCardPlaceholder";

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";

function CartProductListPlaceholder() {
    const { getCartTotalProducts } = useCartContext()
    return (
        <Container>
            <Row className="gx-3 gy-4 pt-2">
                {
                    [...Array(getCartTotalProducts())].map((el) => (
                        <Col xs={6} key={uniqid()}>
                            <DrawerProductCardPlaceholder />
                        </Col>
                    ))

                }

            </Row>
        </Container>
    )
}

export default CartProductListPlaceholder