"use client"
import { useCartDrawerContext } from '@/context/cartDrawerContext'
import dynamic from 'next/dynamic'

const CartDrawer = dynamic(() => import('@/components/Cart/Drawer/Drawer'), {
    ssr: false,
    loading: () => null
})

function DrawerDynamicLoader() {
    const { showDrawer } = useCartDrawerContext()

    return (
        <>
            { showDrawer && <CartDrawer />}
        </>
    )
}

export default DrawerDynamicLoader