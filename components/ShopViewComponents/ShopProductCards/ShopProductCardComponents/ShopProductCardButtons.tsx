
import { useModalContext } from "@/context/modalContext"
import { useCartContext } from "@/context/cartContext"

import { Accessory } from "@/model/Accessory"
import { Luggage } from "@/model/Luggage"
import { Steamer } from "@/model/Steamer"

import CustomButton from "@/components/CustomButton"
import IconPlus from "@/components/Icons/IconPlus"
import IconMinus from "@/components/Icons/IconMinus"

import Button from "react-bootstrap/Button"

interface Props {
    product: Steamer | Luggage | Accessory,
}

function ShopProductCardButtons({
    product,
}: Props) {
    const { showModalHandler } = useModalContext()
    const { addProductToCart, removeProductFromCart, isProductInCart } = useCartContext()

    return (
        <div className="d-flex flex-row flex-sm-column flex-xl-row justify-content-between align-items-center px-2 py-4 position-relative overflow-hidden">
            <Button variant='text' onClick={() => showModalHandler(true, product)} className="text-custom-dark fw-bold h5 mb-0 px-md-0 px-lg-2">
                {product.name}
                {(product as Steamer).color ? ` (${(product as Steamer).color})` : ''}
            </Button>
            <CustomButton variant="success" onClick={() => addProductToCart(product)} size='sm' classes="me-2 mt-sm-1 mt-xl-0">
                Add to cart&nbsp;
                <IconPlus />
            </CustomButton>
            {
                isProductInCart(product._id) && (
                    <CustomButton variant="danger" size="sm" onClick={() => removeProductFromCart(product)}>
                        Remove from cart&nbsp;
                        <IconMinus />
                    </CustomButton>
                )
            }

        </div>
    )
}

export default ShopProductCardButtons