"use client"
import { usePathname } from 'next/navigation'

import IconChevronRight from '@/components/Icons/IconChevronRight'
import CustomButtonWithLink from './CustomButtonWithLink'

interface Props {
    classes?: string
    size?: 'sm' | 'lg'
    children?: React.ReactNode
}

function GoToShopButton({
    classes,
    size,
    children = 'Check out all products in our shop!'
}: Props) {
    const pathname = usePathname();
    const productTabPath = pathname.split('/')[1]

    return (
        <CustomButtonWithLink href={`/shop?tab=${productTabPath}`} classesButton={classes} variant="primary" size={size}>
            {children}
            <IconChevronRight classes="ms-1" />
        </CustomButtonWithLink>
    )
}

export default GoToShopButton