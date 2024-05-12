import "./css/InfoCard.css"
import profile from "./../data/profile.json";

export const ContactCard = () => {
    return (
        <div className="info_card">
            <h6
                className="monospace"
                style={{
                    color: "var(--primary-color)"
                }}>Contact</h6>
            <label className="field_left monospace"><b>Phone</b></label>
            <label className="field_right monospace">{profile.contact.phone}</label>
            <br />
            <hr />
            <label className="field_left monospace"><b>Email</b></label>
            <label className="field_right monospace">{profile.contact.email}</label>
            <br />
            <hr />
            <label className="field_left monospace"><b>Github</b></label>
            <label className="field_right monospace">{profile.contact.github}</label>
            <br />
            <hr />
        </div>
    )
}