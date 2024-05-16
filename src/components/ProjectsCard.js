import "./css/InfoCard.css"
import profile from "./../data/profile.json";
import { FaRegImages } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";


export const ProjectsCard = () => {
    const [color, setColor] = useState("#8ee729");
    useEffect(() => {
        const handleStorage = () => {
            setColor(localStorage.getItem("theme") === "light" ? "#680bd9" : "#8ee729");
        }
        window.addEventListener("storage", handleStorage);
    }, []);
    const maxPreviewProjects = 4;
    return (
        <div className="info_card">
            <h6
                className="monospace"
                style={{
                    color: "var(--primary-color)"
                }}>Projects</h6>
            {
                profile.projects.map((project, index) => {
                    if (index < maxPreviewProjects) {
                        return (
                            <>
                                <label className="field_left monospace link"><a href={project.link}><b>{project.name}</b></a></label>
                                <br />
                                <img src={project.images[0]} style={{ width: "100%", paddingTop: 5 }} />
                                <label className="field monospace">{project.description}</label>
                                <br />
                                <hr />
                            </>
                        )
                    } else {
                        return (<></>)
                    }
                })
            }
            <FaRegImages style={{ verticalAlign: "middle", margin: 10, marginLeft: 0 }} color={color} size={20} />
            <a className="link monospace" href="/projects" style={{ fontSize: 20 }}>More Photos</a>
            <br />
            <FaGithub style={{ verticalAlign: "middle", margin: 10, marginLeft: 0 }} color={color} size={20} />
            <a className="link monospace" href="/projects" style={{ fontSize: 20 }}>Visit Github</a>
            <hr />
        </div>
    )
}