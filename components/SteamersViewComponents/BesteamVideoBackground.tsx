import BackgroundVideo from "@/components/SteamersViewComponents/BackgroundVideo"
import VideoOverlay from '@/components/VideoOverlay'

function BesteamVideoBackground() {
	return (
		<>
			<VideoOverlay alpha={0.4} />
			<BackgroundVideo />
		</>
	)
}

export default BesteamVideoBackground