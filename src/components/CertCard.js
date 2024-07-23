import "./css/InfoCard.css"
import profile from "./../data/profile.json";
import Utils from "../objects/utils";

export const CertCard = () => {
    return (
        <div className="info_card">
            <h6
                className="monospace"
                style={{
                    color: "var(--primary-color)"
                }}>Certifications</h6>
            {
                Object.keys(profile.certifications).map((certification_type) => (
                    <>
                        <label className="field_title monospace"><b>{Utils.capitalize(certification_type) + ":"}</b></label>
                        <br />
                        <br />
                        <table className="monospace">
                            <tr>
                                <th>Name</th>
                                <th>Provider</th>
                                <th>Issued time</th>
                                <th>Expiry time</th>
                            </tr>
                            {
                                profile.certifications[certification_type].map((certification) => (
                                    <tr>

                                        <td>{certification.name}</td>
                                        <td>{certification.provider}</td>
                                        <td>{certification.issued_time}</td>
                                        <td>{certification.expiry_time}</td>
                                    </tr>
                                ))
                            }
                        </table>
                    </>
                ))
            }

        </div>
    )
}