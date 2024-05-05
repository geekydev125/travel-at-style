"use client"
import { useCartContext } from "@/context/cartContext"
import { useCartDrawerContext } from "@/context/cartDrawerContext";

import CartTotal from "@/components/Cart/CartTotal";
import CartEmpty from "@/components/Cart/CartEmpty";
import CartProductsList from "@/components/Cart/CartProductsList";

import Offcanvas from "react-bootstrap/Offcanvas"
import CartIconWithBadge from "./CartIconWithBadge";
import ProceedToCheckoutButton from "../ProceedToCheckoutButton";

function CartDrawer() {
    const { cart, clearCart } = useCartContext()
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

                        <span className='text-primary fw-semibold' style={{ cursor: 'pointer' }} onClick={clearCart}>
                            Clear Cart
                        </span>

                    </div>
                )}

                {
                    cart.products.length > 0
                        ? <CartProductsList />
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

export default CartDrawer