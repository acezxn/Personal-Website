import { BasicInfoCard } from "../components/BasicInfoCard"
import { ExperiencesCard } from "../components/ExperiencesCard"
import { GradesCard } from "../components/GradesCard"
import { Navbar } from "../components/Navbar"
import { PersonDescriptionCard } from "../components/PersonDescriptionCard"
import { ResumeCard } from "../components/ResumeCard"
import { SkillsCard } from "../components/SkillsCard"

export const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div style={{ marginTop: 10, display: "grid", width: "100vw", height: "100vh", gap: 10, gridTemplateColumns: "auto auto auto" }}>
                <div style={{ minWidth: "30vw" }}>
                    <BasicInfoCard />
                    <ExperiencesCard />
                </div>
                <div style={{ minWidth: "30vw" }}>
                    <PersonDescriptionCard />
                    <SkillsCard />
                    <ResumeCard />
                </div>
                <div style={{ minWidth: "30vw" }}>
                    <GradesCard />
                </div>
            </div>
        </>
    )
}