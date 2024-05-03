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
    const { cart } = useCartContext()
    const { show, handleClose } = useCartDrawerContext()

    return (
        <Offcanvas show={show} onHide={handleClose} placement="end" >
            <Offcanvas.Header closeButton className="background-light-gradient">
                <Offcanvas.Title>
                    <h5 className="text-custom-dark mb-0 display-5 fw-semibold">Shopping Cart</h5>
                </Offcanvas.Title>
                <CartIconWithBadge iconContainerClasses="ms-1" cartIconHeight="25px" cartIconWidth="25px" cartIconFill="text-custom-dark" />
            </Offcanvas.Header>
            <Offcanvas.Body>
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

                            <ProceedToCheckoutButton handleDrawerClose={handleClose}/>
                        </>
                    )
                }
            </div>
        </Offcanvas>
    )
}

export default CartDrawer