import "./css/InfoCard.css"
import profile from "./../data/profile.json";
import { Modal } from "./Modal";
import { IconButton } from "./widgets/IconButton";
import { IoMdExpand } from "react-icons/io";

const CardContent = () => (
    <>
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
    </>
);

export const PersonDescriptionCard = ({isModalOpen, onModalOpen, onModalClose}) => {
    return (
        <div className="info_card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h6
                    className="monospace"
                    style={{
                        color: "var(--primary-color)",
                        margin: 0,
                    }}
                >
                    Person Description
                </h6>
                <IconButton onClick={onModalOpen}>
                    <IoMdExpand size={20} />
                </IconButton>
            </div>
            <CardContent />
            <Modal isOpen={isModalOpen} onClose={onModalClose}>
                <h6
                    className="monospace"
                    style={{
                        color: "var(--primary-color)",
                        margin: 0,
                    }}
                >
                    Person Description
                </h6>
                <CardContent />
            </Modal>
        </div>
    )
}