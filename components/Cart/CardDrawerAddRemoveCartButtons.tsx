import { ICartProduct, useCartContext } from "@/context/cartContext"
import { useNotificationContext } from "@/context/notificationContext"

import IconPlus from "@/components/Icons/IconPlus"
import IconMinus from "@/components/Icons/IconMinus"

interface Props {
    product: ICartProduct,
}

function CardDrawerAddRemoveCartButtons({
    product,
}: Props) {
    const { increaseProductQuantity, removeProductFromCart } = useCartContext()
    const { displayNotification } = useNotificationContext()

    function addProductHandler(product: ICartProduct) {
        increaseProductQuantity(product._id)
        displayNotification(`${product.name} ${product.color ? ` (${product.color})` : ''} added to cart`, 'success')
    }

    function removeProductHandler(product: ICartProduct) {
        removeProductFromCart(product._id)
        displayNotification(`${product.name} ${product.color ? ` (${product.color})` : ''} removed from cart`, 'warning')
    }

    return (
        <>
            <div style={{ cursor: 'pointer' }} onClick={() => removeProductHandler(product)}>
                <IconMinus stroke="red" height="25px" width="25px" classes="shadow-sm" />
            </div>

            <p className="text-custom-dark mb-0 fw-semibold">${(product.price * product.quantity).toFixed(2)}</p>

            <div style={{ cursor: 'pointer' }} onClick={() => addProductHandler(product)}>
                <IconPlus stroke="green" height="25px" width="25px" classes="shadow-sm" />
            </div>
        </>
    )
}

export default CardDrawerAddRemoveCartButtons