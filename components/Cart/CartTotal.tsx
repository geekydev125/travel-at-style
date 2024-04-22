import { useCartContext } from "@/context/cartContext"


function CartTotal() {
    const { getCartTotal } = useCartContext()

    return (
        <p className="text-custom-dark display-6 fw-bold mb-0">
            Total: $
            {getCartTotal()}
        </p>
    )
}

export default CartTotal