"use client"
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'
import NextLink from 'next/link';

import { useCartContext } from '@/context/cartContext';

import isCartEmptyRouteGuard from '@/hoc/isCartEmptyRouteGuard';

import CustomButton from '@/components/CustomButton';

import Container from 'react-bootstrap/Container'
import ProgressBar from 'react-bootstrap/ProgressBar';
import IconChevronLeft from '@/components/Icons/IconChevronLeft';

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
    const { getCartTotalProducts } = useCartContext()
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
            <div className='d-flex flex-row align-items-center justify-content-between'>
                <h3 className="display-2 text-custom-dark mb-4 fw-semibold">
                    {pageTitle}

                    <span className='text-custom-dark display-6 fw-semibold ms-2'>{getCartTotalProducts() > 0 && `(${getCartTotalProducts()} product${getCartTotalProducts() > 1 ? 's' : ''} selected)`}</span>
                </h3>

                <NextLink href='/shop'>
                    <CustomButton variant='primary' size='sm'>
                        <IconChevronLeft />
                        &nbsp;Go back to shop
                    </CustomButton>
                </NextLink>
            </div>

            <ProgressBar variant="primary" now={progressBarValueAndLabel.value} label={progressBarValueAndLabel.label} />

            {children}
        </Container>
    )
}

export default isCartEmptyRouteGuard(CheckoutLayout as React.ComponentType<JSX.IntrinsicAttributes>);
