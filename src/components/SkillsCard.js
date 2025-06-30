import "./css/InfoCard.css"
import profile from "./../data/profile.json";
import iconmapping from "./../data/iconmapping.json"

export const SkillsCard = () => {
    return (
        <div className="info_card">
            <h6
                className="monospace"
                style={{
                    color: "var(--primary-color)"
                }}>Skills</h6>
            <label className="field_title monospace"><b>Programming Languages:</b></label>
            <div style={{ marginBottom: 2 }}></div>
            <div style={{ lineHeight: "30px" }}>
                {
                    profile.skills.programming_languages.map((language) => (
                        <div style={{ display: "inline-block" }}>
                            <i className={iconmapping[language]} style={{ fontSize: 25, verticalAlign: "middle" }}></i>
                            <label className="monospace" style={{ paddingLeft: 5, paddingRight: 15 }}>{language}</label>
                        </div>
                    ))
                }
            </div>
            <hr />
            <label className="field_title monospace"><b>Technologies:</b></label>
            <div style={{ marginBottom: 2 }}></div>
            <div style={{ lineHeight: "30px" }}>
                {
                    profile.skills.technologies.map((technology) => (
                        <div style={{ display: "inline-block" }}>
                            <i className={iconmapping[technology]} style={{ fontSize: 25, verticalAlign: "middle" }}></i>
                            <label className="monospace" style={{ paddingLeft: 5, paddingRight: 15 }}>{technology}</label>
                        </div>
                    ))
                }
            </div>
            <hr />
            <label className="field_title monospace"><b>Badges:</b></label>
            <div style={{ marginBottom: 2 }}></div>
            <div style={{ lineHeight: "30px" }}>
                {
                    profile.skills.badges.map((badgeURL) => (
                        <div style={{ display: "inline-block", paddingTop: 10 }}>
                            <a href={badgeURL}><img src={badgeURL} alt={badgeURL} /></a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}