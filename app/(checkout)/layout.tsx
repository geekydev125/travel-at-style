"use client"

import isCartEmptyRouteGuard from '@/hoc/isCartEmptyRouteGuard';

import Container from 'react-bootstrap/Container'

import CheckoutViewLayoutTitle from '@/components/CheckoutViewComponents/CheckoutViewLayoutTitle';
import CheckoutViewLayoutButtons from '@/components/CheckoutViewComponents/CheckoutViewLayoutButtons';
import CheckoutViewLayoutProgressBar from '@/components/CheckoutViewComponents/CheckoutViewLayoutProgressBar';

interface Props {
    children: React.ReactNode
}

function CheckoutLayout({
    children
}: Props) {
    return (
        <Container as='section' className="py-lg-5">
            <div className='d-flex flex-column flex-md-row align-items-sm-end justify-content-between pb-3 pb-lg-0 mb-lg-4'>
                <CheckoutViewLayoutTitle />

                <CheckoutViewLayoutButtons />
            </div>

            <CheckoutViewLayoutProgressBar />

            {children}
        </Container>
    )
}

export default isCartEmptyRouteGuard(CheckoutLayout as React.ComponentType<JSX.IntrinsicAttributes>);
