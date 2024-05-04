import { useCartContext } from "@/context/cartContext"

interface Props {
    displaySize?: string
}

function CartTotal({
    displaySize = "display-6"
}: Props) {
    const { getCartTotalPrice } = useCartContext()

    return (
        <p className={`${displaySize} fw-bold mb-0`}>
            Total: $
            {getCartTotalPrice()}
        </p>
    )
}

export default CartTotal