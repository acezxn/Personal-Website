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
                        <label className="field_left monospace"><b>Name:</b></label>
                        <br />
                        <label className="field monospace">{experience.name}</label>
                        <br />
                        <label className="field_left monospace"><b>Role:</b></label>
                        <br />
                        <label className="field monospace">{experience.role}</label>
                        <br />
                        <label className="field_left monospace"><b>Description:</b></label>
                        <br />
                        <label className="field monospace">{experience.description}</label>
                        <br />
                        <hr />
                    </>
                ))
            }
        </div>
    )
}