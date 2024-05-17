import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { ResumePage } from "./pages/ResumePage";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { useEffect } from "react";
import { NotFound } from "./pages/NotFound";
import { ProjectsPage } from "./pages/ProjectsPage";
import { Secret } from "./pages/Secret";

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
        window.dispatchEvent(new Event("storage"));
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/resume" element={<ResumePage />}></Route>
                <Route path="/projects" element={<ProjectsPage />}></Route>
                <Route path="/secret" element={<Secret />}></Route>
                <Route path="/*" element={<NotFound />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
