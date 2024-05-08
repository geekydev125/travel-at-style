"use client"
import { useCartContext } from "@/context/cartContext"

function TotalProducts() {
    const { getCartTotalProducts } = useCartContext()
    
    return (
        <>
            {getCartTotalProducts() > 0 && `(${getCartTotalProducts()} product${getCartTotalProducts() > 1 ? 's' : ''} selected)`}
        </>
    )
}

export default TotalProducts