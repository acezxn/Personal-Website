import { ThemeSwitch } from "./ThemeSwitch"
import "./css/Navbar.css"

export const Navbar = () => {
    return (
        <div className="navbar">

            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <div>
                    <a href="/"><input type="button" className="monospace button" value="Home" /></a>
                    <a href="/dashboard"><input type="button" className="monospace button" value="Details" /></a>
                    <a href="/resume"><input type="button" className="monospace button" value="Resume" /></a>
                </div>
                <div style={{ marginRight: 6}}>
                    <ThemeSwitch />
                </div>
            </div>
        </div>
    )
}