import { Navbar } from "../components/Navbar"
import profile from "./../data/profile.json";

export const ProjectsPage = () => {
    return (
        <>
            <Navbar />
            <div style={{ margin: 10 }}>
                <h3
                    className="monospace"
                    style={{
                        display: "inline-block",
                        color: "var(--primary-color)"
                    }}>Projects Gallery</h3>
                <h6 className="monospace link" style={{ display: "inline-block", paddingLeft: 40 }}>
                    <a href={`https://${profile.contact.github}`}>[From Github]</a>
                </h6>
                <hr />
                {
                    profile.projects.map((project, index) => (
                        <>
                            <h6 className="monospace">{project.name}</h6>
                            <div style={{ padding: 10, overflow: "scroll", width: "calc(100vw - 40px)", maxHeight: "calc(30vh + 150px)" }}>
                                {
                                    project.images.map((image, idx) => (
                                        <a href={image}>
                                            <img alt="project" src={image} key={idx} style={{ height: "30vh", minHeight: 200, padding: 5, paddingLeft: 0 }} />
                                        </a>
                                    ))
                                }
                            </div>
                            <br />
                            <label className="field monospace">{project.description}</label>
                            <br />
                            <br />
                            <label className="field_left monospace link"><a href={project.link}>[View on Github]</a></label>
                            <hr />
                        </>
                    ))
                }
            </div>
        </>
    )
}