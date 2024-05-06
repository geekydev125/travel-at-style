import Accessory from "@/model/Accessory"
import Luggage from "@/model/Luggage"
import Steamer from "@/model/Steamer"

import ShopCardPrice from "./ShopCardPrice"
import ShopCardImage from "./ShopCardImage"
import ShopCardButtons from "./ShopCardButtons"

interface Props {
    product: Luggage | Accessory | Steamer
}

function ShopCard({
    product,
}: Props) {
    return (
        <div className="position-relative background-light-gradient h-100">
            <ShopCardPrice price={product.price} />

            <ShopCardImage product={product} />

            <ShopCardButtons product={product} />
        </div>
    )
}

export default ShopCard