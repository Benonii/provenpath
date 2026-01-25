import { getCalApi } from "@calcom/embed-react";
import type { ReactNode } from "react";

export function BookCallDialogTrigger({ children }: { children: ReactNode }) {
	const handleClick = async () => {
		const cal = await getCalApi({ namespace: "free-consultation-call" });
		cal("ui", {
			cssVarsPerTheme: {
				light: { "cal-brand": "#F3CC3D" },
				dark: { "cal-brand": "#30343A" },
			},
			hideEventTypeDetails: false,
			layout: "month_view",
		});
		cal("modal", { calLink: "benoni-esckinder/free-consultation-call" });
	};

	return (
		<span onClick={handleClick} style={{ display: "contents" }}>
			{children}
		</span>
	);
}
