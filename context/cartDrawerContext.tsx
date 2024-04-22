"use client";
import { createContext, useContext, useState } from 'react';


interface CartDrawerContext {
    show: boolean,
    handleClose: () => void,
    handleShow: () => void
}

const CartDrawerContext = createContext<CartDrawerContext>({
    show: false,
    handleClose: () => { },
    handleShow: () => { }
})

interface Props {
    children: React.ReactNode
}

export const CartDrawerContextProvider = ({
    children
}: Props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <CartDrawerContext.Provider value={{ show, handleClose, handleShow }}>
            {children}
        </CartDrawerContext.Provider>
    )
}

export function useCartDrawerContext() {
    return useContext(CartDrawerContext)
}