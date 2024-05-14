import { ILuggage } from '@/model/Luggage'
import { IAccessory } from '@/model/Accessory'

import ProductsContentWrapper from '@/components/ProductsContentWrapper'

import getProductsData from '@/lib/getProductsData'

interface Props {
    productCategory: "luggage" | "accessories"
}

async function LuggageAccessoriesProducts({
    productCategory
}: Props) {
    const products: ILuggage[] | IAccessory[] = await getProductsData(`${productCategory}`)

    return (
        <ProductsContentWrapper products={products} cardType='product' />
    )
}

export default LuggageAccessoriesProducts