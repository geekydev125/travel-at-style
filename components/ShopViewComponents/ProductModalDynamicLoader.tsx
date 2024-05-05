"use client"
import dynamic from "next/dynamic"

import { useModalContext } from "@/context/modalContext"

const DynamicProductModal = dynamic(() => import('@/components/ShopViewComponents/ProductModal'), {
	loading: () => null,
	ssr: false
})

function ProductModalDynamicLoader() {
	const { showModal } = useModalContext()

	return (
		<>
			{showModal && <DynamicProductModal />}
		</>
	)
}

export default ProductModalDynamicLoader