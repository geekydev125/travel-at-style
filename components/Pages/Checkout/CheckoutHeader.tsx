"use client"
import isCartEmptyRouteGuard from '@/hoc/isCartEmptyRouteGuard';

import ShopCheckoutHeaderTitle from '@/components/Pages/Checkout/ShopCheckoutHeaderTitle';
import CheckoutButtons from '@/components/Pages/Checkout/CheckoutButtons';

function CheckoutHeader() {
    return (
        <>
            <ShopCheckoutHeaderTitle />

            <CheckoutButtons />
        </>
    )
}

export default isCartEmptyRouteGuard(CheckoutHeader)
