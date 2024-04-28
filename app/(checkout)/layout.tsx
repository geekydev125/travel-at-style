"use client"
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'

import isCartEmptyRouteGuard from '@/hoc/isCartEmptyRouteGuard';
import CartIconWithBadge from '@/components/Cart/CartIconWithBadge'

import Container from 'react-bootstrap/Container'
import ProgressBar from 'react-bootstrap/ProgressBar';

interface ProgressBar {
    value: number
    label: string
}

interface Props {
    children: React.ReactNode
}

function CheckoutLayout({
    children
}: Props) {
    const pathname = usePathname()
    const [pageTitle, setPageTitle] = useState<string>('')
    const [progressBarValueAndLabel, setProgressBarValueAndLabel] = useState<ProgressBar>({
        value: 0,
        label: ''
    })


    useEffect(() => {
        getPageTitle(pathname)
        getProgressBarValue(pathname)
    }, [pathname])

    function getPageTitle(path: string) {
        switch (path) {
            case '/checkout/review':
                return setPageTitle('Shopping Cart Review')
            case '/checkout/client-details':
                return setPageTitle('Client Details')
            case '/checkout/payment':
                return setPageTitle('Payment Details')
            default:
                return ''
        }
    }

    function getProgressBarValue(path: string) {
        switch (path) {
            case '/checkout/review':
                return setProgressBarValueAndLabel({
                    value: 33,
                    label: 'Shopping Cart Review'
                })
            case '/checkout/client-details':
                return setProgressBarValueAndLabel({
                    value: 66,
                    label: 'Client Details'
                })
            case '/checkout/payment':
                return setProgressBarValueAndLabel({
                    value: 100,
                    label: 'Payment Details'
                })
            default:
                return ''
        }
    }

    return (
        <Container as='section' className="py-lg-5">
            <div className='d-flex flex-row justify-content-between'>
                <h3 className="display-2 text-custom-dark mb-4 fw-semibold">{pageTitle}</h3>

                {pathname === '/checkout' && (
                    <CartIconWithBadge iconContainerClasses="ms-1" cartIconHeight="35px" cartIconWidth="35px" cartIconFill="text-custom-dark" />
                )}
            </div>
            
            <ProgressBar variant="primary" now={progressBarValueAndLabel.value} label={progressBarValueAndLabel.label}  />

            {children}
        </Container>
    )
}

export default isCartEmptyRouteGuard(CheckoutLayout as React.ComponentType<JSX.IntrinsicAttributes>) ;
