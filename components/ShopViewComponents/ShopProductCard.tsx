import { Accessory } from "@/model/Accessory"
import { Luggage } from "@/model/Luggage"

import styles from './ShopProductCard.module.scss'

interface Props {
    product: Luggage | Accessory
}

function ShopProductCard({
    product
}: Props) {
    return (
        <div className="position-relative background-light-gradient" style={{ backgroundColor: 'lightgray' }}>
            <span className="background-light-gradient text-custom-dark mb-0 position-absolute z-1 top-0 end-0 p-2 fw-bold h5" style={{ borderBottomLeftRadius: '7px' }}>
                ${product.price}
            </span>

            <div className="overflow-hidden position-relative">
                <img className={`img-fluid ${styles['shop-product-card-img']} `} src={`/assets/img/${product.imgFolder}/${product.img}`} alt={product.name} />
            </div>

            <div className="d-flex justify-content-between align-items-center px-2 py-4 position-relative overflow-hidden">

                <span className="text-custom-dark fw-bold h5 mb-0">{product.name}</span>
                <button className="btn btn-success btn-sm me-2">Add to cart</button>
            </div>

        </div>
    )
}

export default ShopProductCard