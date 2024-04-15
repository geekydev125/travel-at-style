import { Accessory } from "@/model/Accessory"
import { Luggage } from "@/model/Luggage"

import styles from './ShopProductCard.module.scss'
import Button from "react-bootstrap/Button"

interface Props {
    product: Luggage | Accessory
    showModalHandler: (showBool: boolean, product?: Luggage | Accessory) => void
}

function ShopProductCard({
    product,
    showModalHandler
}: Props) {
    return (
        <div className="position-relative background-light-gradient" style={{ backgroundColor: 'lightgray' }}>
            <span className="background-light-gradient text-custom-dark mb-0 position-absolute z-1 top-0 end-0 p-2 fw-bold h5" style={{ borderBottomLeftRadius: '7px' }}>
                ${product.price}
            </span>

            <div className="overflow-hidden position-relative">
                <img onClick={() => showModalHandler(true, product)} className={`img-fluid ${styles['shop-product-card-img']} `} src={`/assets/img/${product.imgFolder}/${product.img}`} alt={product.name} />
            </div>

            <div className="d-flex justify-content-between align-items-center px-2 py-4 position-relative overflow-hidden">
                
                <Button variant='text' onClick={() => showModalHandler(true, product)} className="text-custom-dark fw-bold h5 mb-0">{product.name}</Button>
				<Button variant='button' className="btn btn-success btn-sm me-2">Add to cart</Button>
            </div>

        </div>
    )
}

export default ShopProductCard