import { ICartProduct } from "@/context/cartContext"

import DrawerAddRemoveCartButtons from "./DrawerAddRemoveCartButtons"

import Badge from "react-bootstrap/Badge"

interface Props {
    product: ICartProduct
}

function DrawerProductCard({
    product
}: Props) {

    return (
        <div className="border text-center h-100 d-flex flex-column">
            <img src={product.img} alt={product.productCategory} style={{ height: 'auto', width: '100%' }} />

            <div className="p-1 flex-grow-1 d-flex flex-column">
                <h6 className="mb-0 fw-bold">{product.name} {`${product.color ? ` (${product.color})` : ''}`}</h6>

                <Badge pill bg="secondary" className="py-1 my-1 fw-semibold">
                   <span className="text-dark">Quantity: {product.quantity}</span>
                </Badge>
            </div>

            <div className="d-flex flex-row justify-content-between background-light-gradient p-2">
                <DrawerAddRemoveCartButtons product={product} />
            </div>
        </div>
    )
}

export default DrawerProductCard