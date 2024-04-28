"use client"
import CartIconWithBadge from '@/components/Cart/CartIconWithBadge'
import { usePathname } from 'next/navigation'

import Container from 'react-bootstrap/Container'

interface Props {
    children: React.ReactNode
}

function layout({
    children
}: Props) {
    const pathname = usePathname()

    return (
        <Container as='section' className="py-lg-5">
            <div className='d-flex flex-row justify-content-between'>
                <h3 className="display-2 text-custom-dark mb-4 fw-semibold">
                    {pathname === '/checkout/review' ? 'Shopping Cart Review' : pathname === '/checkout/client-details' ? 'Client Details' : pathname === '/checkout/payment' ? 'Payment Details' : ''}
                </h3>

                {pathname === '/checkout' && (
                    <CartIconWithBadge iconContainerClasses="ms-1" cartIconHeight="35px" cartIconWidth="35px" cartIconFill="text-custom-dark" />
                )}
            </div>

            {children}
        </Container>
    )
}

export default layout