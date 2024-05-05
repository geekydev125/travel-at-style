import { useCartContext } from "@/context/cartContext"

function ClearCart() {
    const { clearCart } = useCartContext()
    return (
        <span className='ms-2 text-primary fw-semibold ' style={{ cursor: 'pointer' }} onClick={clearCart}>
            Clear Cart
        </span>
    )
}

export default ClearCart