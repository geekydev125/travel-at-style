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
    const { cart, getCartTotalProducts } = useCartContext()
    const { handleShow } = useCartDrawerContext()

    return (
        <Container as='section' className="py-lg-5">
            <div className='d-flex flex-column flex-md-row align-items-sm-end justify-content-between pb-3 pb-lg-0 mb-lg-4'>
                <div className='me-auto'>
                    <h3 className="display-2 text-custom-dark mb-0 fw-semibold">Shop</h3>
                    <span className='text-custom-dark display-6 fw-semibold'>{getCartTotalProducts() > 0 && `(${getCartTotalProducts()} product${getCartTotalProducts() > 1 ? 's' : ''} selected)`}</span>
                </div>

                {cart.length > 0 && (
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