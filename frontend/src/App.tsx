import { Outlet } from "react-router";
import Navbar from "./Components/Navbar";
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <div>
			<Navbar />
			<Outlet />
            <ToastContainer />
		</div>
    );
}

export default App;
