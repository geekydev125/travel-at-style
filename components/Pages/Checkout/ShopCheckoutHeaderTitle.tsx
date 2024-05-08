"use client"
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import TotalProductsClearCart from "@/components/TotalProductsClearCart";

function ShopCheckoutHeaderTitle() {
    const [pageTitle, setPageTitle] = useState<string>('')
    const pathname = usePathname()

    useEffect(() => {
        handlePageTitle(pathname)
    }, [pathname])

    function handlePageTitle(path: string) {
        switch (path) {
            case '/shop':
                setPageTitle('Shop')
                break;
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
            <h3 className="display-2 mb-0 fw-semibold">{pageTitle}</h3>

            <TotalProductsClearCart />
        </div>
    )
}

export default ShopCheckoutHeaderTitle