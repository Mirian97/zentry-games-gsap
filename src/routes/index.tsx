import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/hero";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<main className="relative min-h-dvh w-dvw overflow-x-hidden">
			<Hero />
		</main>
	);
}
