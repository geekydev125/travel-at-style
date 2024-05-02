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

interface IProgressBar {
    value: number
    label: string
}

interface IButtonTextAndLink {
    text: string
    link: string
}

interface Props {
    children: React.ReactNode
}

function CheckoutLayout({
    children
}: Props) {
    const { getCartTotalProducts, setReviewedCart, setClientDetails } = useCartContext()
    const pathname = usePathname()
    const [pageTitle, setPageTitle] = useState<string>('')
    const [progressBarValueAndLabel, setProgressBarValueAndLabel] = useState<IProgressBar>({
        value: 0,
        label: ''
    })
    const [buttonTextAndLink, setButtonTextAndLink] = useState<IButtonTextAndLink>({
        text: '',
        link: ''
    })


    useEffect(() => {
        getPageTitle(pathname)
        getProgressBarValue(pathname)
        getButtonTextAndLink(pathname)
    }, [pathname])

    function getPageTitle(path: string) {
        switch (path) {
            case '/checkout/review':
                setPageTitle('Shopping Cart Review')
                break;
            case '/checkout/client-details':
                setPageTitle('Client Details')
                break;
            case '/checkout/payment':
                setPageTitle('Payment Details')
                break;
            default:
                break;
        }
    }

    function getProgressBarValue(path: string) {
        switch (path) {
            case '/checkout/review':
                setProgressBarValueAndLabel({
                    value: 33,
                    label: 'Shopping Cart Review'
                })
                break;
            case '/checkout/client-details':
                setProgressBarValueAndLabel({
                    value: 66,
                    label: 'Client Details'
                })
                break;
            case '/checkout/payment':
                setProgressBarValueAndLabel({
                    value: 100,
                    label: 'Payment Details'
                })
                break;
            default:
                break; ''
        }
    }

    function getButtonTextAndLink(path: string) {
        switch (path) {
            case '/checkout/review':
                setButtonTextAndLink({
                    text: 'Back to Shop',
                    link: '/shop'
                })
                break;
            case '/checkout/client-details':
                setButtonTextAndLink({
                    text: 'Back to Shopping Cart Review',
                    link: '/checkout/review'
                })
                break;
            case '/checkout/payment':
                setButtonTextAndLink({
                    text: 'Back to Client Details',
                    link: '/checkout/client-details'
                })
                break;
            default:
                break;
        }
    }

    function setReviewedCartOrClient() {
        switch (pathname) {
            case '/checkout/review':
                setClientDetails(null)
                break;
            case '/checkout/client-details':
                setReviewedCart(false)
                break;
            case '/checkout/payment':
                break;
            default:
                break;
        }
    }

    return (
        <Container as='section' className="py-lg-5">
            <div className='d-flex flex-column flex-md-row align-items-sm-end justify-content-between pb-3 pb-lg-0 mb-lg-4'>
                <div className='me-auto'>
                    <h3 className="display-2 text-custom-dark mb-0 fw-semibold">
                        {pageTitle}
                    </h3>
                    <span className='text-custom-dark display-6 fw-semibold'>{getCartTotalProducts() > 0 && `(${getCartTotalProducts()} product${getCartTotalProducts() > 1 ? 's' : ''} selected)`}</span>
                </div>

                <NextLink href={buttonTextAndLink.link} className='ms-auto' onClick={setReviewedCartOrClient}>
                    <CustomButton variant='primary' size='sm'>
                        <IconChevronLeft />
                        &nbsp;{buttonTextAndLink.text}
                    </CustomButton>
                </NextLink>
            </div>

            <ProgressBar variant="primary" now={progressBarValueAndLabel.value} label={progressBarValueAndLabel.label} />

            {children}
        </Container>
    )
}

export default isCartEmptyRouteGuard(CheckoutLayout as React.ComponentType<JSX.IntrinsicAttributes>);
