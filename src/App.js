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
import theme from "./data/theme.json"

function App() {
    const updateTheme = () => {
        const currentTheme = localStorage.getItem("theme");

        if (currentTheme) {
            document.documentElement.setAttribute("data-theme", currentTheme);
        }
    }

    useEffect(() => {
        // Function to apply styles to root element (e.g., <html> or <body>)
        const applyRootStyles = () => {
            const rootStyles =
                `
                :root {
                    --primary-color: ${theme.dark.primary_color};
                    --secondary-color: ${theme.dark.secondary_color};
                    --selection-color: ${theme.dark.selection_color};
                    --font-primary-color: ${theme.dark.font_primary_color};
                    --font-secondary-color: ${theme.dark.font_secondary_color};
                    --error-color: ${theme.dark.error_color};
                    --bg-color: ${theme.dark.bg_color};
                    --widget-color: ${theme.dark.widget_color};
                    --widget-mask-color: ${theme.dark.widget_mask_color};
                    --number-color: ${theme.dark.number_color};
                    --primary-font: ${theme.dark.primary_font};
                }


                [data-theme="light"] {
                    --primary-color: ${theme.light.primary_color};
                    --secondary-color: ${theme.light.secondary_color};
                    --selection-color: ${theme.light.selection_color};
                    --font-primary-color: ${theme.light.font_primary_color};
                    --font-secondary-color: ${theme.light.font_secondary_color};
                    --error-color: ${theme.light.error_color};
                    --bg-color: ${theme.light.bg_color};
                    --widget-color: ${theme.light.widget_color};
                    --widget-mask-color: ${theme.light.widget_mask_color};
                    --number-color: ${theme.light.number_color};
                    --primary-font: ${theme.light.primary_font};

                    --fiber-color-one: ${theme.light.fiber_color_one};
                    --fiber-color-two: ${theme.light.fiber_color_two};
                    --fiber-color-three: ${theme.light.fiber_color_three};
                    --fiber-color-four: ${theme.light.fiber_color_four};
                    --fiber-color-five: ${theme.light.fiber_color_five};
                    --fiber-color-six: ${theme.light.fiber_color_six};
                }
              `;

            const styleTag = document.createElement('style');
            styleTag.innerHTML = rootStyles;
            document.head.appendChild(styleTag);
        };

        applyRootStyles(); // Call the function when component mounts
    }, []);

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
