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
            <label className="field_title monospace"><b>Whoami:</b></label>
            <div style={{ marginBottom: 2 }}></div>
            <label className="monospace">{profile.person_description.whoami}</label>
            <div style={{ marginBottom: 2 }}></div>
            <hr />
            <label className="field_title monospace"><b>Interests:</b></label>
            <div style={{ marginBottom: 2 }}></div>
            <label className="monospace">{profile.person_description.interests.join(", ")}</label>
            <div style={{ marginBottom: 2 }}></div>
            <hr />
            <label className="field_title monospace"><b>MBTI personality:</b></label>
            <div style={{ marginBottom: 2 }}></div>
            <label className="link monospace">
                <a href={profile.person_description.mbti.url}>
                    {profile.person_description.mbti.name}
                </a>
            </label>
            <div style={{ marginBottom: 2 }}></div>
            <hr />
            <label className="field_title monospace"><b>Characteristics:</b></label>
            <div style={{ marginBottom: 2 }}></div>
            <label className="monospace">{profile.person_description.characteristic.join(", ")}</label>
            <div style={{ marginBottom: 2 }}></div>
            <hr />
        </div>
    )
}