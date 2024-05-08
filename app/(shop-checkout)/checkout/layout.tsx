import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Checkout",
}

function CheckoutLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}
        </>
    )
}

export default CheckoutLayout