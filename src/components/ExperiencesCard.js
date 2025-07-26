import "./css/InfoCard.css"
import profile from "./../data/profile.json";
import { Modal } from "./Modal";
import { IconButton } from "./widgets/IconButton";
import { IoMdExpand } from "react-icons/io";

const CardContent = () => (
    <>
        {
            profile.experiences.map((experience) => (
                <>
                    <label className="field_title monospace"><b>Name:</b></label>
                    <div style={{ marginBottom: 2 }}></div>
                    <label className="monospace">{experience.name}</label>
                    <div style={{ marginBottom: 2 }}></div>
                    <div style={{ marginBottom: 2 }}></div>
                    <label className="field_title monospace"><b>Role:</b></label>
                    <div style={{ marginBottom: 2 }}></div>
                    <label className="monospace">{experience.role}</label>
                    <div style={{ marginBottom: 2 }}></div>
                    <div style={{ marginBottom: 2 }}></div>
                    <label className="field_title monospace"><b>Description:</b></label>
                    <div style={{ marginBottom: 2 }}></div>
                    <label className="monospace">{experience.description}</label>
                    {
                        experience.image && (
                            <div style={{ overflow: "hidden", width: "100%", maxHeight: 250 }}>
                                <a href={experience.image} target="_blank" rel="noopener noreferrer">
                                    <img src={experience.image} alt={experience.image} style={{
                                        maxWidth: "100%",
                                        maxHeight: "50vh",
                                        display: "block",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        paddingTop: 10,
                                        paddingBottom: 10
                                    }} />
                                </a>
                            </div>
                        )
                    }
                    {
                        experience.links && (
                            <>
                                <div style={{ marginBottom: 2 }}></div>
                                <label className="monospace"><b>Visit the following for more information:</b></label>
                                <div style={{ marginBottom: 2 }}></div>
                                {
                                    experience.links.map((link) => (
                                        <>
                                            <label className="monospace link"><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></label>
                                            <div style={{ marginBottom: 2 }}></div>
                                        </>
                                    ))
                                }
                            </>
                        )
                    }
                    <hr />
                </>
            ))
        }
    </>
);

export const ExperiencesCard = ({ isModalOpen, onModalOpen, onModalClose }) => {
    return (
        <div className="info_card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h6
                    className="monospace"
                    style={{
                        color: "var(--primary-color)"
                    }}>Experiences</h6>
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
                    }}>Experiences</h6>
                <CardContent />
            </Modal>
        </div>
    )
}