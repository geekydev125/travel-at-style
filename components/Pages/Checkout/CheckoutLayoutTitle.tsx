"use client"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { useCartContext } from "@/context/cartContext";

function CheckoutLayoutTitle() {
    const [pageTitle, setPageTitle] = useState<string>('')
    const pathname = usePathname()
    const { getCartTotalProducts } = useCartContext()

    useEffect(() => {
        handlePageTitle(pathname)
    }, [pathname])

    function handlePageTitle(path: string) {
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

    return (
        <div className='me-auto'>
            <h3 className="display-2 mb-0 fw-semibold">
                {pageTitle}
            </h3>
            <span className='display-6 fw-semibold'>{getCartTotalProducts() > 0 && `(${getCartTotalProducts()} product${getCartTotalProducts() > 1 ? 's' : ''} selected)`}</span>
        </div>
    )
}

export default CheckoutLayoutTitle