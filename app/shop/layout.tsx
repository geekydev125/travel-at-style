"use client"
import { useCartContext } from '@/context/cartContext'
import dynamic from 'next/dynamic'

import Container from 'react-bootstrap/Container'

const ShopViewHeaderDynamic = dynamic(() => import('@/components/ShopViewComponents/ShopViewHeader'), {
    ssr: false,
    loading: () => <h3 className="display-2 mb-0 fw-semibold">Shop</h3>
})

interface Props {
    children: React.ReactNode
}

function ShopLayout({
    children
}: Props) {
    const { getCartTotalProducts } = useCartContext()

    return (
        <Container as='section' className="py-3 py-lg-5">
            <div style={{ minHeight: '82px' }}>
                {
                    getCartTotalProducts() > 0
                        ? <ShopViewHeaderDynamic />
                        : <h3 className="display-2 mb-0 fw-semibold">Shop</h3>
                }
            </div>

            {children}
        </Container>
    )
}

export default ShopLayout