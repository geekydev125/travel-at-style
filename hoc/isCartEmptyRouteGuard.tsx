import React, { useEffect, ComponentType } from "react";
import { useCartContext } from "@/context/cartContext";
import { redirect } from "next/navigation";

interface Props {}

function isCartEmptyRouteGuard<P extends Props>(Component: ComponentType<P>): React.FC<P> {
    const WrappedComponent: React.FC<P> = (props) => {
        const { cart, getCartTotalProducts } = useCartContext();

        const isCartEmpty: boolean = getCartTotalProducts() === 0;

        useEffect(() => {
            if (isCartEmpty) {
                redirect('/shop');
            }
        }, [cart, isCartEmpty]);

        return isCartEmpty ? null : <Component {...props} />;
    };

    return WrappedComponent;
}

export default isCartEmptyRouteGuard;
