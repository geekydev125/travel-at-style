"use client"
import { useCartContext } from '@/context/cartContext'

import TotalProducts from '@/components/ShopViewComponents/TotalProducts'
import ClearCart from '@/components/Cart/ClearCart'
import ShowCartCheckoutButtons from '@/components/ShopViewComponents/ShowCartCheckoutButtons'

function ShopViewHeader() {
    const { getCartTotalProducts } = useCartContext()
    return (
            <div className='d-flex flex-column flex-md-row align-items-sm-end justify-content-between pb-3 pb-lg-0 mb-lg-3'>
                <div className='me-auto'>
                    <h3 className="display-2 mb-0 fw-semibold">Shop</h3>
                    <div className='d-flex flex-row align-items-center mb-3 mb-md-0'>
                        <span className='display-6 fw-semibold d-inline-block'>
                            <TotalProducts />
                        </span>

                        {getCartTotalProducts() > 0 && (
                            <ClearCart />
                        )}
                    </div>
                </div>
                {
                    getCartTotalProducts() > 0 && (
                        <ShowCartCheckoutButtons />
                    )
                }
            </div>
    )
}

export default ShopViewHeader