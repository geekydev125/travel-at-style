"use client";
import { useState } from "react";
import { useCartContext } from "@/context/cartContext"
import uniqid from "uniqid"

import Offcanvas from "react-bootstrap/Offcanvas"
import Button from "react-bootstrap/esm/Button";
import CartDrawerProductCard from "./CartDrawerProductCard";

function CartDrawer() {
    const { cart } = useCartContext()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement="end" >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <h2 className="text-custom-dark">Cart</h2>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {cart.length > 0 ? (
                        <>
                            <div className="container">
                                <div className="row gx-3 gy-3">
                                    {cart.map((product) => (
                                        <div className="col-6" key={uniqid()}>
                                           <CartDrawerProductCard product={product} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </>
                    ) : (
                        <h2 className="text-custom-dark">Cart is empty</h2>
                    )}
                </Offcanvas.Body>
            </Offcanvas>

        </>
    )
}

export default CartDrawer