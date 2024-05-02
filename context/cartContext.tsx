"use client";
import useLocalStorage from "@/hooks/useLocalStorage";
import { Accessory } from "@/model/Accessory";
import { Luggage } from "@/model/Luggage";
import { Product } from "@/model/Product";
import { Steamer } from "@/model/Steamer";
import { createContext, useContext } from "react";

export interface IClient {
    firstName: string,
    lastName: string,
    email: string,
    country: string,
    addressOne: string,
    addressTwo?: string | undefined,
    city: string,
    state?: string | undefined,
    zipCode: string,
    countryCode: string,
    phoneNumber: string,
    notes?: string | undefined

}

export interface ICartProduct {
    _id: Product['_id'],
    productCategory: Product['productCategory'],
    name: Product['name'],
    img: Product['img'],
    price: Product['price'],
    quantity: number;
    color?: Steamer['color'],
}

export interface ICart {
    products: ICartProduct[] | [],
    reviewed: boolean,
    client: IClient | null

}

export type TProduct = Steamer | Luggage | Accessory;

const cartInitialState: ICart = {
    products: [],
    reviewed: false,
    client: null
}

interface ICartContext {
    cart: ICart,
    addProductToCart: (product: TProduct) => void,
    increaseProductQuantity: (productId: TProduct['_id'] | ICartProduct['_id']) => void
    removeProductFromCart: (productId: TProduct['_id'] | ICartProduct['_id']) => void,
    isProductInCart: (productId: TProduct['_id'] | ICartProduct['_id']) => boolean,
    getCartTotalPrice: () => number
    getCartTotalProducts: () => number
    setReviewedCart: (isReviewed: boolean) => void
    setClientDetails: (client: IClient | null) => void
}

export const CartContext = createContext<ICartContext>({
    cart: cartInitialState,
    addProductToCart: () => {},
    removeProductFromCart: () => { },
    isProductInCart: () => false,
    increaseProductQuantity: () => { },
    getCartTotalPrice: () => 0,
    getCartTotalProducts: () => 0,
    setReviewedCart: () => {},
    setClientDetails: () => {}
});

interface Props {
    children: React.ReactNode;
}

export const CartContextProvider = ({
    children
}: Props) => {
    const [cart, setCart] = useLocalStorage('cart', cartInitialState);

    const addProductToCart = (product: TProduct) => {
        let isProductAlreadyInCart: ICartProduct = cart.products.find((cartProduct: ICartProduct) => cartProduct._id === product._id);

        if (isProductAlreadyInCart) {
            let productAlreadyInCart: ICartProduct = isProductAlreadyInCart;

            let indexOfProductInCart: number = cart.products.indexOf(productAlreadyInCart);
            let newInstanceOfCartProducts: ICart['products'] = [...cart.products];

            let updatedProduct: ICartProduct = {
                ...productAlreadyInCart,
                quantity: productAlreadyInCart.quantity + 1
            }

            newInstanceOfCartProducts[indexOfProductInCart] = updatedProduct;

            return setCart((previousCart: ICart) => ({
                ...previousCart,
                products: newInstanceOfCartProducts
            
            }));
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

            setCart((previousCart: ICart) => ({
                ...previousCart,
                products: [...previousCart.products, newProduct]
            }));
        }
    }

    const increaseProductQuantity = (productId: TProduct['_id'] | ICartProduct['_id']) => {
        let productAlreadyInCart: ICartProduct = cart.products.find((cartProduct: ICartProduct) => cartProduct._id === productId);

        let indexOfProductInCart: number = cart.products.indexOf(productAlreadyInCart);
        let newInstanceOfCartProducts = [...cart.products];

        let updatedProduct: ICartProduct = {
            ...productAlreadyInCart,
            quantity: productAlreadyInCart.quantity + 1
        }

        newInstanceOfCartProducts[indexOfProductInCart] = updatedProduct;

        return setCart((previousCart: ICart) => ({
            ...previousCart,
            products: newInstanceOfCartProducts
        
        }));
    }

    const removeProductFromCart = (productId: TProduct['_id'] | ICartProduct['_id']) => {
        let isProductAlreadyInCart: ICartProduct = cart.products.find((cartProduct: ICartProduct) => cartProduct._id === productId);

        if (isProductAlreadyInCart) {
            let indexOfProductInCart:number = cart.products.indexOf(isProductAlreadyInCart);
            let newInstanceOfCartProducts = [...cart.products];

            let updatedProduct: ICartProduct = {
                ...isProductAlreadyInCart,
                quantity: isProductAlreadyInCart.quantity - 1
            }
            if (updatedProduct.quantity === 0) {
                newInstanceOfCartProducts.splice(indexOfProductInCart, 1);
            } else {
                newInstanceOfCartProducts[indexOfProductInCart] = updatedProduct;
            }

            setCart((previousCart: ICart) => ({
                ...previousCart,
                products: newInstanceOfCartProducts
            }));
        }
    }

    const isProductInCart = (productId: TProduct['_id'] | ICartProduct['_id']) => {
        let isProductAlreadyInCart:ICartProduct = cart.products.find((cartProduct: ICartProduct) => cartProduct._id === productId);

        if (isProductAlreadyInCart) {
            return true;
        } else {
            return false;
        }
    }

    const getCartTotalPrice = () => {
        return (cart.products.reduce((acc:number, product:ICartProduct) => {
            return acc + product.price * product.quantity;
        }, 0)).toFixed(2);
    }

    const getCartTotalProducts = () => {
        return cart.products.reduce((acc:number, product:ICartProduct) => {
            return acc + product.quantity;
        }, 0);
    }

    const setReviewedCart = (isReviewed: boolean) => {
        setCart((previousCart: ICart) => ({
            ...previousCart,
            reviewed: isReviewed
        }));
    }

    const setClientDetails = (client: IClient | null) => {
        setCart((previousCart: ICart) => ({
            ...previousCart,
            client: client
        }));
    }

    return (
        <CartContext.Provider value={{ cart, addProductToCart, removeProductFromCart, isProductInCart, increaseProductQuantity, getCartTotalPrice, getCartTotalProducts, setReviewedCart, setClientDetails }}>
            {children}
        </CartContext.Provider>
    )
};

export const useCartContext = () => {
    return useContext(CartContext);
}