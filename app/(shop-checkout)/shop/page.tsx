import getProductsData from '@/lib/getProductsData';

import { ISteamer } from "@/model/Steamer";
import { ILuggage } from "@/model/Luggage";
import { IAccessory } from "@/model/Accessory";

import ShopProductsTabs from "@/components/Pages/Shop/ShopProductTabs"
import ProductModalDynamicLoader from "@/components/Common/ProductModal/ProductModalDynamicLoader"

async function ShopPage() {
	const steamers: ISteamer[] = await getProductsData('steamers')
	const luggage: ILuggage[] = await getProductsData('luggage')
	const accessories: IAccessory[] = await getProductsData('accessories')

	return (
		<>
			<ShopProductsTabs products={{steamers, luggage, accessories}} />

			<ProductModalDynamicLoader />
		</>
	)
}

export default ShopPage