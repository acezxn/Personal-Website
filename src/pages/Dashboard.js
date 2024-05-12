import { BasicInfoCard } from "../components/BasicInfoCard"
import { ContactCard } from "../components/ContactCard"
import { ExperiencesCard } from "../components/ExperiencesCard"
import { GradesCard } from "../components/GradesCard"
import { Navbar } from "../components/Navbar"
import { PersonDescriptionCard } from "../components/PersonDescriptionCard"
import { ProjectsCard } from "../components/ProjectsCard"
import { ResumeCard } from "../components/ResumeCard"
import { SkillsCard } from "../components/SkillsCard"

export const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div style={{ margin: 10, display: "grid", width: "calc(100vw - 20px)", height: "100vh", gap: 10, gridTemplateColumns: "auto auto auto" }}>
                <div style={{ minWidth: "30vw" }}>
                    <BasicInfoCard />
                    <PersonDescriptionCard />
                </div>
                <div style={{ minWidth: "30vw" }}>
                    <SkillsCard />
                    <ExperiencesCard />
                    <ResumeCard />
                </div>
                <div style={{ minWidth: "30vw" }}>
                    <ProjectsCard />
                    <GradesCard />
                    <ContactCard />
                </div>
            </div>
        </>
    )
}