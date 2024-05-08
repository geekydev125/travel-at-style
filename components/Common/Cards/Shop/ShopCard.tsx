"use client"
import { useEffect, useState } from "react"

import Accessory from "@/model/Accessory"
import Luggage from "@/model/Luggage"
import Steamer from "@/model/Steamer"

import CardPrice from "@/components/Common/Cards/CardPrice"
import CardImage from "@/components/Common/Cards/CardImage"
import CardButtons from "@/components/Common/Cards/CardButtons"
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
            <div className="position-relative background-light-gradient h-100">
                <CardPrice price={product.price} />

                <CardImage product={product} />

                <CardButtons product={product} cardType="shop" />
            </div>
        )
}

export default ShopCard