import { useCartContext } from "@/context/cartContext"
import { useNotificationContext } from "@/context/notificationContext"

function ClearCart() {
    const { clearCart } = useCartContext()
    const {displayNotification} = useNotificationContext()

    function onClickHandler() {
        clearCart()
        displayNotification('All products have been cleared from the shopping cart', 'error')
    }

    return (
        <span className='ms-2 text-primary fw-semibold ' style={{ cursor: 'pointer' }} onClick={onClickHandler}>
            Clear Cart
        </span>
    )
}

export default ClearCart