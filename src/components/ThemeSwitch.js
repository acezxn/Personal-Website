import { useEffect, useState } from "react";
import { ReactComponent as Sun } from "./../sun.svg"
import { ReactComponent as Moon } from "./../moon.svg"
export const ThemeSwitch = () => {
    const [theme, setTheme] = useState("");
    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        } else {
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
    }
    useEffect(() => {
        const currentTheme = localStorage.getItem("theme");

        if (currentTheme) {
            document.documentElement.setAttribute("data-theme", currentTheme);
            setTheme(currentTheme);

            // if (currentTheme === 'dark') {
            //     toggleSwitch.checked = true;
            // }
        }
    }, [theme]);

    return (
        <>
            <button style={{ backgroundColor: "transparent", border: "none" }} onClick={toggleTheme}>
                {
                    theme === "dark" ? (
                        <Moon width={40} height={40} style={{ filter: "invert(1)" }} />
                    ) : (
                        <Sun width={40} height={40} />
                    )
                }
            </button>

        </>
    );
}