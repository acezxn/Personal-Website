import { useEffect, useState } from "react";
import { ReactComponent as Sun } from "./../sun.svg"
import { ReactComponent as Moon } from "./../moon.svg"
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
                        <Sun width={35} height={35} color="#680bd9"/>
                    ) : (
                        <Moon width={35} height={35} fill="#8ee729" />
                    )
                }
            </button>

        </>
    );
}