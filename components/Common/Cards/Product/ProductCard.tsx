"use client"
import { useEffect, useState } from "react"

import Accessory from "@/model/Accessory"
import Luggage from "@/model/Luggage"

import CardImage from "@/components/Common/Cards/CardImage"
import CardPrice from "@/components/Common/Cards/CardPrice"
import CardButtons from "@/components/Common/Cards/CardButtons"

import CardPlaceholder from "@/components/Common/Placeholders/Shop/CardPlaceholder"
import CardContainer from "@/components/Common/Cards/CardContainer"

interface Props {
    product: Accessory | Luggage
}

function ProductCard({
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

            <CardButtons product={product} cardType="product"/>
        </CardContainer>
    )
}

export default ProductCard