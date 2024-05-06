import { Metadata } from "next"

import ShopProductsTabs from "@/components/Pages/Shop/ShopProductTabs"
import ProductModalDynamicLoader from "@/components/Common/ProductModal/ProductModalDynamicLoader"

export const metadata: Metadata = {
    title: "Shop",
}

function ShopPage() {
	return (
		<>
			<ShopProductsTabs />

			<ProductModalDynamicLoader />
		</>
	)
}

export default ShopPage