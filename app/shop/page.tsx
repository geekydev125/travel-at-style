"use client"
import { useModalContext } from "@/context/modalContext"

import ProductsTabs from "@/components/ShopViewComponents/ProductsTabs"
import ProductModal from "@/components/ShopViewComponents/ProductModal"

import Container from "react-bootstrap/Container"

function ShopPage() {
	const { showModal } = useModalContext()

	return (
		<Container as='section' className="py-lg-5">
			<h3 className="display-2 mb-4 text-custom-dark fw-semibold">Shop</h3>
			<ProductsTabs />

			{showModal && <ProductModal />}
		</Container>
	)
}

export default ShopPage