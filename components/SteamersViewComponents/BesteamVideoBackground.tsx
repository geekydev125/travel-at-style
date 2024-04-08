import BackgroundVideo from "@/components/BackgroundVideo"
import VideoOverlay from '@/components/VideoOverlay'

function BesteamVideoBackground() {
	return (
		<>
			<VideoOverlay alpha={0.4} />
			<BackgroundVideo
				videoSrc="/assets/video/besteam/besteam.mp4"
				posterSrc="/assets/video/besteam/besteam-poster.mp4"
				classes="vh-100 w-100 position-absolute top-0 z-0 object-fit-cover"
			/>
		</>
	)
}

export default BesteamVideoBackground