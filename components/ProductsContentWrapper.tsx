import React, { Suspense, lazy, memo } from 'react'

import ProductsContentPlaceholder from '@/components/Common/Placeholders/Shop/ProductsContentPlaceholder'

import { IProducts } from '@/components/Pages/Shop/ShopProductTabs';

const LazyProductsContent = lazy(() => import('@/components/ProductsContent'))

interface Props {
    products: IProducts['steamers'] | IProducts['luggage'] | IProducts['accessories'],
    cardType: "shop" | "product"
}

function ProductsContentWrapper({
    products,
    cardType
}: Props) {
    return (
        <>
            <Suspense fallback={<ProductsContentPlaceholder productsLength={products.length} />}>
                <LazyProductsContent products={products} cardType={cardType} />
            </Suspense >
        </>
    )
}

export default memo(ProductsContentWrapper)