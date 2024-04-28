"use client"
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
            <h3 className="display-2 text-custom-dark mb-4 fw-semibold">
            {pathname === '/shop' ? 'Shop' : pathname === '/checkout' ? 'Checkout' : ''}
            </h3>

            {children}
        </Container>
    )
}

export default layout