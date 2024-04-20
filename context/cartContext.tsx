"use client";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Accessory } from "@/model/Accessory";
import { Luggage } from "@/model/Luggage";
import { Product } from "@/model/Product";
import { Steamer } from "@/model/Steamer";
import { createContext, useContext } from "react";

export interface ICartProduct {
    _id: Product['_id'];
    productCategory: Product['productCategory'];
    quantity: number;
}

export type ICart = ICartProduct[] | [];

const cartInitialState: ICart = []

interface ICartContext {
    cart: ICart,
    addProductToCart: (product: Steamer | Luggage | Accessory) => void;
}

export const CartContext = createContext<ICartContext>({
    cart: cartInitialState,
    addProductToCart: () => {}
});

interface Props {
    children: React.ReactNode;
}

export const CartContextProvider = ({
    children
}: Props) => {
    const [cart, setCart] = useLocalStorage('cart', cartInitialState);

    const addProductToCart = (product: Steamer | Luggage | Accessory) => {
        let quantityProductsInCart = cart.find((cartProduct:ICartProduct) => cartProduct._id === product._id)?.quantity || 0;

        let newProduct: ICartProduct = {
            _id: product._id,
            productCategory: product.productCategory,
            quantity: quantityProductsInCart + 1
        }

        let filteredCartWithoutCurrentProduct = cart.filter((cartProduct:ICartProduct) => cartProduct._id !== product._id);

        setCart([...filteredCartWithoutCurrentProduct, newProduct]);
    }

    return (
        <CartContext.Provider value={{cart, addProductToCart}}>
            {children}
        </CartContext.Provider>
    )
};

export const useCartContext = () => {
    return useContext(CartContext);
}