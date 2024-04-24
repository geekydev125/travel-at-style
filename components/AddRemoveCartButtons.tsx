import { useCartContext } from "@/context/cartContext"

import { Luggage } from "@/model/Luggage"
import { Accessory } from "@/model/Accessory"
import { Steamer } from "@/model/Steamer"

import CustomButton from "@/components/CustomButton"
import IconPlus from "@/components/Icons/IconPlus"
import IconMinus from "@/components/Icons/IconMinus"
import { useNotificationContext } from "@/context/notificationContext"

interface Props {
    product: Luggage | Accessory | Steamer,
    classesAddButton?: string,
    classesRemoveButton?: string,
}

function AddRemoveCartButtons({
    product,
    classesAddButton,
    classesRemoveButton
}: Props) {
    const { addProductToCart, removeProductFromCart, isProductInCart } = useCartContext()
    const { displayNotification } = useNotificationContext()

    function addProductHandler(product: Luggage | Accessory | Steamer) {
        addProductToCart(product)
        displayNotification(`${product.name} ${(product as Steamer).color ? ` (${(product as Steamer).color})` : ''} added to cart`, 'success')
    }

    function removeProductHandler(product: Luggage | Accessory | Steamer) {
        removeProductFromCart(product._id)
        displayNotification(`${product.name} ${(product as Steamer).color ? ` (${(product as Steamer).color})` : ''} removed from cart`, 'warning')
    }

    return (
        <div className="d-flex flex-row">
            {
                isProductInCart(product._id) && (
                    <CustomButton classes={classesRemoveButton} variant="danger" size="sm" onClick={() => removeProductHandler(product)}>
                        <IconMinus />
                    </CustomButton>
                )
            }

            <CustomButton variant="success" onClick={() => addProductHandler(product)} size='sm' classes={classesAddButton}>
                Add to cart&nbsp;
                <IconPlus />
            </CustomButton>
        </div>
    )
}

export default AddRemoveCartButtons