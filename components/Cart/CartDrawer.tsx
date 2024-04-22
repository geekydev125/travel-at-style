"use client";
import { useState } from "react";
import NextLink from "next/link";

import { useCartContext } from "@/context/cartContext"

import CartTotal from "@/components/Cart/CartTotal";
import CustomButton from "@/components/CustomButton";
import CartEmpty from "@/components/Cart/CartEmpty";
import CartProductsList from "@/components/Cart/CartProductsList";

import Offcanvas from "react-bootstrap/Offcanvas"
import Button from "react-bootstrap/esm/Button";

function CartDrawer() {
    const { cart, getCarTotalProducts } = useCartContext()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement="end" >
                <Offcanvas.Header closeButton className="background-light-gradient">
                    <Offcanvas.Title>
                        <h5 className="text-custom-dark mb-0 display-5 fw-semibold">
                            Cart <span className="text-custom-dark fw-semibold">({getCarTotalProducts()})</span>
                        </h5>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {
                        cart.length > 0
                            ? <CartProductsList />
                            : <CartEmpty handleDrawerClose={handleClose} />
                    }
                </Offcanvas.Body>

                <div className="w-100 px-2 py-4 position-absolute bottom-0 background-light-gradient d-flex flex-row justify-content-between align-items-center">
                    {
                        cart.length > 0 && (
                            <>
                                <CartTotal />

                                <NextLink href='/checkout'>
                                    <CustomButton variant="primary" size="sm">
                                        Proceed to checkout
                                    </CustomButton>
                                </NextLink>
                            </>
                        )
                    }

                </div>

            </Offcanvas>

        </>
    )
}

export default CartDrawer