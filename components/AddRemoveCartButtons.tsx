import { useCartContext } from "@/context/cartContext"

import { Luggage } from "@/model/Luggage"
import { Accessory } from "@/model/Accessory"
import { Steamer } from "@/model/Steamer"

import CustomButton from "@/components/CustomButton"
import IconPlus from "@/components/Icons/IconPlus"
import IconMinus from "@/components/Icons/IconMinus"

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
    return (
        <div className="d-flex flex-row">
            {
                isProductInCart(product._id) && (
                    <CustomButton classes={classesRemoveButton} variant="danger" size="sm" onClick={() => removeProductFromCart(product._id)}>
                        <IconMinus />
                    </CustomButton>
                )
            }

            <CustomButton variant="success" onClick={() => addProductToCart(product)} size='sm' classes={classesAddButton}>
                Add to cart&nbsp;
                <IconPlus />
            </CustomButton>
        </div>
    )
}

export default AddRemoveCartButtons