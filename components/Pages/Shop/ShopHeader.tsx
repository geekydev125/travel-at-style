"use client"
import { useCartContext } from '@/context/cartContext'

import ShowCartCheckoutButtons from '@/components/Pages/Shop/ShowCartCheckoutButtons'
import ShopCheckoutHeaderTitle from '../Checkout/ShopCheckoutHeaderTitle'

function ShopHeader() {
    const { getCartTotalProducts } = useCartContext()
    return (
        <div className='d-flex flex-column flex-md-row align-items-sm-end justify-content-between pb-3 pb-lg-0 mb-lg-3'>
            <ShopCheckoutHeaderTitle />

            {getCartTotalProducts() > 0 && <ShowCartCheckoutButtons />}
        </div>
    )
}

export default ShopHeader