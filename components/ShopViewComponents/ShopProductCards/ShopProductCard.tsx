import { Accessory } from "@/model/Accessory"
import { Luggage } from "@/model/Luggage"

import ShopProductCardPrice from "./ShopProductCardComponents/ShopProductCardPrice"
import ShopProductCardImage from "./ShopProductCardComponents/ShopProductCardImage"
import ShopProductCardButtons from "./ShopProductCardComponents/ShopProductCardButtons"
import { Steamer } from "@/model/Steamer"

interface Props {
    product: Luggage | Accessory | Steamer
}

function ShopProductCard({
    product,
}: Props) {
    return (
        <div className="position-relative background-light-gradient h-100">
            <ShopProductCardPrice price={product.price} />

            <ShopProductCardImage product={product} />

            <ShopProductCardButtons product={product} />
        </div>
    )
}

export default ShopProductCard