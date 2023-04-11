import SubmitButton from "@/components/SubmitButton";
import SyncLoader from "@/components/spinners/SyncLoaded";
import ScaleLoader from "@/components/spinners/ScaleLoader";

function App() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            {/* <SyncLoader /> */}
            <ScaleLoader />
        </div>
    );
}

export default App;
