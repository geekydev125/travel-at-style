import type { Metadata } from "next";
import { Inter, Play} from "next/font/google";

import 'react-toastify/dist/ReactToastify.min.css';
import "../styles/globals.scss";

import Providers from "@/components/Providers";

import BootstrapClient from "@/components/BootstrapClient";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import DrawerDynamicLoader from "@/components/Cart/Drawer/DrawerDynamicLoader";
import NotificationDynamicLoader from "@/components/Common/Notification/NotificationDynamicLoader";

const interFont = Inter({ 
	weight: ["400", "500", "600"],
	style: "normal",
	subsets: ["latin"]
});

const playFont = Play({
	weight: ["400"],
	style: "normal",
	subsets: ["latin"]
});

export const metadata: Metadata = {
	icons: {
		icon: "/assets/favicon/favicon.ico",
		apple: "/assets/favicon/apple-icon.png",
	},
	title: {
		default: "Travel @ Style",
		template: "Travel @ Style | %s",
	},
	description: "Indulge in the elegance of Italian steamers, find practical travel bags, and explore our range of accessories at Travel @ Style. Elevate your travel experience with comfort and sophistication."
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Providers>
				<body style={{ minHeight: '100vh' }} className={` d-flex flex-column background-pattern-crossword`}>
					<Header fontClass={playFont.className} />

					<main className={`${interFont.className} flex-grow-1 overflow-hidden d-flex flex-column`}>
						{children}
					</main>

					<DrawerDynamicLoader />
					<NotificationDynamicLoader />

					<Footer fontClass={playFont.className} />

					<BootstrapClient />

				</body>
			</Providers>
		</html>
	);
}
