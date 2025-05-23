import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Spanish Practice",
	description: "It's a platform to practice Spanish",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<script
					defer
					data-domain="nptel-forest-quiz.vercel.app"
					src="https://plausible.io/js/script.js"
				></script>
			</head>
			<body className={inter.className}>{children}</body>
			<Analytics />
		</html>
	);
}
