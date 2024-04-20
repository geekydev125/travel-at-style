"use client";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Product } from "@/model/Product";
import { createContext, useContext } from "react";

export interface ICartProduct {
    _id: Product['_id'];
    productCategory: Product['productCategory'];
}

export type ICart = ICartProduct[] | [];

const cartInitialState: ICart = []

interface ICartContext {
    cart: ICart,
    addProduct: (product: ICartProduct) => void;
}

export const CartContext = createContext<ICartContext>({
    cart: cartInitialState,
    addProduct: () => {}
});

interface Props {
    children: React.ReactNode;
}

export const CartContextProvider = ({
    children
}: Props) => {
    const [cart, setCart] = useLocalStorage('cart', cartInitialState);

    const addProduct = (product: ICartProduct) => {
        let newProduct = {
            _id: product._id,
            productCategory: product.productCategory
        }

        setCart([...cart, newProduct]);
    }

    return (
        <CartContext.Provider value={{cart, addProduct}}>
            {children}
        </CartContext.Provider>
    )
};

export const useCartContext = () => {
    return useContext(CartContext);
}