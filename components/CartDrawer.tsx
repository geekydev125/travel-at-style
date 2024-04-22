"use client";
import { useState } from "react";
import { useCartContext } from "@/context/cartContext"
import uniqid from "uniqid"

import Offcanvas from "react-bootstrap/Offcanvas"
import Button from "react-bootstrap/esm/Button";

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

                            <ul>Creating the initial structure of the cart drawer
                                {cart.map((product) => (
                                    <li key={uniqid()}>
                                        <img src={product.img} alt={product.productCategory} style={{ height: '100px', width: 'auto' }} />
                                        <p className="text-custom-dark">{product._id} - {product.productCategory} - {product.quantity}</p>
                                    </li>
                                ))}
                            </ul>
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