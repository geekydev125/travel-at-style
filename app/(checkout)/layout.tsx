import CheckoutViewLayoutHeader from '@/components/CheckoutViewComponents/CheckoutViewLayoutHeader';

import Container from 'react-bootstrap/Container'

interface Props {
    children: React.ReactNode
}

function CheckoutLayout({
    children
}: Props) {
    return (
        <Container as='section' className="py-lg-5">
            <CheckoutViewLayoutHeader />

            {children}
        </Container >
    )
}

export default CheckoutLayout;
