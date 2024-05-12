import { ICartProduct, useCartContext } from "@/context/cartContext"
import { useNotificationContext } from "@/context/notificationContext"

import IconPlus from "@/components/Icons/IconPlus"
import IconMinus from "@/components/Icons/IconMinus"
import CustomButton from "@/components/Common/Buttons/CustomButton"

interface Props {
    product: ICartProduct,
}

function DrawerAddRemoveCartButtons({
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
        displayNotification(`${product.name} ${product.color ? ` (${product.color})` : ''} removed from cart`, 'error')
    }

    return (
        <>
            <CustomButton variant="danger" size="sm" onClick={() => removeProductHandler(product)} classesButton="btn-feedback p-0 lh-1">
                <IconMinus stroke="white" height="20px" width="20px" classes="shadow-sm btn-feedback" />
            </CustomButton>

            <p className="mb-0 fw-semibold">${(product.price * product.quantity).toFixed(2)}</p>

            <CustomButton variant="success" onClick={() => addProductHandler(product)} classesButton="btn-feedback p-0 lh-1">
                <IconPlus stroke="white" height="20px" width="20px" classes="shadow-sm btn-feedback" />
            </CustomButton>
        </>
    )
}

export default DrawerAddRemoveCartButtons