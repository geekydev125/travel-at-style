import styles from '../ShopProductCard.module.scss'

import { Steamer } from '@/model/Steamer'
import { Luggage } from '@/model/Luggage'
import { Accessory } from '@/model/Accessory'
import { useModalContext } from '@/context/modalContext'

interface Props {
    product: Steamer | Luggage | Accessory
}

function ShopProductCardImage({
    product,
}: Props) {
    const { showModalHandler } = useModalContext()

    return (
        <div className="overflow-hidden position-relative">
            <img onClick={() => showModalHandler(true, product)} className={`img-fluid ${styles['shop-product-card-img']} `} src={`/assets/img/${product.imgFolder}/${product.img}`} alt={product.name} />
        </div>
    )
}

export default ShopProductCardImage