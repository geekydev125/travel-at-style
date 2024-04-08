import VideoOverlay from "@/components/HomeViewComponents/VideoOverlay";
import styles from "./page.module.css";
import HomeViewBackgroundVideo from "@/components/HomeViewComponents/HomeViewBackgroundVideo";

export default function Home() {
	return (
		<div className="overflow-hidden z-1" style={{ height: '100vh' }}>
			<VideoOverlay />
			<HomeViewBackgroundVideo />
		</div>
	);
}
