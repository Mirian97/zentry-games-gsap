import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { NavBar } from "@/components/nav-bar";
import { Features } from "@/components/features";
import { Story } from "@/components/story";
import { Footer } from "@/components/footer";
import { Contact } from "@/components/contact";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return (
		<main className="relative min-h-dvh w-dvw overflow-x-hidden">
			<NavBar />
			<Hero />
			<About />
			<Features />
			<Story />
			<Contact />
			<Footer />
		</main>
	);
}
