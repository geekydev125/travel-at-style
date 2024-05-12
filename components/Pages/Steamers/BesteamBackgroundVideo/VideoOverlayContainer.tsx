import BackgroundVideo from "@/components/Pages/Steamers/BesteamBackgroundVideo/BesteamBackgroundVideo"
import VideoOverlay from '@/components/Pages/Steamers/BesteamBackgroundVideo/VideoOverlay'

import IconAnimatedScroll from '@/components/Icons/IconAnimatedScroll'

function VideoOverlayContainer() {
	return (
		<>
			<VideoOverlay alpha={0.4}>
				<IconAnimatedScroll />
			</VideoOverlay>
			<BackgroundVideo />
		</>
	)
}

export default VideoOverlayContainer