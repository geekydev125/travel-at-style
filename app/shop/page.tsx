"use client"
import { useModalContext } from "@/context/modalContext"

import ProductsTabs from "@/components/ShopViewComponents/ProductsTabs"
import ProductModal from "@/components/ShopViewComponents/ProductModal"

function ShopPage() {
	const { showModal } = useModalContext()

	return (
		<section className="container py-lg-5">
			<h3 className="display-2 mb-4 text-custom-dark fw-semibold">Shop</h3>
			<ProductsTabs />

			{showModal && <ProductModal />}
		</section>
	)
}

export default ShopPage