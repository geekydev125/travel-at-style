import type { Metadata } from "next";
import { Inter } from "next/font/google";

import 'react-toastify/dist/ReactToastify.min.css';
import "../styles/globals.scss";

import Providers from "./providers";

import BootstrapClient from "@/components/BootstrapClient";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import CartDrawerDynamicLoader from "@/components/Cart/CartDrawerDynamicLoader";
import NotificationDynamicLoader from "@/components/Notification/NotificationDynamicLoader";

const inter = Inter({ subsets: ["latin"] });

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
				<body style={{ minHeight: '100vh' }} className={`${inter.className} d-flex flex-column  background-pattern-crossword`}>
					<Header />

					<main className="flex-grow-1 overflow-hidden">
						{children}
					</main>

					<CartDrawerDynamicLoader />
					<NotificationDynamicLoader />

					<Footer />

					<BootstrapClient />

				</body>
			</Providers>
		</html>
	);
}
