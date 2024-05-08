"use client";
import uniqid from "uniqid";

import { useCartContext } from "@/context/cartContext"

import DrawerProductCardPlaceholder from "./DrawerProductCardPlaceholder";

import Col from "react-bootstrap/Col";

interface Props {
    displayOn: 'checkout' | 'drawer'
}

function CartProductListPlaceholder({
    displayOn
}: Props) {
    const { cart } = useCartContext()
    return (
        <>
            {
                [...Array(cart.products.length)].map((el) => (
                    <Col
                        xs={6}
                        sm={displayOn === "checkout" && 4}
                        md={displayOn === "checkout" && 3}
                        lg={displayOn === "checkout" && 2}
                        key={uniqid()}>
                        <DrawerProductCardPlaceholder />
                    </Col>
                ))

            }
        </>
    )
}

export default CartProductListPlaceholder