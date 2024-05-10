"use client"
import { useEffect, useState } from "react"
import NextLink from "next/link"

import styles from '@/components/Common/Cards/Shop/ShopCard.module.scss'

import { ICartProduct, useCartContext } from "@/context/cartContext"
import { useModalContext } from "@/context/modalContext"

import { IAccessory } from "@/model/Accessory"
import { ILuggage } from "@/model/Luggage"
import { ISteamer } from "@/model/Steamer"

import CustomButton from "@/components/Common/Buttons/CustomButton"
import IconChevronRight from "@/components/Icons/IconChevronRight"
import AddRemoveCartButtons from "@/components/Common/Buttons/AddRemoveCartButtons"

interface Props {
    product: ISteamer | ILuggage | IAccessory,
    cardType: 'product' | 'shop'
}

function CardButtons({
    product,
    cardType
}: Props) {
    const { showModalHandler } = useModalContext()
    const { cart, isProductInCart } = useCartContext()
    const modalType = cardType;
    let [productQuantityInCart, setProductQuantityInCart] = useState<ICartProduct['quantity'] | 0>(0)

    useEffect(() => {
        let productInCart = isProductInCart(product._id)
        if (productInCart) {
            setProductQuantityInCart((productInCart as ICartProduct).quantity)
        } else {
            setProductQuantityInCart(0)
        }
    }, [cart])

    return (
        <div className="d-flex flex-row justify-content-between align-items-start flex-sm-column justify-content-center align-items-sm-center flex-xl-row  align-items-xl-start px-2 pt-4 pb-4 position-relative overflow-hidden">

            <div className="pb-sm-2 pb-xl-0">
                <span
                    onClick={() => showModalHandler(true, product, modalType)}
                    className={`${styles['shop-card-title']} mb-0 px-md-0 display-6 fw-bold text-dark`}
                >
                    <span className='text-uppercase'>{product.name}</span>
                    {(product as ISteamer).color ? ` (${(product as ISteamer).color})` : ''}
                </span>

                {(productQuantityInCart && cardType === 'shop') ? <p className="mb-0 d-sm-none d-xl-block">Quantity: {productQuantityInCart}</p> : ''}

            </div>



            {cardType === 'shop' && <AddRemoveCartButtons classesAddButton="mt-sm-2 mt-xl-0 text-nowrap" classesRemoveButton="me-1 text-nowrap" product={product} />}

            {cardType === 'product' && (
                <NextLink href={`/shop?tab=${product.productCategory}`} >
                    <CustomButton variant="primary" size="sm" classes="text-nowrap" >
                        Get Yours Now!
                        <IconChevronRight classes="ms-1" />
                    </CustomButton>
                </NextLink>
            )}

            {(productQuantityInCart && cardType === 'shop') ? <p className="mb-0 d-none mt-sm-2 d-sm-block d-xl-none">Quantity: {productQuantityInCart}</p> : ''}
        </div>
    )
}

export default CardButtons