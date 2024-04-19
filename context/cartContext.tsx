import { createContext, useContext } from "react";

export const CartContext = createContext(null);

interface Props {
    children: React.ReactNode;
}

export const CartProvider = ({ children }:Props) => {
    return (
        <CartContext.Provider value={null}>
            {children}
            </CartContext.Provider>
    )
};

export const useCartContext = () => {
    return useContext(CartContext);
}