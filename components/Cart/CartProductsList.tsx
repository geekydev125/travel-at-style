import uniqid from "uniqid"

import { useCartContext } from "@/context/cartContext"

import CartDrawerProductCard from "./CartDrawerProductCard"

function CartProductsList() {
    const { cart } = useCartContext()
    
    return (
        <div className="container">
            <div className="row gx-3 gy-4">
                {cart.map((product) => (
                    <div className="col-6" key={uniqid()}>
                        <CartDrawerProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CartProductsList