"use client"
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

import { useCartContext } from '@/context/cartContext';
import CheckoutProgressBar from './CheckoutProgressBar';

const DynamicShopHeader = dynamic(() => import('@/components/Pages/Shop/ShopHeader'), {
    ssr: false,
    loading: () => <h3 className="display-2 mb-0 fw-semibold h-100">Shop</h3>
})

const DynamicCheckoutHeader = dynamic(() => import('@/components/Pages/Checkout/CheckoutHeader'), {
    ssr: false,
    loading: () => null
})

function ShopCheckoutHeader() {
    const pathname = usePathname();
    const { getCartTotalProducts } = useCartContext()

    return (
        <>
            <div
                className={`d-flex flex-column flex-md-row justify-content-between pb-3 pb-lg-0 ${pathname.includes('/checkout') ? 'mb-lg-4' : 'mb-lg-3'} `}
                style={{ minHeight: '82px' }}
            >

                { pathname.includes('/checkout') && (
                    <DynamicCheckoutHeader />
                )}

                { pathname === '/shop' && (
                    getCartTotalProducts() > 0
                        ? <DynamicShopHeader />
                        : <h3 className="display-2 mb-0 fw-semibold h-100">Shop</h3>
                )}
            </div >

            {pathname.includes('/checkout') && <CheckoutProgressBar />}
        </>
    )
}

export default ShopCheckoutHeader