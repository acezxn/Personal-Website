import "./css/InfoCard.css"
import profile from "./../data/profile.json";

export const ProjectsCard = () => {
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
                            <img src={project.images[0]} style={{width: "100%", paddingTop: 5}} />
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
            <button className="link monospace" style={{backgroundColor: "transparent", border: "none", textAlign: "center", fontSize: 20}}>+ More</button>
        </div>
    )
}