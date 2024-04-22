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
    const { removeProductFromCart, isProductInCart, increaseProductQuantity } = useCartContext()

    return (
        <div>
            <img src={product.img} alt={product.productCategory} style={{ height: '100px', width: 'auto' }} />
            <p className="text-custom-dark">{product._id} - {product.productCategory} - {product.quantity}</p>

            <CustomButton variant="success" onClick={() => increaseProductQuantity(product._id)} size='sm' classes="me-2 mt-sm-1 mt-xl-0">
                Add to cart&nbsp;
                <IconPlus />
            </CustomButton>

            {
                isProductInCart(product._id) && (
                    <CustomButton variant="danger" size="sm" onClick={() => removeProductFromCart(product._id)}>
                        Remove from cart&nbsp;
                        <IconMinus />
                    </CustomButton>
                )
            }
        </div>
    )
}

export default CartDrawerProductCart