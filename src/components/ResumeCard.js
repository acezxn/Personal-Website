import { FaFile } from "react-icons/fa";
import { useEffect, useState } from "react";
import theme from "./../data/theme.json"
import "./css/InfoCard.css"


export const ResumeCard = () => {
    const [color, setColor] = useState(theme.dark.primary_color);
    useEffect(() => {
        const handleStorage = () => {
            setColor(localStorage.getItem("theme") === "light" ? theme.light.primary_color : theme.dark.primary_color);
        }
        window.addEventListener("storage", handleStorage);
        handleStorage();
    }, []);
    return (
        <div className="info_card">
            <h6
                className="monospace"
                style={{
                    color: "var(--primary-color)"
                }}>Resume</h6>
            <label className="field_left monospace">1 document found</label>
            <br />
            <a href="/resume">
                <div>
                    <FaFile style={{ verticalAlign: "middle", margin: 10, marginLeft: 0 }} color={color} size={35} />
                    <label className="link monospace" style={{ verticalAlign: "middle", display: "inline-block" }}>resume.pdf</label>
                </div>
            </a>
        </div>
    )
}