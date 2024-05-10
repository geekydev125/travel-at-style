import { useCartContext } from "@/context/cartContext"

import { ILuggage } from "@/model/Luggage"
import { IAccessory } from "@/model/Accessory"
import { ISteamer } from "@/model/Steamer"

import CustomButton from "@/components/Common/Buttons/CustomButton"
import IconPlus from "@/components/Icons/IconPlus"
import IconMinus from "@/components/Icons/IconMinus"
import { useNotificationContext } from "@/context/notificationContext"

interface Props {
    product: ILuggage | IAccessory | ISteamer,
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

    function addProductHandler(product: ILuggage | IAccessory | ISteamer) {
        addProductToCart(product)
        displayNotification(`${product.name} ${(product as ISteamer).color ? ` (${(product as ISteamer).color})` : ''} added to cart`, 'success')
    }

    function removeProductHandler(product: ILuggage | IAccessory | ISteamer) {
        removeProductFromCart(product._id)
        displayNotification(`${product.name} ${(product as ISteamer).color ? ` (${(product as ISteamer).color})` : ''} removed from cart`, 'error')
    }

    return (
        <div className="d-flex flex-row">
            {
                isProductInCart(product._id) && (
                    <CustomButton classes={`${classesRemoveButton} btn-feedback`} variant="danger" size="sm" onClick={() => removeProductHandler(product)}>
                        <IconMinus />
                    </CustomButton>
                )
            }

            <CustomButton variant="success" onClick={() => addProductHandler(product)} size='sm' classes={`${classesAddButton} btn-feedback`}>
                Add to cart&nbsp;
                <IconPlus />
            </CustomButton>
        </div>
    )
}

export default AddRemoveCartButtons