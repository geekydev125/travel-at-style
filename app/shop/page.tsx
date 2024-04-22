"use client"
import { useModalContext } from "@/context/modalContext"

import ProductsTabs from "@/components/ShopViewComponents/ProductsTabs"
import ProductModal from "@/components/ShopViewComponents/ProductModal"
import CartDrawer from "@/components/Cart/CartDrawer"

function ShopPage() {
	const { showModal } = useModalContext()

	return (
		<section className="container py-5">
			<CartDrawer />
			<ProductsTabs />

			{showModal && <ProductModal />}		
		</section>
	)
}

export default ShopPage