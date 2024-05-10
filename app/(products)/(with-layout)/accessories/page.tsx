import { Metadata } from "next";

import LuggageAccessoriesProducts from "@/components/Pages/LuggageAccessories/LuggageAccessoriesProducts";

export const metadata: Metadata = {
    title: "Accessories",
}

function AccessoriesPage() {
	return (
		<LuggageAccessoriesProducts productCategory="accessories" />
	)
}

export default AccessoriesPage