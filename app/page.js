import dynamic from "next/dynamic";
import Navbar from "../containers/Navbar"
import Hero from "../containers/Hero"
import Highlights from "../containers/Highlights"

function Home() {
    return (
        <main className="bg-black">
            <Navbar />
            <Hero />
            <Highlights />
        </main>

    );
}

const App = dynamic(() => Promise.resolve(Home), { ssr: false });

export default App;