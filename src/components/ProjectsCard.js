import profile from "./../data/profile.json";
import { FaRegImages } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";
import theme from "./../data/theme.json"
import "./css/InfoCard.css"



export const ProjectsCard = () => {
    const [color, setColor] = useState(theme.dark.primary_color);
    useEffect(() => {
        const handleStorage = () => {
            setColor(localStorage.getItem("theme") === "light" ? theme.light.primary_color : theme.dark.primary_color);
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
                }}>Featured Projects</h6>
            {
                profile.projects.map((project, index) => {
                    if (index < maxPreviewProjects) {
                        return (
                            <>
                                <label className="field_left monospace link" style={{ fontSize: 18 }}><a href={project.link}><b>{project.name}</b></a></label>
                                <br />
                                <img src={project.images[0]} alt={project.images[0]} style={{ width: "100%", paddingTop: 5 }} />
                                <label className="monospace">{project.description}</label>
                                <br />
                                <hr />
                            </>
                        )
                    } else {
                        return (<></>)
                    }
                })
            }
            <FaRegImages style={{ verticalAlign: "middle", margin: 5, marginLeft: 0 }} color={color} size={20} />
            <a className="link monospace" href="/projects" style={{ fontSize: 14 }}>More Photos</a>
            <br />
            <FaGithub style={{ verticalAlign: "middle", margin: 5, marginLeft: 0 }} color={color} size={20} />
            <a className="link monospace" href={`https://${profile.contact.github}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: 14 }}>Visit Github</a>
            <hr />
        </div>
    )
}