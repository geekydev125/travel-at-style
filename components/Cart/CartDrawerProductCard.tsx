import { ICartProduct } from "@/context/cartContext"

import CardDrawerAddRemoveCartButtons from "./CardDrawerAddRemoveCartButtons"

interface Props {
    product: ICartProduct
}

function CartDrawerProductCard({
    product
}: Props) {

    return (
        <div className="border text-center">
            <img src={product.img} alt={product.productCategory} style={{ height: 'auto', width: '100%' }} />
            
            <div className="p-1">
                <h6 className="text-custom-dark mb-0 fw-bold">{product.name} {`${product.color ? ` (${product.color})` : ''}`}</h6>
                <p className="text-custom-dark mb-0">Quantity: {product.quantity}</p>
            </div>

            <div className="d-flex flex-row justify-content-between background-light-gradient p-2">
                <CardDrawerAddRemoveCartButtons product={product} />
            </div>
        </div>
    )
}

export default CartDrawerProductCard