import AppTitle from "@/components/landing-page";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
	return (
		<>
			<AppTitle />
			<SpeedInsights />
		</>
	);
}
