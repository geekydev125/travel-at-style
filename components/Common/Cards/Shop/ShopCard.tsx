"use client"
import { useEffect, useState } from "react"

import Accessory from "@/model/Accessory"
import Luggage from "@/model/Luggage"
import Steamer from "@/model/Steamer"

import CardPrice from "@/components/Common/Cards/CardPrice"
import CardImage from "@/components/Common/Cards/CardImage"
import CardButtons from "@/components/Common/Cards/CardButtons"
import CardContainer from "@/components/Common/Cards/CardContainer"

import CardPlaceholder from "@/components/Common/Placeholders/Shop/CardPlaceholder"

interface Props {
    product: Luggage | Accessory | Steamer
}

function ShopCard({
    product,
}: Props) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(false)
    }, [])

    return isLoading
        ? <CardPlaceholder />
        : (
            <CardContainer>
                <CardPrice price={product.price} />

                <CardImage product={product} />

                <CardButtons product={product} cardType="shop" />
            </CardContainer>
        )
}

export default ShopCard