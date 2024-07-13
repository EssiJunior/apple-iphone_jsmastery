import dynamic from "next/dynamic";
import Navbar from "../containers/Navbar"
import Hero from "../containers/Hero"
import Highlights from "../containers/Highlights"
import Model from "../containers/Model";
import Features from "../containers/Features";
import HowItWorks from "../containers/HowItWorks";
import Footer from "../containers/Footer";

function Home() {
    return (
        <main className="bg-black">
            <Hero />
            <Highlights />
            <Model />
            <Features />
            <HowItWorks />
        </main>

    );
}

const App = dynamic(() => Promise.resolve(Home), { ssr: false });

export default App;