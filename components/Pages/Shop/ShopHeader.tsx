"use client"
import { useCartContext } from '@/context/cartContext'

import ShowCartCheckoutButtons from '@/components/Pages/Shop/ShowCartCheckoutButtons'
import ShopCheckoutHeaderTitle from '../Checkout/ShopCheckoutHeaderTitle'

function ShopHeader() {
    const { getCartTotalProducts } = useCartContext()
    return (
        <>
            <ShopCheckoutHeaderTitle />

            {getCartTotalProducts() > 0 && <ShowCartCheckoutButtons />}
        </>
    )
}

export default ShopHeader