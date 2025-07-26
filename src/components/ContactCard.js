import "./css/InfoCard.css"
import profile from "./../data/profile.json";
import { Modal } from "./Modal";
import { IconButton } from "./widgets/IconButton";
import { IoMdExpand } from "react-icons/io";

const CardContent = () => (
    <>
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
    </>
);

export const ContactCard = ({ isModalOpen, onModalOpen, onModalClose }) => {
    return (
        <div className="info_card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h6
                    className="monospace"
                    style={{
                        color: "var(--primary-color)"
                    }}>Contact</h6>
                <IconButton onClick={onModalOpen}>
                    <IoMdExpand size={20} />
                </IconButton>
            </div>
            <CardContent />
            <Modal isOpen={isModalOpen} onClose={onModalClose}>
                <h6
                    className="monospace"
                    style={{
                        color: "var(--primary-color)"
                    }}>Contact</h6>
                <CardContent />
            </Modal>
        </div>
    )
}