import Navbar from "../containers/Navbar"
import Hero from "../containers/Hero"
import Highlights from "../containers/Highlights"

export default function Home() {
    return (
        <main className="bg-black">
            <Navbar />
            <Hero />
            <Highlights />
        </main>

    );
}
