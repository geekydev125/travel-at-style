import VideoOverlay from "@/components/VideoOverlay";
import BackgroundVideo from "@/components/BackgroundVideo";

export default function Home() {
	return (
		<div className="overflow-hidden z-1" style={{ height: '100vh' }}>
			<VideoOverlay />

			<BackgroundVideo
				videoSrc="/assets/video/ny-timelapse/ny-timelapse.mp4"
				posterSrc="/assets/video/ny-timelapse/ny-timelapse-poster.jpg"
			/>
		</div>
	);
}
