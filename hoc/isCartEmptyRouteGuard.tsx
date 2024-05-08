"use client"
import { useEffect } from "react";

import { useCartContext } from "@/context/cartContext";
import { redirect } from "next/navigation";

function isCartEmptyRouteGuard<P extends JSX.IntrinsicAttributes>( Component: React.ComponentType<P> ) {
    const WrappedComponent = (props: P ) => {
        const { cart, getCartTotalProducts } = useCartContext();

        const isCartEmpty = getCartTotalProducts() === 0;

        useEffect(() => {
            if(isCartEmpty) {
                redirect('/shop')
            }
        }, [cart])

        return isCartEmpty ? null : <Component {...props} />
    }

    return WrappedComponent
}

export default isCartEmptyRouteGuard
