"use client"
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';


import { useCartContext } from '@/context/cartContext';

import IconChevronLeft from '@/components/Icons/IconChevronLeft';
import CustomButtonWithLink from '@/components/Common/Buttons/CustomButtonWithLink';

interface IButtonTextAndLink {
    text: string
    link: string
}

function CheckoutButtons() {
    const pathname = usePathname()
    const { setReviewedCart, setClientDetails } = useCartContext()

    const [buttonTextAndLink, setButtonTextAndLink] = useState<IButtonTextAndLink>({
        text: '',
        link: ''
    })

    useEffect(() => {
        handleButtonTextAndLink(pathname)
    }, [pathname])



    function handleReviewedCartOrClient(path: string) {
        switch (path) {
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

    function handleButtonTextAndLink(path: string) {
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

    return (
        <CustomButtonWithLink href={buttonTextAndLink.link} classesLink='ms-auto mt-3 mt-sm-0 d-flex align-items-end' onClick={() => handleReviewedCartOrClient(pathname)} variant='primary' size='sm'>
            <IconChevronLeft />
            &nbsp;{buttonTextAndLink.text}
        </CustomButtonWithLink>
    )
}

export default CheckoutButtons