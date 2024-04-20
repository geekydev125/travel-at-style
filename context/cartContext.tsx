"use client";
import useLocalStorage from "@/hooks/useLocalStorage";
import { createContext, useContext, useState } from "react";

export interface ICartProduct {
    _id: string;
    productCategory: string;
}

export type ICart = ICartProduct[];

const cartInitialState: ICart | [] = []

export const CartContext = createContext<ICart>(cartInitialState);

interface Props {
    children: React.ReactNode;
}

// id
// productType

export const CartContextProvider = ({
    children
}: Props) => {
    const [cart, setCart] = useLocalStorage('cart', cartInitialState);

    const addProduct = (product: ICartProduct) => {
        let newProduct = {
            _id: product._id,
            productType: product.productCategory
        }

        setCart([...cart, newProduct]);
    
    }


    return (
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
    )
};

export const useCartContext = () => {
    return useContext(CartContext);
}