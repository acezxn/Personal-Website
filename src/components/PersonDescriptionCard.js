import "./css/InfoCard.css"
import profile from "./../data/profile.json";

export const PersonDescriptionCard = () => {
    return (
        <div className="info_card">
            <h6
                className="monospace"
                style={{
                    color: "var(--primary-color)"
                }}>Person Description</h6>
            <label className="field_left monospace"><b>Whoami:</b></label>
            <br />
            <label className="monospace">{profile.person_description.whoami}</label>
            <br />
            <hr />
            <label className="field_left monospace"><b>Interests:</b></label>
            <br />
            <label className="monospace">{profile.person_description.interests.join(", ")}</label>
            <br />
            <hr />
            <label className="field_left monospace"><b>MBTI personality:</b></label>
            <br />
            <label className="link monospace">
                <a href={profile.person_description.mbti.url}>
                    {profile.person_description.mbti.name}
                </a>
            </label>
            <br />
            <hr />
            <label className="field_left monospace"><b>Characteristics:</b></label>
            <br />
            <label className="monospace">{profile.person_description.characteristic.join(", ")}</label>
            <br />
            <hr />
        </div>
    )
}