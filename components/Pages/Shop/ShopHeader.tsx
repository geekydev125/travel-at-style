import { useCartContext } from '@/context/cartContext'

import ShowCartCheckoutButtons from '@/components/Pages/Shop/ShowCartCheckoutButtons'
import ShopCheckoutHeaderTitle from '../Checkout/ShopCheckoutHeaderTitle'

function ShopHeader() {
    const { getCartTotalProducts } = useCartContext()
    return (
        <>
            {
                getCartTotalProducts() > 0
                    ? (
                        <>
                            <ShopCheckoutHeaderTitle />

                            <div className='d-flex align-items-end'>
                                {getCartTotalProducts() > 0 && <ShowCartCheckoutButtons />}
                            </div>
                        </>
                    )
                    : <h3 className="display-2 mb-0 fw-semibold h-100">Shop</h3>
            }

        </>
    )
}

export default ShopHeader