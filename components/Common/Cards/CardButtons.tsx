"use client"
import NextLink from "next/link"

import styles from '@/components/Common/Cards/Shop/ShopCard.module.scss'

import { useModalContext } from "@/context/modalContext"

import Accessory from "@/model/Accessory"
import Luggage from "@/model/Luggage"
import Steamer from "@/model/Steamer"

import CustomButton from "@/components/Common/Buttons/CustomButton"
import IconChevronRight from "@/components/Icons/IconChevronRight"
import AddRemoveCartButtons from "@/components/Common/Buttons/AddRemoveCartButtons"

interface Props {
    product: Steamer | Luggage | Accessory,
    cardType: 'product' | 'shop'
}

function CardButtons({
    product,
    cardType
}: Props) {
    const { showModalHandler } = useModalContext()

    return (
        <div className="d-flex flex-row flex-sm-column flex-xl-row justify-content-between align-items-center px-2 py-4 position-relative overflow-hidden">

            <span onClick={() => showModalHandler(true, product)} className={`${styles['shop-card-title']} mb-0 px-md-0 px-lg-2 display-6 fw-bold text-dark`}>
                <span className='text-uppercase'>{product.name}</span>
                {(product as Steamer).color ? ` (${(product as Steamer).color})` : ''}
            </span>

            {cardType === 'shop' && <AddRemoveCartButtons classesAddButton="mt-sm-2 mt-xl-0" classesRemoveButton="me-1" product={product} />}
            {cardType === 'product' && (
                <NextLink href={`/shop?tab=${product.productCategory}`} >
                    <CustomButton variant="primary" size="sm">
                        GET YOURS NOW!
                        <IconChevronRight />
                    </CustomButton>
                </NextLink>
            )}

        </div>
    )
}

export default CardButtons