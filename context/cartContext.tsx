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
    countryDialCode: string,
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
    clearCart: () => void,
    isProductInCart: (productId: TProduct['_id'] | ICartProduct['_id']) => boolean | ICartProduct,
    getCartTotalPrice: () => number
    getCartTotalProducts: () => number
    setReviewedCart: (isReviewed: boolean) => void
    setClientDetails: (client: IClient | null) => void
}

export const CartContext = createContext<ICartContext>({
    cart: cartInitialState,
    addProductToCart: () => {},
    removeProductFromCart: () => {},
    clearCart: () => {},
    isProductInCart: () => false,
    increaseProductQuantity: () => {},
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
        let productInCart: ICartProduct | false = isProductInCart(product._id);

        if (productInCart) {
            let indexOfProductInCart: number = cart.products.indexOf(productInCart);
            let newInstanceOfCartProducts: ICart['products'] = [...cart.products];

            let updatedProduct: ICartProduct = {
                ...productInCart,
                quantity: productInCart.quantity + 1
            }

            newInstanceOfCartProducts[indexOfProductInCart] = updatedProduct;

            return setCart({
                ...cart,
                products: newInstanceOfCartProducts,
                reviewed: false,
            });
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

            setCart({
                ...cart,
                products: [...cart.products, newProduct],
                reviewed: false,
            });
        }
    }

    const increaseProductQuantity = (productId: TProduct['_id'] | ICartProduct['_id']) => {
        let productInCart: ICartProduct = isProductInCart(productId) as ICartProduct;

        let indexOfProductInCart: number = cart.products.indexOf(productInCart);
        let newInstanceOfCartProducts = [...cart.products];

        let updatedProduct: ICartProduct = {
            ...productInCart,
            quantity: productInCart.quantity + 1
        }

        newInstanceOfCartProducts[indexOfProductInCart] = updatedProduct;

        return setCart({
            ...cart,
            products: newInstanceOfCartProducts,
            reviewed: false
        });
    }

    const removeProductFromCart = (productId: TProduct['_id'] | ICartProduct['_id']) => {
        let productInCart: ICartProduct = isProductInCart(productId) as ICartProduct;

        if (productInCart) {
            let indexOfProductInCart:number = cart.products.indexOf(productInCart);
            let newInstanceOfCartProducts = [...cart.products];

            let updatedProduct: ICartProduct = {
                ...productInCart,
                quantity: productInCart.quantity - 1
            }
            if (updatedProduct.quantity === 0) {
                newInstanceOfCartProducts.splice(indexOfProductInCart, 1);
            } else {
                newInstanceOfCartProducts[indexOfProductInCart] = updatedProduct;
            }

            setCart({
                ...cart,
                products: newInstanceOfCartProducts,
                reviewed: false,
            });
        }
    }

    const clearCart = () => {
        setCart(cartInitialState);
    }

    const isProductInCart = (productId: TProduct['_id'] | ICartProduct['_id']) => {
        let productInCart:ICartProduct = cart.products.find((cartProduct: ICartProduct) => cartProduct._id === productId);

        if (productInCart) {
            return productInCart;
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
        setCart({
            ...cart,
            reviewed: isReviewed
        });
    }

    const setClientDetails = (client: IClient | null) => {
        setCart({
            ...cart,
            client: client
        });
    }

    return (
        <CartContext.Provider value={{ cart, addProductToCart, removeProductFromCart, clearCart, isProductInCart, increaseProductQuantity, getCartTotalPrice, getCartTotalProducts, setReviewedCart, setClientDetails }}>
            {children}
        </CartContext.Provider>
    )
};

export const useCartContext = () => {
    return useContext(CartContext);
}