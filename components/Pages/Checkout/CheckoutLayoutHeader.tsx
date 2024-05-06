"use client"
import isCartEmptyRouteGuard from '@/hoc/isCartEmptyRouteGuard';

import CheckoutLayoutTitle from '@/components/Pages/Checkout/CheckoutLayoutTitle';
import CheckoutViewLayoutButtons from '@/components/Pages/Checkout/CheckoutLayoutButtons';
import CheckoutLayoutProgressBar from '@/components/Pages/Checkout/CheckoutLayoutProgressBar';

function CheckoutLayoutHeader() {
    return (
        <>
            <div className='d-flex flex-column flex-md-row align-items-sm-end justify-content-between pb-3 pb-lg-0 mb-lg-4'>
                <CheckoutLayoutTitle />

                <CheckoutViewLayoutButtons />
            </div>

            <CheckoutLayoutProgressBar />
        </>
    )
}

export default isCartEmptyRouteGuard(CheckoutLayoutHeader)
