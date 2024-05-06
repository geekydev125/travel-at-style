import BackgroundVideo from "@/components/Pages/Steamers/BesteamBackgroundVideo/BesteamBackgroundVideo"
import VideoOverlay from '@/components/Pages/Steamers/BesteamBackgroundVideo/VideoOverlay'

function VideoOverlayContainer() {
	return (
		<>
			<VideoOverlay alpha={0.4} />
			<BackgroundVideo />
		</>
	)
}

export default VideoOverlayContainer