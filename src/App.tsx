import Navbar from "@/components/deso-clone/Navbar";
import HeroSection from "@/components/deso-clone/HeroSection";
import InvestorList from "@/components/deso-clone/InvestorList";
import MessageSection from "@/components/deso-clone/MessageSection";
import Chapter2 from "@/components/deso-clone/Chapter2";

function App() {
    return (
        <div className="min-h-screen bg-[#000818]">
            <Navbar />

            <main className="z-0 flex-grow block w-full f-full">
                <HeroSection />
                <InvestorList />
                <MessageSection />
                <Chapter2 />
            </main>
        </div>
    );
}

export default App;
