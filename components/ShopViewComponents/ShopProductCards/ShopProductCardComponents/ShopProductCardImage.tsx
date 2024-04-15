import styles from '../ShopProductCard.module.scss'

import { Steamer } from '@/model/Steamer'
import { Luggage } from '@/model/Luggage'
import { Accessory } from '@/model/Accessory'

interface Props {
    imgUrl: string
    product: Steamer | Luggage | Accessory
    showModalHandler: (showBool: boolean, product?: Steamer | Luggage | Accessory) => void
}

function ShopProductCardImage({
    imgUrl,
    product,
    showModalHandler
}: Props) {
    return (
        <div className="overflow-hidden position-relative">
            <img onClick={() => showModalHandler(true, product)} className={`img-fluid ${styles['shop-product-card-img']} `} src={imgUrl} alt={product.name} />
        </div>
    )
}

export default ShopProductCardImage