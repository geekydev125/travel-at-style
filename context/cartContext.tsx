"use client";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Accessory } from "@/model/Accessory";
import { Luggage } from "@/model/Luggage";
import { Product } from "@/model/Product";
import { Steamer } from "@/model/Steamer";
import { createContext, useContext } from "react";

export interface ICartProduct {
    _id: Product['_id'],
    productCategory: Product['productCategory'],
    name: Product['name'],
    img: Product['img'],
    price: Product['price'],
    quantity: number;
}

export type ICart = ICartProduct[] | [];

const cartInitialState: ICart = []

interface ICartContext {
    cart: ICart,
    addProductToCart: (product: Steamer | Luggage | Accessory) => void,
    removeProductFromCart: (product: Steamer | Luggage | Accessory) => void,
    isProductInCart: (product: Steamer | Luggage | Accessory) => boolean
}

export const CartContext = createContext<ICartContext>({
    cart: cartInitialState,
    addProductToCart: () => {},
    removeProductFromCart: () => {},
    isProductInCart: () => false
});

interface Props {
    children: React.ReactNode;
}

export const CartContextProvider = ({
    children
}: Props) => {
    const [cart, setCart] = useLocalStorage('cart', cartInitialState);

    const addProductToCart = (product: Steamer | Luggage | Accessory) => {
        // check if the product is already in the cart
        let isProductAlreadyInCart = cart.find((cartProduct: ICartProduct) => cartProduct._id === product._id) || 0;

        if (isProductAlreadyInCart) {
            let indexOfProductInCart = cart.indexOf(isProductAlreadyInCart);
            let newInstanceOfCart = [...cart];

            let updatedProduct: ICartProduct = {
                ...isProductAlreadyInCart,
                quantity: isProductAlreadyInCart.quantity + 1
            }
            
            newInstanceOfCart[indexOfProductInCart] = updatedProduct;

            return setCart(( previousCart:ICart ) => newInstanceOfCart);
        } else {
            // create the new product
            let newProduct: ICartProduct = {
                _id: product._id,
                productCategory: product.productCategory,
                name: product.name,
                img: `/assets/img/${product.imgFolder}/${product.img}`,
                price: product.price,
                quantity: 1
            }

            setCart(( previousCart:ICart ) => [...previousCart, newProduct]);
        }
    }

    const removeProductFromCart = (product: Steamer | Luggage | Accessory) => {
        let isProductAlreadyInCart = cart.find((cartProduct: ICartProduct) => cartProduct._id === product._id) || 0;

        if (isProductAlreadyInCart) {
            let indexOfProductInCart = cart.indexOf(isProductAlreadyInCart);
            let newInstanceOfCart = [...cart];

            let updatedProduct: ICartProduct = {
                ...isProductAlreadyInCart,
                quantity: isProductAlreadyInCart.quantity - 1
            }

            if (updatedProduct.quantity === 0) {
                newInstanceOfCart.splice(indexOfProductInCart, 1);
            } else {
                newInstanceOfCart[indexOfProductInCart] = updatedProduct;
            }

            setCart(( previousCart:ICart ) => newInstanceOfCart);
        }
    }

    const isProductInCart = (product: Steamer | Luggage | Accessory) => {
        let isProductAlreadyInCart = cart.find((cartProduct: ICartProduct) => cartProduct._id === product._id) || 0;

        if (isProductAlreadyInCart) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <CartContext.Provider value={{ cart, addProductToCart, removeProductFromCart, isProductInCart }}>
            {children}
        </CartContext.Provider>
    )
};

export const useCartContext = () => {
    return useContext(CartContext);
}