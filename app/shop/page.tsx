"use client"
import { useModalContext } from "@/context/modalContext"

import ProductsTabs from "@/components/ShopViewComponents/ProductsTabs"
import ProductModal from "@/components/ShopViewComponents/ProductModal"

function ShopPage() {
	const { showModal } = useModalContext()

	return (
		<section className="container py-5">
			<ProductsTabs />

			{showModal && <ProductModal />}		
		</section>
	)
}

export default ShopPage