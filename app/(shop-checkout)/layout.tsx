import ShopCheckoutHeader from '@/components/Pages/Checkout/ShopCheckoutHeader';

import Container from 'react-bootstrap/Container';

interface Props {
    children: React.ReactNode,
}

function CheckoutLayout({
    children,
}: Props) {
    return (
        <>
            <Container as='section' className="py-3 py-lg-5">
                <ShopCheckoutHeader />

                {children}
            </Container>
        </>
    )
}

export default CheckoutLayout;
