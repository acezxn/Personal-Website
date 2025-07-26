import { PersonDescriptionCard } from "../components/PersonDescriptionCard"
import { ExperiencesCard } from "../components/ExperiencesCard"
import { BasicInfoCard } from "../components/BasicInfoCard"
import { ProjectsCard } from "../components/ProjectsCard"
import { ContactCard } from "../components/ContactCard"
import { GradesCard } from "../components/GradesCard"
import { ResumeCard } from "../components/ResumeCard"
import { SkillsCard } from "../components/SkillsCard"
import { Navbar } from "../components/Navbar"
import { useEffect, useState } from "react"
import { Helmet } from 'react-helmet';
import "./css/Dashboard.css"
import { CertCard } from "../components/CertCard"

export const Dashboard = () => {
    // Use separate modal state for each card
    const [basicInfoModal, setBasicInfoModal] = useState(false);
    const [personDescModal, setPersonDescModal] = useState(false);
    const [skillsModal, setSkillsModal] = useState(false);
    const [certModal, setCertModal] = useState(false);
    const [experiencesModal, setExperiencesModal] = useState(false);
    const [projectsModal, setProjectsModal] = useState(false);
    const [gradesModal, setGradesModal] = useState(false);
    const [contactModal, setContactModal] = useState(false);

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const updateWidth = () => {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    return (
        <>
            <Helmet><title>Details</title></Helmet>
            <div className="fiber_bg">
                <Navbar />
                <div className="dashboard">
                    {
                        width > 1200 ? (
                            <>
                                <div style={{ minWidth: "calc(100vw / 3 - 20)" }}>
                                    <BasicInfoCard isModalOpen={basicInfoModal} onModalOpen={() => setBasicInfoModal(true)} onModalClose={() => setBasicInfoModal(false)} />
                                    <PersonDescriptionCard isModalOpen={personDescModal} onModalOpen={() => setPersonDescModal(true)} onModalClose={() => setPersonDescModal(false)} />
                                    <ResumeCard />
                                </div>
                                <div style={{ minWidth: "calc(100vw / 3 - 20)" }}>
                                    <SkillsCard isModalOpen={skillsModal} onModalOpen={() => setSkillsModal(true)} onModalClose={() => setSkillsModal(false)} />
                                    <CertCard isModalOpen={certModal} onModalOpen={() => setCertModal(true)} onModalClose={() => setCertModal(false)} />
                                    <ExperiencesCard isModalOpen={experiencesModal} onModalOpen={() => setExperiencesModal(true)} onModalClose={() => setExperiencesModal(false)} />
                                </div>
                                <div style={{ minWidth: "calc(100vw / 3 - 20)" }}>
                                    <ProjectsCard isModalOpen={projectsModal} onModalOpen={() => setProjectsModal(true)} onModalClose={() => setProjectsModal(false)} />
                                    <GradesCard isModalOpen={gradesModal} onModalOpen={() => setGradesModal(true)} onModalClose={() => setGradesModal(false)} />
                                    <ContactCard isModalOpen={contactModal} onModalOpen={() => setContactModal(true)} onModalClose={() => setContactModal(false)} />
                                </div>
                            </>
                        ) : (
                            <>
                                {
                                    width > 800 ? (
                                        <>
                                            <div style={{ minWidth: "calc(100vw / 2 - 20)" }}>
                                                <BasicInfoCard isModalOpen={basicInfoModal} onModalOpen={() => setBasicInfoModal(true)} onModalClose={() => setBasicInfoModal(false)} />
                                                <PersonDescriptionCard isModalOpen={personDescModal} onModalOpen={() => setPersonDescModal(true)} onModalClose={() => setPersonDescModal(false)} />
                                                <ContactCard isModalOpen={contactModal} onModalOpen={() => setContactModal(true)} onModalClose={() => setContactModal(false)} />
                                                <ResumeCard />
                                                <GradesCard isModalOpen={gradesModal} onModalOpen={() => setGradesModal(true)} onModalClose={() => setGradesModal(false)} />
                                            </div>
                                            <div style={{ minWidth: "calc(100vw / 2 - 20)" }}>
                                                <SkillsCard isModalOpen={skillsModal} onModalOpen={() => setSkillsModal(true)} onModalClose={() => setSkillsModal(false)} />
                                                <CertCard isModalOpen={certModal} onModalOpen={() => setCertModal(true)} onModalClose={() => setCertModal(false)} />
                                                <ExperiencesCard isModalOpen={experiencesModal} onModalOpen={() => setExperiencesModal(true)} onModalClose={() => setExperiencesModal(false)} />
                                                <ProjectsCard isModalOpen={projectsModal} onModalOpen={() => setProjectsModal(true)} onModalClose={() => setProjectsModal(false)} />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div style={{ minWidth: "calc(100vw - 20)" }}>
                                                <BasicInfoCard isModalOpen={basicInfoModal} onModalOpen={() => setBasicInfoModal(true)} onModalClose={() => setBasicInfoModal(false)} />
                                                <PersonDescriptionCard isModalOpen={personDescModal} onModalOpen={() => setPersonDescModal(true)} onModalClose={() => setPersonDescModal(false)} />
                                                <ContactCard isModalOpen={contactModal} onModalOpen={() => setContactModal(true)} onModalClose={() => setContactModal(false)} />
                                                <SkillsCard isModalOpen={skillsModal} onModalOpen={() => setSkillsModal(true)} onModalClose={() => setSkillsModal(false)} />
                                                <CertCard isModalOpen={certModal} onModalOpen={() => setCertModal(true)} onModalClose={() => setCertModal(false)} />
                                                <ProjectsCard isModalOpen={projectsModal} onModalOpen={() => setProjectsModal(true)} onModalClose={() => setProjectsModal(false)} />
                                                <ExperiencesCard isModalOpen={experiencesModal} onModalOpen={() => setExperiencesModal(true)} onModalClose={() => setExperiencesModal(false)} />
                                                <GradesCard isModalOpen={gradesModal} onModalOpen={() => setGradesModal(true)} onModalClose={() => setGradesModal(false)} />
                                                <ResumeCard />
                                            </div>
                                        </>
                                    )
                                }
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}