"use client"

import { useCartContext } from '@/context/cartContext'
import { useCartDrawerContext } from '@/context/cartDrawerContext'

import CustomButton from '@/components/CustomButton'
import IconShoppingCart from '@/components/Icons/IconShoppingCart'
import Container from 'react-bootstrap/Container'
import ProceedToCheckoutButton from '@/components/ProceedToCheckoutButton'

interface Props {
    children: React.ReactNode
}

function ShopLayout({
    children
}: Props) {
    const { cart, getCartTotalProducts, clearCart } = useCartContext()
    const { handleShow } = useCartDrawerContext()

    return (
        <Container as='section' className="py-lg-5">
            <div className='d-flex flex-column flex-md-row align-items-sm-end justify-content-between pb-3 pb-lg-0 mb-lg-3'>
                <div className='me-auto'>
                    <h3 className="display-2 text-custom-dark mb-0 fw-semibold">Shop</h3>
                    
                    <div className='d-flex flex-row align-items-center mb-3 mb-md-0'>
                        <span className='text-custom-dark display-6 fw-semibold d-inline-block' style={{ height: getCartTotalProducts() > 0 ? 'auto' : '24px' }}>
                            {getCartTotalProducts() > 0 && `(${getCartTotalProducts()} product${getCartTotalProducts() > 1 ? 's' : ''} selected)`}
                        </span>

                        {cart.products.length > 0 && (
                            <span className='ms-2 text-primary fw-semibold ' style={{ cursor: 'pointer' }} onClick={clearCart}>
                                Clear Cart
                            </span>
                        )}
                    </div>
                </div>

                {cart.products.length > 0 && (
                    <div className='ms-auto'>
                        <CustomButton variant='primary' size='sm' classes='me-2' onClick={handleShow}>
                            Show Cart&nbsp;
                            <IconShoppingCart />
                        </CustomButton>

                        <ProceedToCheckoutButton />
                    </div>
                )}
            </div>

            {children}
        </Container>
    )
}

export default ShopLayout