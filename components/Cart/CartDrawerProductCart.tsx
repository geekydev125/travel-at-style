import { ICartProduct, useCartContext } from "@/context/cartContext"

import CustomButton from "@/components/CustomButton"
import IconPlus from "@/components/Icons/IconPlus"
import IconMinus from "@/components/Icons/IconMinus"

interface Props {
    product: ICartProduct
}

function CartDrawerProductCart({
    product
}: Props) {
    const { removeProductFromCart, increaseProductQuantity } = useCartContext()

    return (
        <div className="border text-center">
            <img src={product.img} alt={product.productCategory} style={{ height: 'auto', width: '100%' }} />
            
            <div className="p-1">
                <h6 className="text-custom-dark mb-0 fw-bold">{product.name} {`${product.color ? ` (${product.color})` : ''}`}</h6>
                <p className="text-custom-dark mb-0">Quantity: {product.quantity}</p>
            </div>

            <div className="d-flex flex-row justify-content-between background-light-gradient p-2">
                <div style={{cursor: 'pointer'}} onClick={() => removeProductFromCart(product._id)}>
                    <IconMinus stroke="red" height="25px" width="25px" classes="shadow-sm"/>
                </div>

                <p className="text-custom-dark mb-0">${(product.price * product.quantity).toFixed(2)}</p>

                <div style={{cursor: 'pointer'}} onClick={() => increaseProductQuantity(product._id)}>
                    <IconPlus stroke="green" height="25px" width="25px" classes="shadow-sm" />
                </div>
            </div>
        </div>
    )
}

export default CartDrawerProductCart