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
    color?: Steamer['color'],
}

export type ICart = ICartProduct[] | [];
export type TProduct = Steamer | Luggage | Accessory;

const cartInitialState: ICart = []

interface ICartContext {
    cart: ICart,
    addProductToCart: (product: TProduct) => void,
    increaseProductQuantity: (productId: TProduct['_id'] | ICartProduct['_id']) => void
    removeProductFromCart: (productId: TProduct['_id'] | ICartProduct['_id']) => void,
    isProductInCart: (productId: TProduct['_id'] | ICartProduct['_id']) => boolean,
    getCartTotalPrice: () => number
    getCartTotalProducts: () => number
}

export const CartContext = createContext<ICartContext>({
    cart: cartInitialState,
    addProductToCart: () => {},
    removeProductFromCart: () => { },
    isProductInCart: () => false,
    increaseProductQuantity: () => { },
    getCartTotalPrice: () => 0,
    getCartTotalProducts: () => 0
});

interface Props {
    children: React.ReactNode;
}

export const CartContextProvider = ({
    children
}: Props) => {
    const [cart, setCart] = useLocalStorage('cart', cartInitialState);

    const addProductToCart = (product: TProduct) => {
        let isProductAlreadyInCart = cart.find((cartProduct: ICartProduct) => cartProduct._id === product._id);

        if (isProductAlreadyInCart) {
            let productAlreadyInCart = isProductAlreadyInCart;

            let indexOfProductInCart = cart.indexOf(productAlreadyInCart);
            let newInstanceOfCart = [...cart];

            let updatedProduct: ICartProduct = {
                ...productAlreadyInCart,
                quantity: productAlreadyInCart.quantity + 1
            }

            newInstanceOfCart[indexOfProductInCart] = updatedProduct;

            return setCart((previousCart: ICart) => newInstanceOfCart);
        } else {
            let newProduct: ICartProduct = {
                _id: product._id,
                productCategory: product.productCategory,
                name: product.name,
                img: `/assets/img/${product.imgFolder}/${product.img}`,
                price: product.price,
                quantity: 1
            }

            if(product.hasOwnProperty('color')) {
                newProduct = {
                    ...newProduct,
                    color: (product as Steamer).color
                }
            }

            setCart((previousCart: ICart) => [...previousCart, newProduct]);
        }
    }

    const increaseProductQuantity = (productId: TProduct['_id'] | ICartProduct['_id']) => {
        let productAlreadyInCart = cart.find((cartProduct: ICartProduct) => cartProduct._id === productId);

        let indexOfProductInCart = cart.indexOf(productAlreadyInCart);
        let newInstanceOfCart = [...cart];

        let updatedProduct: ICartProduct = {
            ...productAlreadyInCart,
            quantity: productAlreadyInCart.quantity + 1
        }

        newInstanceOfCart[indexOfProductInCart] = updatedProduct;

        return setCart((previousCart: ICart) => newInstanceOfCart);
    }

    const removeProductFromCart = (productId: TProduct['_id'] | ICartProduct['_id']) => {
        let isProductAlreadyInCart = cart.find((cartProduct: ICartProduct) => cartProduct._id === productId);

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

            setCart((previousCart: ICart) => newInstanceOfCart);
        }
    }

    const isProductInCart = (productId: TProduct['_id'] | ICartProduct['_id']) => {
        let isProductAlreadyInCart = cart.find((cartProduct: ICartProduct) => cartProduct._id === productId);

        if (isProductAlreadyInCart) {
            return true;
        } else {
            return false;
        }
    }

    const getCartTotalPrice = () => {
        return (cart.reduce((acc:number, product:ICartProduct) => {
            return acc + product.price * product.quantity;
        }, 0)).toFixed(2);
    }

    const getCartTotalProducts = () => {
        return cart.reduce((acc:number, product:ICartProduct) => {
            return acc + product.quantity;
        }, 0);
    }

    return (
        <CartContext.Provider value={{ cart, addProductToCart, removeProductFromCart, isProductInCart, increaseProductQuantity, getCartTotalPrice, getCartTotalProducts }}>
            {children}
        </CartContext.Provider>
    )
};

export const useCartContext = () => {
    return useContext(CartContext);
}