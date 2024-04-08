import styles from './page.module.scss'

import BackgroundVideo from "@/components/BackgroundVideo"
import IconDoubleDown from "@/components/Icons/IconDoubleDown"
import VideoOverlay from '@/components/VideoOverlay'

function SteamersPage() {
	return (
		<>
			<VideoOverlay alpha={0.4} />
			<BackgroundVideo
				videoSrc="/assets/video/besteam/besteam.mp4"
				posterSrc="/assets/video/besteam/besteam-poster.mp4"
				classes="vh-100 w-100 position-absolute top-0 z-0 object-fit-cover"
			/>

			<div className="position-absolute top-50 z-1 w-100">
				<div className='text-center w-100 mb-5'>
					<h3 className='text-white text-uppercase'>The Revolutionary Travel Size Steamer From Italy</h3>
					<IconDoubleDown fill='white' classes={styles['animated-icon']} width='30px' height='30px'/>
				</div>

				<div className={`text-center py-4 ${styles['gray-gradient-background']}`}>
					<h3 className='text-white'>The steamer that has taken America by storm now available for purchase online</h3>
					<button className='btn btn-success btn-lg mt-3'>GET YOURS NOW!</button>
				</div>

			</div>
		</>
	)
}

export default SteamersPage