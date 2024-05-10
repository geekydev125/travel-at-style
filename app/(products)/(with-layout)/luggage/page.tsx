import { Metadata } from 'next'

import LuggageAccessoriesProducts from '@/components/Pages/LuggageAccessories/LuggageAccessoriesProducts'

export const metadata: Metadata = {
    title: "Luggage",
}

function LuggagePage() {

	return (
		<>
			<LuggageAccessoriesProducts productCategory="luggage" />
		</ >
	)
}

export default LuggagePage