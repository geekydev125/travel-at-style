"use client"
import dynamic from "next/dynamic";

import { useCartContext } from "@/context/cartContext"
import { useCartDrawerContext } from "@/context/cartDrawerContext";

import CartTotal from "@/components/Cart/CartTotal";
import CartEmpty from "@/components/Cart/CartEmpty";
import CartIconWithBadge from "@/components/Cart/CartIconWithBadge";
import ProceedToCheckoutButton from "@/components/Common/Buttons/ProceedToCheckoutButton";
import CartProductListPlaceholder from "@/components/Common/Placeholders/Cart/CartProductListPlaceholder";
import ClearCart from "@/components/Cart/ClearCart";

import Offcanvas from "react-bootstrap/Offcanvas"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const DynamicCartProductsList = dynamic(() => import("@/components/Cart/CartProductsList"), {
    loading: () => <CartProductListPlaceholder displayOn="drawer" />,
    ssr: false
})

function Drawer() {
    const { cart } = useCartContext()
    const { showDrawer, handleClose } = useCartDrawerContext()

    return (
        <Offcanvas show={showDrawer} onHide={handleClose} placement="end" >
            <Offcanvas.Header closeButton className="background-light-gradient">
                <Offcanvas.Title>
                    <h5 className="mb-0 display-5 fw-semibold">Shopping Cart</h5>
                </Offcanvas.Title>
                <CartIconWithBadge iconContainerClasses="ms-1" cartIconHeight="25px" cartIconWidth="25px" />
            </Offcanvas.Header>
            <Offcanvas.Body className="position-relative" style={{ padding: '0 0 100px 0' }}>
                {cart.products.length > 0 && (
                    <div className="w-100 bg-white position-sticky top-0 ps-3 py-1 border-bottom">

                        <ClearCart />

                    </div>
                )}

                {
                    cart.products.length > 0
                        ? (
                            <Container>
                                <Row className="gx-3 gy-4 pt-2">
                                    <DynamicCartProductsList displayOn="drawer" />
                                </Row>
                            </Container>
                        )
                        : <CartEmpty handleDrawerClose={handleClose} />
                }
            </Offcanvas.Body>

            <div className="w-100 px-3 py-4 position-absolute bottom-0 background-light-gradient d-flex flex-row justify-content-between align-items-center">
                {
                    cart.products.length > 0 && (
                        <>
                            <CartTotal />

                            <ProceedToCheckoutButton handleDrawerClose={handleClose} />
                        </>
                    )
                }
            </div>
        </Offcanvas>
    )
}

export default Drawer