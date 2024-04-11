import BesteamVideoBackground from '@/components/SteamersViewComponents/BesteamVideoBackground'
import TextOverBackgroundVideo from '@/components/SteamersViewComponents/TextOverBackgroundVideo'
import FirstSectionCallToAction from '@/components/SteamersViewComponents/SectionComponents/FirstSectionCallToAction'
import SecondSectionBesteamDescription from '@/components/SteamersViewComponents/SectionComponents/SecondSectionBesteamDescription'
import ThirdSectionBesteamVideo from '@/components/SteamersViewComponents/SectionComponents/ThirdSectionBesteamVideo'
import FourtSectionShopOverview from '@/components/SteamersViewComponents/SectionComponents/FourtSectionShopOverview'

function SteamersPage() {
	return (
		<>
			<BesteamVideoBackground />

			<div className="position-absolute z-1 w-100" style={{top: '65%'}}>
				<TextOverBackgroundVideo />

				<FirstSectionCallToAction />

				<SecondSectionBesteamDescription />

				<ThirdSectionBesteamVideo />

				<FourtSectionShopOverview />
			</div>
		</>
	)
}

export default SteamersPage