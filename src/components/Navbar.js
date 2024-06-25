import { ThemeSwitch } from "./ThemeSwitch"
import "./css/Navbar.css"

export const Navbar = () => {
    return (
        <div className="navbar">
            <a href="/"><input type="button" className="monospace button" value="Home" /></a>
            <a href="/dashboard"><input type="button" className="monospace button" value="Details" /></a>
            <a href="/resume"><input type="button" className="monospace button" value="Resume" /></a>
            <div style={{ display: "inline-block", position: "absolute", top: 3, left: "calc(100vw - 60px)" }}>
                <ThemeSwitch />
            </div>

        </div>
    )
}