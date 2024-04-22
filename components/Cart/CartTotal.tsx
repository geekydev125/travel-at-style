import { useCartContext } from "@/context/cartContext"


function CartTotal() {
    const { getCartTotalPrice } = useCartContext()

    return (
        <p className="text-custom-dark display-6 fw-bold mb-0">
            Total: $
            {getCartTotalPrice()}
        </p>
    )
}

export default CartTotal