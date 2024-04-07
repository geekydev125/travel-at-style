import styles from "./page.module.css";
import HomeViewBackgroundVideo from "@/components/HomeViewComponents/HomeViewBackgroundVideo";

export default function Home() {
	return (
		<main className={styles.main}>
			<HomeViewBackgroundVideo />
		</main>
	);
}
