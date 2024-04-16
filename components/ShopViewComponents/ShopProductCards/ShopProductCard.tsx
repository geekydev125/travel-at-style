import { Accessory } from "@/model/Accessory"
import { Luggage } from "@/model/Luggage"

import ShopProductCardPrice from "./ShopProductCardComponents/ShopProductCardPrice"
import ShopProductCardImage from "./ShopProductCardComponents/ShopProductCardImage"
import ShopProductCardButtons from "./ShopProductCardComponents/ShopProductCardButtons"

interface Props {
    product: Luggage | Accessory
}

function ShopProductCard({
    product,
}: Props) {

    return (
        <div className="position-relative background-light-gradient">
            <ShopProductCardPrice price={product.price} />

            <ShopProductCardImage imgUrl={`/assets/img/${product.imgFolder}/${product.img}`} product={product} />

            <ShopProductCardButtons product={product} />
        </div>
    )
}

export default ShopProductCard