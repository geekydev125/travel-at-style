import { ICartProduct, useCartContext } from "@/context/cartContext"

import IconPlus from "@/components/Icons/IconPlus"
import IconMinus from "@/components/Icons/IconMinus"

interface Props {
    product: ICartProduct,
}

function CardDrawerAddRemoveCartButtons({
    product,
}: Props) {
    const { increaseProductQuantity, removeProductFromCart } = useCartContext()
    return (
        <>
            <div style={{ cursor: 'pointer' }} onClick={() => removeProductFromCart(product._id)}>
                <IconMinus stroke="red" height="25px" width="25px" classes="shadow-sm" />
            </div>

            <p className="text-custom-dark mb-0 fw-semibold">${(product.price * product.quantity).toFixed(2)}</p>

            <div style={{ cursor: 'pointer' }} onClick={() => increaseProductQuantity(product._id)}>
                <IconPlus stroke="green" height="25px" width="25px" classes="shadow-sm" />
            </div>
        </>
    )
}

export default CardDrawerAddRemoveCartButtons