"use client"
import { useCartDrawerContext } from '@/context/cartDrawerContext'
import dynamic from 'next/dynamic'

const CartDrawer = dynamic(() => import('@/components/Cart/CartDrawer'), {
    ssr: false,
    loading: () => null
})

function CartDrawerDynamicLoader() {
    const { showDrawer } = useCartDrawerContext()

    return (
        <>
            { showDrawer && <CartDrawer />}
        </>
    )
}

export default CartDrawerDynamicLoader