"use client"
import isCartEmptyRouteGuard from '@/hoc/isCartEmptyRouteGuard';

import CheckoutViewLayoutTitle from '@/components/CheckoutViewComponents/CheckoutViewLayoutTitle';
import CheckoutViewLayoutButtons from '@/components/CheckoutViewComponents/CheckoutViewLayoutButtons';
import CheckoutViewLayoutProgressBar from '@/components/CheckoutViewComponents/CheckoutViewLayoutProgressBar';

function CheckoutViewLayoutHeader() {
    return (
        <>
            <div className='d-flex flex-column flex-md-row align-items-sm-end justify-content-between pb-3 pb-lg-0 mb-lg-4'>
                <CheckoutViewLayoutTitle />

                <CheckoutViewLayoutButtons />
            </div>

            <CheckoutViewLayoutProgressBar />
        </>
    )
}

export default isCartEmptyRouteGuard(CheckoutViewLayoutHeader)
