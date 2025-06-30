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
            <label className="field_title monospace"><b>Phone</b></label>
            <label className="field_right monospace link"><a href={`tel:${profile.contact.phone}`} target="_blank" rel="noopener noreferrer">{profile.contact.phone_display}</a></label>
            <div style={{ marginBottom: 2 }}></div>
            <hr />
            <label className="field_title monospace"><b>Email</b></label>
            <label className="field_right monospace link"><a href={`mailto:${profile.contact.email}`} target="_blank" rel="noopener noreferrer">{profile.contact.email}</a></label>
            <div style={{ marginBottom: 2 }}></div>
            <hr />
            <label className="field_title monospace"><b>Github</b></label>
            <label className="field_right monospace link"><a href={`https://${profile.contact.github}`} target="_blank" rel="noopener noreferrer">{profile.contact.github}</a></label>
            <div style={{ marginBottom: 2 }}></div>
            <hr />
            <label className="field_title monospace"><b>LinkedIn</b></label>
            <label className="field_right monospace link"><a href={`https://${profile.contact.linkedin}`} target="_blank" rel="noopener noreferrer">{new URL(`https://${profile.contact.linkedin}`).hostname}</a></label>
            <div style={{ marginBottom: 2 }}></div>
            <hr />
            <label className="field_title monospace"><b>Tryhackme</b></label>
            <label className="field_right monospace link"><a href={`https://${profile.contact.tryhackme}`} target="_blank" rel="noopener noreferrer">{profile.contact.tryhackme}</a></label>
            <div style={{ marginBottom: 2 }}></div>
            <hr />
        </div>
    )
}