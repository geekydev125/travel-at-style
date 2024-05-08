"use client"
import { useCartDrawerContext } from '@/context/cartDrawerContext'
import dynamic from 'next/dynamic'

const DynamicDrawer = dynamic(() => import('@/components/Cart/Drawer/Drawer'), {
    ssr: false,
    loading: () => null
})

function DrawerDynamicLoader() {
    const { showDrawer } = useCartDrawerContext()

    return (
        <>
            { showDrawer && <DynamicDrawer />}
        </>
    )
}

export default DrawerDynamicLoader