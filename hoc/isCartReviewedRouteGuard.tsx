"use client"
import { useEffect } from "react";

import { useCartContext } from "@/context/cartContext";
import { redirect } from "next/navigation";

function isCartReviewedRouteGuard<P extends JSX.IntrinsicAttributes>( Component: React.ComponentType<P> ) {
    const WrappedComponent = (props: P ) => {
        const { cart } = useCartContext();

        const isCartReviewed = cart.reviewed;

        useEffect(() => {
            if(!cart.reviewed) {
                redirect('/checkout/review')
            }
        }, [])

        return isCartReviewed ? <Component {...props} /> : null;
    }

    return WrappedComponent
}

export default isCartReviewedRouteGuard