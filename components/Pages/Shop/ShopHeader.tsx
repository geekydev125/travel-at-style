"use client"
import { useCartContext } from '@/context/cartContext'

import ShowCartCheckoutButtons from '@/components/Pages/Shop/ShowCartCheckoutButtons'
import ShopCheckoutHeaderTitle from '../Checkout/ShopCheckoutHeaderTitle'

function ShopHeader() {
    const { getCartTotalProducts } = useCartContext()
    return (
        <>
            <ShopCheckoutHeaderTitle />

            <div className='d-flex align-items-end'>
                {getCartTotalProducts() > 0 && <ShowCartCheckoutButtons />}
            </div>
        </>
    )
}

export default ShopHeader