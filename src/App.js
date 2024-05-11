import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { ResumePage } from "./pages/ResumePage";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { useEffect } from "react";

function App() {
    const updateTheme = () => {
        const currentTheme = localStorage.getItem("theme");

        if (currentTheme) {
            document.documentElement.setAttribute("data-theme", currentTheme);
        }
    }

    useEffect(() => {
        updateTheme();
        window.addEventListener("storage", updateTheme);
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/resume" element={<ResumePage />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
