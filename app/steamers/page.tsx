import BesteamVideoBackground from '@/components/SteamersViewComponents/BesteamVideoBackground'
import TextOverBackgroundVideo from '@/components/SteamersViewComponents/TextOverBackgroundVideo'
import FirstSectionCallToAction from '@/components/SteamersViewComponents/FirstSectionCallToAction'
import SecondSectionBesteamDescription from '@/components/SteamersViewComponents/SecondSectionBesteamDescription'

function SteamersPage() {
	return (
		<>
			<BesteamVideoBackground />

			<div className="position-absolute z-1 w-100" style={{top: '65%'}}>
				<TextOverBackgroundVideo />

				<FirstSectionCallToAction />

				<SecondSectionBesteamDescription />

			</div>
		</>
	)
}

export default SteamersPage