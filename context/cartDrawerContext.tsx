"use client";
import { createContext, useContext, useState } from 'react';


interface CartDrawerContext {
    showDrawer: boolean,
    handleClose: () => void,
    handleShow: () => void
}

const CartDrawerContext = createContext<CartDrawerContext>({
    showDrawer: false,
    handleClose: () => { },
    handleShow: () => { }
})

interface Props {
    children: React.ReactNode
}

export const CartDrawerContextProvider = ({
    children
}: Props) => {
    const [showDrawer, setShowDrawer] = useState(false);

    const handleClose = () => setShowDrawer(false);
    const handleShow = () => setShowDrawer(true);

    return (
        <CartDrawerContext.Provider value={{ showDrawer, handleClose, handleShow }}>
            {children}
        </CartDrawerContext.Provider>
    )
}

export function useCartDrawerContext() {
    return useContext(CartDrawerContext)
}