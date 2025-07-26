import { useEffect, useState } from "react";
import themeData from "./../data/theme.json"
import { MdBrightnessLow } from "react-icons/md";
import { MdBrightnessHigh } from "react-icons/md";

export const ThemeSwitch = () => {
    const [theme, setTheme] = useState("");

    const toggleTheme = () => {
        if (theme === "light") {
            localStorage.setItem("theme", "dark");
            setTheme("dark");
        } else {
            localStorage.setItem("theme", "light");
            setTheme("light");
        }
        
        document.documentElement.setAttribute("data-theme", theme);
        window.dispatchEvent(new Event("storage"));
    }

    const updateTheme = () => {
        const currentTheme = localStorage.getItem("theme");

        if (currentTheme) {
            document.documentElement.setAttribute("data-theme", currentTheme);
            setTheme(currentTheme);
        }
    }
    
    useEffect(() => {
        updateTheme();
    }, []);

    return (
        <>
            <button style={{ backgroundColor: "transparent", border: "none" }} onClick={toggleTheme}>
                {
                    theme === "light" ? (
                        <MdBrightnessHigh size={30} color={themeData.light.primary_color}/>
                    ) : (
                        <MdBrightnessLow size={30} color={themeData.dark.primary_color}/>
                    )
                }
            </button>

        </>
    );
}