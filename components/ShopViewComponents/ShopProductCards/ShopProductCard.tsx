import { Accessory } from "@/model/Accessory"
import { Luggage } from "@/model/Luggage"

import ShopProductCardPrice from "./ShopProductCardComponents/ShopProductCardPrice"
import ShopProductCardImage from "./ShopProductCardComponents/ShopProductCardImage"
import { Steamer } from "@/model/Steamer"
import ShopProductCardButtons from "./ShopProductCardComponents/ShopProductCardButtons"

interface Props {
    product: Luggage | Accessory
    showModalHandler: (showBool: boolean, product?: Steamer | Luggage | Accessory) => void
}

function ShopProductCard({
    product,
    showModalHandler
}: Props) {
    return (
        <div className="position-relative background-light-gradient">
            <ShopProductCardPrice price={product.price} />

            <ShopProductCardImage
                imgUrl={`/assets/img/${product.imgFolder}/${product.img}`}
                product={product}
                showModalHandler={showModalHandler}
            />

            <ShopProductCardButtons
                product={product}
                showModalHandler={showModalHandler}
            />
        </div>
    )
}

export default ShopProductCard