import VideoOverlay from "@/components/HomeViewComponents/VideoOverlay";
import styles from "./page.module.css";
import HomeViewBackgroundVideo from "@/components/HomeViewComponents/HomeViewBackgroundVideo";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className="overflow-hidden" style={{height: '100vh'}}>
				<VideoOverlay />
				<HomeViewBackgroundVideo />
			</div>
		</main>
	);
}
