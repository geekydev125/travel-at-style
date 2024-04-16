import { Accessory } from "@/model/Accessory"
import { Luggage } from "@/model/Luggage"

import ShopProductCardPrice from "./ShopProductCardComponents/ShopProductCardPrice"
import ShopProductCardImage from "./ShopProductCardComponents/ShopProductCardImage"
import ShopProductCardButtons from "./ShopProductCardComponents/ShopProductCardButtons"
import { Steamer, SteamerVariant } from "@/model/Steamer"
import { ProductVariant } from "@/model/Product"

interface Props {
    product: Luggage | Accessory | Steamer
    variant: SteamerVariant | ProductVariant
}

function ShopProductCard({
    product,
    variant
}: Props) {

    return (
        <div className="position-relative background-light-gradient">
            <ShopProductCardPrice price={variant.price} />

            <ShopProductCardImage imgUrl={`/assets/img/${product.imgFolder}/${variant.img}`} product={product} variant={variant} />

            <ShopProductCardButtons product={product} variant={variant} />
        </div>
    )
}

export default ShopProductCard