import { Metadata } from 'next';

import CheckoutViewLayoutHeader from '@/components/Pages/Checkout/CheckoutLayoutHeader';

import Container from 'react-bootstrap/Container'

export const metadata: Metadata = {
    title: "Checkout",
}

interface Props {
    children: React.ReactNode,
}

function CheckoutLayout({
    children,
}: Props) {
    
    return (
        <Container as='section' className="py-lg-5">
            <CheckoutViewLayoutHeader />

            {children}
        </Container >
    )
}

export default CheckoutLayout;
