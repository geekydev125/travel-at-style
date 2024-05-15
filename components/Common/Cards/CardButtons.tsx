"use client"
import { useEffect, useState } from "react"

import styles from '@/components/Common/Cards/Card.module.scss'

import { ICartProduct, useCartContext } from "@/context/cartContext"
import { useModalContext } from "@/context/modalContext"

import { IAccessory } from "@/model/Accessory"
import { ILuggage } from "@/model/Luggage"
import { ISteamer } from "@/model/Steamer"

import IconChevronRight from "@/components/Icons/IconChevronRight"
import AddRemoveCartButtons from "@/components/Common/Buttons/AddRemoveCartButtons"
import CustomButtonWithLink from "@/components/Common/Buttons/CustomButtonWithLink"

import Badge from "react-bootstrap/esm/Badge"

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
        <div className="d-flex flex-column justify-content-between flex-grow-1 px-2 py-3 p-lg-3 position-relative overflow-hidden">

            <div className="d-flex flex-column flex-xl-row justify-content-between">
                <span
                    onClick={() => showModalHandler(true, product, modalType)}
                    className={`${styles['shop-card-title']} mb-0 px-md-0 display-6 fw-bold text-dark`}
                >
                    <p className='mb-1'>
                        {product.name}
                        <span>{(product as ISteamer).color ? ` (${(product as ISteamer).color})` : ''}</span>
                    </p>
                </span>

                {
                    (productQuantityInCart && cardType === 'shop')
                        ? (
                            <Badge pill bg="secondary" className="py-1 mt-1 fw-semibold">
                                <span className="text-dark">Quantity: {productQuantityInCart}</span>
                            </Badge>
                        )
                        : cardType === 'product'
                            ? ""
                            : <span style={{ height: '22px' }}></span>
                }
            </div>

            <div className="w-100 d-flex flex-row justify-content-center justify-content-md-end align-items-end flex-grow-1">
                {cardType === 'shop' && <AddRemoveCartButtons classesAddButton="mt-1 text-nowrap" classesRemoveButton="me-1 text-nowrap" product={product} />}

                {cardType === 'product' && (
                    <CustomButtonWithLink href={`/shop?tab=${product.productCategory}`} classesButton="text-nowrap" variant="primary" size="sm">
                        Get Yours Now!
                        <IconChevronRight classes="ms-1" />
                    </CustomButtonWithLink>
                )}
            </div>
        </div >
    )
}

export default CardButtons