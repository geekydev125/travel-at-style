"use client"
import { useEffect, useState } from "react"

import Accessory from "@/model/Accessory"
import Luggage from "@/model/Luggage"

import CardImage from "@/components/Common/Cards/CardImage"
import CardPrice from "@/components/Common/Cards/CardPrice"
import CardButtons from "@/components/Common/Cards/CardButtons"

import CardPlaceholder from "../../Placeholders/Shop/CardPlaceholder"

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
        <div className="position-relative background-light-gradient h-100">
            <CardPrice price={product.price} />

            <CardImage product={product} />

            <CardButtons product={product} cardType="product"/>
        </div>
    )
}

export default ProductCard