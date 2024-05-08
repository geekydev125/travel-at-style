import { useCartContext } from '@/context/cartContext'
import React from 'react'
import TotalProducts from './TotalProducts'
import ClearCart from './Cart/ClearCart'

function TotalProductsClearCart() {
    const { getCartTotalProducts } = useCartContext()
    return (
        <div className='d-flex flex-row align-items-center mb-3 mb-md-0'>
            <span className='display-6 fw-semibold d-inline-block'>
                <TotalProducts />
            </span>

            {
                getCartTotalProducts() > 0 && (
                    <ClearCart />
                )
            }
        </div>
    )
}

export default TotalProductsClearCart