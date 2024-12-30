import profile from "./../data/profile.json";
import { FaRegImages } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import theme from "./../data/theme.json"
import "./css/InfoCard.css"

export const ProjectsCard = () => {
    const [color, setColor] = useState(theme.dark.primary_color);
    const scrollableDiv = useRef(null);
    const scrollIndicator = useRef(null);
    const updateIndicator = () => {
        if (!scrollableDiv.current || !scrollIndicator.current) {
            return;
        }
        const isAtBottom = scrollableDiv.current.scrollHeight - scrollableDiv.current.scrollTop === scrollableDiv.current.clientHeight;
        scrollIndicator.current.style.opacity = isAtBottom ? 0 : 0.5;
    };

    const updateIndicatorPosition = () => {
        if (!scrollableDiv.current || !scrollIndicator.current) {
            return;
        }
        const rect = scrollableDiv.current.getBoundingClientRect();
        scrollIndicator.current.style.top = `${rect.top + scrollableDiv.current.clientHeight - 20}px`;
        scrollIndicator.current.style.left = `${rect.left + scrollableDiv.current.clientWidth / 2}px`;
    }

    useEffect(() => {
        const handleStorage = () => {
            setColor(localStorage.getItem("theme") === "light" ? theme.light.primary_color : theme.dark.primary_color);
        }
        window.addEventListener("storage", handleStorage);
    }, []);

    useEffect(() => {
        updateIndicator();
        updateIndicatorPosition();
    }, []);

    useEffect(() => {
        if (!scrollableDiv.current) {
            return;
        }
        scrollableDiv.current.addEventListener("scroll", updateIndicator);
        window.addEventListener("scroll", updateIndicatorPosition);
        const localResizeObserver = new ResizeObserver(updateIndicatorPosition);
        const globalResizeObserver = new ResizeObserver(updateIndicatorPosition)
        localResizeObserver.observe(scrollableDiv.current);
        globalResizeObserver.observe(document.body);
    }, [scrollableDiv.current]);

    const maxPreviewProjects = 4;
    return (
        <div className="info_card" ref={scrollableDiv}>
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
                                <label className="field_title monospace link" style={{ fontSize: 18 }}><a href={project.link}><b>{project.name}</b></a></label>
                                <br />
                                <a href={project.images[0]} target="_blank" rel="noopener noreferrer">
                                    <img src={project.images[0]} alt={project.images[0]} style={{
                                        maxWidth: "100%",
                                        maxHeight: "50vh",
                                        display: "block",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        paddingTop: 10,
                                        paddingBottom: 10
                                    }} />
                                </a>

                                <label className="monospace">{project.description}</label>
                                <br />
                                <hr />
                            </>
                        )
                    } else {
                        return;
                    }
                })
            }
            <FaRegImages style={{ verticalAlign: "middle", margin: 5, marginLeft: 0 }} color={color} size={20} />
            <a className="link monospace" href="/projects" style={{ fontSize: 14 }}>More Photos</a>
            <br />
            <FaGithub style={{ verticalAlign: "middle", margin: 5, marginLeft: 0 }} color={color} size={20} />
            <a className="link monospace" href={`https://${profile.contact.github}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: 14 }}>Visit Github</a>
            <hr />
            <div className="scroll_indicator" ref={scrollIndicator}></div>
        </div>
    )
}