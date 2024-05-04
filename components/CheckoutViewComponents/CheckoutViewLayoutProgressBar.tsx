"use client"
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'

import ProgressBar from 'react-bootstrap/ProgressBar';

interface IProgressBar {
    value: number
    label: string
}

function CheckoutViewLayoutProgressBar() {
    const pathname = usePathname()

    const [progressBarValueAndLabel, setProgressBarValueAndLabel] = useState<IProgressBar>({
        value: 0,
        label: ''
    })

    useEffect(() => {
        handleProgressBarValueAndLabel(pathname)
    }, [pathname])

    function handleProgressBarValueAndLabel(path: string) {
        switch (path) {
            case '/checkout/review':
                setProgressBarValueAndLabel({
                    value: 33,
                    label: 'Cart Review (1/3)'
                })
                break;
            case '/checkout/client-details':
                setProgressBarValueAndLabel({
                    value: 66,
                    label: 'Client Details (2/3)'
                })
                break;
            case '/checkout/payment':
                setProgressBarValueAndLabel({
                    value: 100,
                    label: 'Payment Details (3/3)'
                })
                break;
            default:
                break; ''
        }
    }
    return (
        <ProgressBar variant="primary" now={progressBarValueAndLabel.value} label={progressBarValueAndLabel.label} />
    )
}

export default CheckoutViewLayoutProgressBar