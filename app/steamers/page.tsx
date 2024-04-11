import BesteamVideoBackground from '@/components/SteamersViewComponents/BesteamVideoBackground'
import TextOverBackgroundVideo from '@/components/SteamersViewComponents/TextOverBackgroundVideo'
import FirstSectionCallToAction from '@/components/SteamersViewComponents/SectionComponents/FirstSectionCallToAction'
import SecondSectionBesteamDescription from '@/components/SteamersViewComponents/SectionComponents/SecondSectionBesteamDescription'
import ThirdSectionBesteamVideo from '@/components/SteamersViewComponents/SectionComponents/ThirdSectionBesteamVideo'
import FourthSectionShopOverview from '@/components/SteamersViewComponents/SectionComponents/FourthSectionShopOverview'

function SteamersPage() {
	return (
		<>
			<BesteamVideoBackground />

			<div className="position-relative z-1">
				<TextOverBackgroundVideo />

				<FirstSectionCallToAction />

				<SecondSectionBesteamDescription />

				<ThirdSectionBesteamVideo />

				<FourthSectionShopOverview />
			</div>
		</>
	)
}

export default SteamersPage