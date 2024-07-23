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
                        <br />
                        <hr />
                    </>
                ))
            }
        </div>
    )
}