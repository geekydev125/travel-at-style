import uniqid from "uniqid"

import { useCartContext } from "@/context/cartContext"

import DrawerProductCard from "./Drawer/DrawerProductCard"

import Col from "react-bootstrap/Col"

interface Props {
    displayOn: 'checkout' | 'drawer'
}

function CartProductsList({
    displayOn
}: Props) {
    const { cart } = useCartContext()

    return (
        <>
            {cart.products.map((product) => (
                <Col
                    xs={6}
                    sm={displayOn === "checkout" && 4}
                    md={displayOn === "checkout" && 3}
                    lg={displayOn === "checkout" && 2}
                    key={uniqid()}>
                    <DrawerProductCard product={product} />
                </Col>
            ))}
        </>
    )
}

export default CartProductsList