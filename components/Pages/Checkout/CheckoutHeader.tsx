"use client"
import isCartEmptyRouteGuard from '@/hoc/isCartEmptyRouteGuard';

import ShopCheckoutHeaderTitle from '@/components/Pages/Checkout/ShopCheckoutHeaderTitle';
import CheckoutViewLayoutButtons from '@/components/Pages/Checkout/CheckoutButtons';
import CheckoutProgressBar from '@/components/Pages/Checkout/CheckoutProgressBar';

function CheckoutHeader() {
    return (
        <>
            <div className='d-flex flex-column flex-md-row align-items-sm-end justify-content-between pb-3 pb-lg-0 mb-lg-4'>
                <ShopCheckoutHeaderTitle />

                <CheckoutViewLayoutButtons />
            </div>

            <CheckoutProgressBar />
        </>
    )
}

export default isCartEmptyRouteGuard(CheckoutHeader)
