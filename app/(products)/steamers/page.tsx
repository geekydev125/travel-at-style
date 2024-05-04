import { Metadata } from "next";

import BesteamVideoBackground from '@/components/SteamersViewComponents/BesteamVideoBackground'
import FirstSectionCallToAction from '@/components/SteamersViewComponents/SectionComponents/FirstSectionComponents/FirstSectionCallToAction'
import SecondSectionBesteamDescription from '@/components/SteamersViewComponents/SectionComponents/SecondSectionBesteamDescription'
import ThirdSectionBesteamVideo from '@/components/SteamersViewComponents/SectionComponents/ThirdSectionBesteamVideo'
import FourthSectionShopOverview from '@/components/SteamersViewComponents/SectionComponents/FourthSectionComponents/FourthSectionShopOverview'
import SteamerSlider from '@/components/SteamersViewComponents/SteamerSlider'
import FifthSectionCallToActionDiscounts from '@/components/SteamersViewComponents/SectionComponents/FifthSectionCallToActionDiscounts'

export const metadata: Metadata = {
    title: "Steamers",
}

function SteamersPage() {
	return (
		<>
			<BesteamVideoBackground />

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