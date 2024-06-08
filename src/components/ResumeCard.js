import { FaFile } from "react-icons/fa";
import "./css/InfoCard.css"
import { useEffect, useState } from "react";

export const ResumeCard = () => {
    const [color, setColor] = useState("#8ee729");
    useEffect(() => {
        const handleStorage = () => {
            setColor(localStorage.getItem("theme") === "light" ? "#680bd9" : "#8ee729");
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
                    <FaFile style={{ verticalAlign: "middle", margin: 10, marginLeft: 0 }} color={color} size={40} />
                    <label className="link monospace" style={{ verticalAlign: "middle", display: "inline-block" }}>resume.pdf</label>
                </div>
            </a>
        </div>
    )
}