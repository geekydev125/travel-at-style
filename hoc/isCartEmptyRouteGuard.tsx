"use client"
import { useEffect } from "react";

import { useCartContext } from "@/context/cartContext";
import { redirect } from "next/navigation";

function isCartEmptyRouteGuard( Component: React.FunctionComponent<React.PropsWithChildren> ) {
    const WrappedComponent = (props?: React.PropsWithChildren ) => {
        const { cart } = useCartContext();

        const isCartEmpty = cart.length === 0;

        useEffect(() => {
            if(isCartEmpty) {
                redirect('/shop')
            }
        }, [])

        return isCartEmpty ? null : <Component {...props} />
    }

    return WrappedComponent
}

export default isCartEmptyRouteGuard
