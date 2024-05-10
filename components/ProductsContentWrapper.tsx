import React, { Suspense, lazy } from 'react'

import AirplaneLoader from '@/components/Common/Loader/AirplaneLoader'

import ProductsContentPlaceholder from '@/components/Common/Placeholders/Shop/ProductsContentPlaceholder'

import { IProducts } from '@/components/Pages/Shop/ShopProductTabs';

const LazyProductsTab = lazy(() => import('@/components/ProductsContent'))

interface Props {
    products: IProducts['steamers'] | IProducts['luggage'] | IProducts['accessories'],
    isLoading: boolean,
    cardType: "shop" | "product"
}

function ProductsContentWrapper({
    products,
    isLoading,
    cardType
}: Props) {
    return (
        <>
            {isLoading
                ? <AirplaneLoader />
                : products.length > 0 && (
                    <Suspense fallback={<ProductsContentPlaceholder productsLength={products.length} />}>
                        <LazyProductsTab products={products} cardType={cardType}/>
                    </Suspense >
                )
            }
        </>
    )
}

export default ProductsContentWrapper