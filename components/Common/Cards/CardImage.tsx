"use client"
import styles from '@/components/Common/Cards/Card.module.scss'

import { useModalContext } from '@/context/modalContext'

import { ISteamer } from '@/model/Steamer'
import { ILuggage } from '@/model/Luggage'
import { IAccessory } from '@/model/Accessory'

interface Props {
    product: ISteamer | ILuggage | IAccessory,
    modalType: 'shop' | 'product'
}

function CardImage({
    product,
    modalType
}: Props) {
    const { showModalHandler } = useModalContext()

    return (
        <div className="overflow-hidden position-relative">
            <img onClick={() => showModalHandler(true, product, modalType)} className={`img-fluid ${styles['shop-card-img']} `} src={`/assets/img/${product.imgFolder}/${product.img}`} alt={product.name} />
        </div>
    )
}

export default CardImage