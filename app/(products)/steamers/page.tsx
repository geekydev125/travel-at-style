import { Metadata } from "next";

import VideoOverlayContainer from '@/components/Pages/Steamers/BesteamBackgroundVideo/VideoOverlayContainer'
import CallToAction from '@/components/Pages/Steamers/Sections/First/CallToAction'
import BesteamDescription from '@/components/Pages/Steamers/Sections/Second/BesteamDescription'
import ShopOverview from '@/components/Pages/Steamers/Sections/Fourth/ShopOverview'
import SteamerSlider from '@/components/Pages/Steamers/SteamerSlider/SteamerSlider'
import CallToActionDiscounts from '@/components/Pages/Steamers/Sections/Fifth/CallToActionDiscounts'
import BesteamVideoContainer from "@/components/Pages/Steamers/Sections/Third/BesteamVideoContainer";

export const metadata: Metadata = {
    title: "Steamers",
}

function SteamersPage() {
	return (
		<>
			<VideoOverlayContainer />

			<div className="position-relative z-1">
				<CallToAction />

				<BesteamDescription />

				<BesteamVideoContainer />

				<ShopOverview />

				<SteamerSlider />

				<CallToActionDiscounts />
			</div>
		</>
	)
}

export default SteamersPage