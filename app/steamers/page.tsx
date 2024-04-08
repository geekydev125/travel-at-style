import BesteamVideoBackground from '@/components/SteamersViewComponents/BesteamVideoBackground'
import styles from './page.module.scss'
import TextOverBackgroundVideo from '@/components/SteamersViewComponents/TextOverBackgroundVideo'
import FirstSectionCallToAction from '@/components/SteamersViewComponents/FirstSectionCallToAction'



function SteamersPage() {
	return (
		<>
			<BesteamVideoBackground />

			<div className="position-absolute top-50 z-1 w-100">
				<TextOverBackgroundVideo />

				<FirstSectionCallToAction />

				<section>

				</section>
			</div>
		</>
	)
}

export default SteamersPage