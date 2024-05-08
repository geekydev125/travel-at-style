"use client"
import styles from '@/components/Common/Cards/Shop/ShopCard.module.scss'

import { useModalContext } from '@/context/modalContext'

import Steamer from '@/model/Steamer'
import Luggage from '@/model/Luggage'
import Accessory from '@/model/Accessory'

interface Props {
    product: Steamer | Luggage | Accessory
}

function ShopCardImage({
    product,
}: Props) {
    const { showModalHandler } = useModalContext()

    return (
        <div className="overflow-hidden position-relative">
            <img onClick={() => showModalHandler(true, product)} className={`img-fluid ${styles['shop-card-img']} `} src={`/assets/img/${product.imgFolder}/${product.img}`} alt={product.name} />
        </div>
    )
}

export default ShopCardImage