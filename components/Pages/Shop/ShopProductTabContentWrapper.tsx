import React, { Suspense, lazy } from 'react'

import AirplaneLoader from '@/components/Common/Loader/AirplaneLoader'

import ShopProductTabContentPlaceholder from '@/components/Common/Placeholders/Shop/ShopProductTabContentPlaceholder'

import { IProducts } from './ShopProductTabs';

const LazyProductsTab = lazy(() => import('@/components/Pages/Shop/ShopProductTabContent'))

interface Props {
    products: IProducts['steamers'] | IProducts['luggage'] | IProducts['accessories'],
    isLoading: boolean
}

function ShopProductTabContentWrapper({
    products,
    isLoading
}: Props) {
    return (
        <>
            {isLoading
                ? <AirplaneLoader />
                : products.length > 0 && (
                    <Suspense fallback={<ShopProductTabContentPlaceholder productsLength={products.length} />}>
                        <LazyProductsTab products={products} />
                    </Suspense >
                )
            }
        </>
    )
}

export default ShopProductTabContentWrapper