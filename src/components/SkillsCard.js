import "./css/InfoCard.css"
import profile from "./../data/profile.json";

export const SkillsCard = () => {
    return (
        <div className="info_card">
            <h6
                className="monospace"
                style={{
                    color: "var(--primary-color)"
                }}>Skills</h6>
            <label className="field_left monospace"><b>Programming Languages:</b></label>
            <br />
            <label className="monospace">{profile.skills.programming_languages.join(", ")}</label>
            <br />
            <hr />
            <label className="field_left monospace"><b>Technologies:</b></label>
            <br />
            <label className="monospace">{profile.skills.technologies.join(", ")}</label>
            <br />
            <hr />
        </div>
    )
}