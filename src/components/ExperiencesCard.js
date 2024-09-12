import "./css/InfoCard.css"
import profile from "./../data/profile.json";

export const ExperiencesCard = () => {
    return (
        <div className="info_card">
            <h6
                className="monospace"
                style={{
                    color: "var(--primary-color)"
                }}>Experiences</h6>
            {
                profile.experiences.map((experience) => (
                    <>
                        <label className="field_title monospace"><b>Name:</b></label>
                        <br />
                        <label className="monospace">{experience.name}</label>
                        <br />
                        <br />
                        <label className="field_title monospace"><b>Role:</b></label>
                        <br />
                        <label className="monospace">{experience.role}</label>
                        <br />
                        <br />
                        <label className="field_title monospace"><b>Description:</b></label>
                        <br />
                        <label className="monospace">{experience.description}</label>
                        {
                            experience.image && (
                                <div style={{ overflow: "hidden", width: "100%", maxHeight: 250 }}>
                                    <img src={experience.image} alt={experience.image} style={{
                                        maxWidth: "100%",
                                        maxHeight: "50vh",
                                        display: "block",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        paddingTop: 10,
                                        paddingBottom: 10
                                    }} />
                                </div>
                            )
                        }
                        <hr />
                    </>
                ))
            }
        </div>
    )
}