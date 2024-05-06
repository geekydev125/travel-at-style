import { Metadata } from "next";

import VideoOverlayContainer from '@/components/Pages/Steamers/BesteamBackgroundVideo/VideoOverlayContainer'
import FirstSectionCallToAction from '@/components/Pages/Steamers/Sections/First/CallToAction'
import SecondSectionBesteamDescription from '@/components/Pages/Steamers/Sections/Second/BesteamDescription'
import ThirdSectionBesteamVideo from '@/components/Pages/Steamers/Sections/Third/BesteamVideo'
import FourthSectionShopOverview from '@/components/Pages/Steamers/Sections/Fourth/ShopOverview'
import SteamerSlider from '@/components/Pages/Steamers/SteamerSlider/SteamerSlider'
import FifthSectionCallToActionDiscounts from '@/components/Pages/Steamers/Sections/Fifth/CallToActionDiscounts'

export const metadata: Metadata = {
    title: "Steamers",
}

function SteamersPage() {
	return (
		<>
			<VideoOverlayContainer />

			<div className="position-relative z-1">
				<FirstSectionCallToAction />

				<SecondSectionBesteamDescription />

				<ThirdSectionBesteamVideo />

				<FourthSectionShopOverview />

				<SteamerSlider />

				<FifthSectionCallToActionDiscounts />
			</div>
		</>
	)
}

export default SteamersPage