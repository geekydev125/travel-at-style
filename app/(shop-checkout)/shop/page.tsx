import ShopProductsTabs from "@/components/Pages/Shop/ShopProductTabs"
import ProductModalDynamicLoader from "@/components/Common/ProductModal/ProductModalDynamicLoader"

function ShopPage() {
	return (
		<>
			<ShopProductsTabs />

			<ProductModalDynamicLoader />
		</>
	)
}

export default ShopPage