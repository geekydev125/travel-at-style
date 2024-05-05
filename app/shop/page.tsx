import { Metadata } from "next"

import ProductsTabs from "@/components/ShopViewComponents/ProductsTabs"
import ProductModalDynamicLoader from "@/components/ShopViewComponents/ProductModalDynamicLoader"

export const metadata: Metadata = {
    title: "Shop",
}

function ShopPage() {
	return (
		<>
			<ProductsTabs />

			<ProductModalDynamicLoader />
		</>
	)
}

export default ShopPage