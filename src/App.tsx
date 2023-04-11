import SubmitButton from "@/components/SubmitButton";
import SyncLoader from "@/components/spinners/SyncLoaded";
import ScaleLoader from "@/components/spinners/ScaleLoader";
import BarLoader from "@/components/spinners/BarLoader";

function App() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            {/* <SyncLoader /> */}
            {/* <ScaleLoader /> */}
            <BarLoader />
        </div>
    );
}

export default App;
