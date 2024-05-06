import { ICartProduct } from "@/context/cartContext"

import DrawerAddRemoveCartButtons from "./DrawerAddRemoveCartButtons"

interface Props {
    product: ICartProduct
}

function DrawerProductCard({
    product
}: Props) {

    return (
        <div className="border text-center h-100 d-flex flex-column">
            <img src={product.img} alt={product.productCategory} style={{ height: 'auto', width: '100%' }} />
            
            <div className="p-1 flex-grow-1">
                <h6 className="mb-0 fw-bold">{product.name} {`${product.color ? ` (${product.color})` : ''}`}</h6>
                <p className="mb-0">Quantity: {product.quantity}</p>
            </div>

            <div className="d-flex flex-row justify-content-between background-light-gradient p-2">
                <DrawerAddRemoveCartButtons product={product} />
            </div>
        </div>
    )
}

export default DrawerProductCard