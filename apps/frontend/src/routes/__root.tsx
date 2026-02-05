import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Scripts,
	useRouterState,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import LoadingScreen from "@/components/loading-screen";
import SmoothScroll from "@/components/smooth-scroll";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";

const queryClient = new QueryClient();

export const Route = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Proven Path",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),

	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	const routerState = useRouterState();
	const [isInitialLoading, setIsInitialLoading] = useState(true);

	useEffect(() => {
		// Simulate initial load completion
		// In a real app, you might wait for critical data or just the window load event
		const handleLoad = () => {
			setIsInitialLoading(false);
		};

		if (document.readyState === "complete") {
			handleLoad();
		} else {
			window.addEventListener("load", handleLoad);
			return () => window.removeEventListener("load", handleLoad);
		}
	}, []);

	const isPending = routerState.status === "pending";
	const showLoading = isInitialLoading || isPending;

	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body className="flex flex-col min-h-screen">
				<LoadingScreen isVisible={showLoading} />
				<QueryClientProvider client={queryClient}>
					<SmoothScroll>
						<Header />
						<main className="flex-1 flex flex-col">{children}</main>
						<Footer />
					</SmoothScroll>
					<Toaster />
				</QueryClientProvider>
				<Scripts />
			</body>
		</html>
	);
}
