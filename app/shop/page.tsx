import { Metadata } from "next"

import ProductsTabs from "@/components/ShopViewComponents/ProductsTabs"
import ProductModal from "@/components/ShopViewComponents/ProductModal"

export const metadata: Metadata = {
    title: "Shop",
}

function ShopPage() {
	return (
		<>
			<ProductsTabs />

			<ProductModal />
		</>
	)
}

export default ShopPage