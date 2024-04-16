import styles from '../ShopProductCard.module.scss'

import { Steamer, SteamerVariant } from '@/model/Steamer'
import { Luggage, LuggageVariant } from '@/model/Luggage'
import { Accessory, AccessoryVariant } from '@/model/Accessory'
import { useModalContext } from '@/context/modalContext'

interface Props {
    imgUrl: string
    product: Steamer | Luggage | Accessory
    variant: SteamerVariant | AccessoryVariant | LuggageVariant 
}

function ShopProductCardImage({
    imgUrl,
    product,
    variant
}: Props) {
    const { showModalHandler } = useModalContext()

    return (
        <div className="overflow-hidden position-relative">
            <img onClick={() => showModalHandler(true, product, variant)} className={`img-fluid ${styles['shop-product-card-img']} `} src={imgUrl} alt={product.name} />
        </div>
    )
}

export default ShopProductCardImage