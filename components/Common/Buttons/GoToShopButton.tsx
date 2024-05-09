"use client"
import { usePathname } from 'next/navigation'
import NextLink from 'next/link'

import CustomButton from '@/components/Common/Buttons/CustomButton'
import IconChevronRight from '@/components/Icons/IconChevronRight'

interface Props {
    classes?: string
    size?: 'sm' | 'lg'
    children?: React.ReactNode
}

function GoToShopButton({
    classes,
    size,
    children = 'Check out all products in our shop!'
}:Props) {
    const pathname = usePathname();
    const productTabPath = pathname.split('/')[1]

    return (
        <NextLink href={`/shop?tab=${productTabPath}`} >
            <CustomButton size={size} variant="primary" classes={classes}>
                {children}
                <IconChevronRight classes="ms-1" />
            </CustomButton>
        </NextLink>
    )
}

export default GoToShopButton