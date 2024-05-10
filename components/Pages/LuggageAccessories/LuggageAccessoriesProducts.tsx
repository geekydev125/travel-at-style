"use client"
import { useEffect, useState } from 'react'

import { useNotificationContext } from '@/context/notificationContext'

import { ILuggage } from '@/model/Luggage'
import { IAccessory } from '@/model/Accessory'

import { baseUrl } from '@/lib/baseUrl'

import ProductsContentWrapper from '@/components/ProductsContentWrapper'

interface Props {
    productCategory: "luggage" | "accessories"
}

function LuggageAccessoriesProducts({
    productCategory
}: Props) {
    const { displayNotification } = useNotificationContext()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [products, setProducts] = useState<ILuggage[] | IAccessory[]>([])

    useEffect(() => {
        fetch(`${baseUrl}/api/products/${productCategory}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
                setIsLoading(false)
            }).catch((error) => {
                displayNotification("An error occurred while fetching the requested resource", 'error')
            })
    }, [])

    return (
        <ProductsContentWrapper products={products} isLoading={isLoading} cardType='product' />
    )
}

export default LuggageAccessoriesProducts