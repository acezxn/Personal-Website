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

export const Dashboard = () => {
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
                                    <BasicInfoCard />
                                    <PersonDescriptionCard />
                                </div>
                                <div style={{ minWidth: "calc(100vw / 3 - 20)" }}>
                                    <SkillsCard />
                                    <ExperiencesCard />
                                    <ResumeCard />
                                </div>
                                <div style={{ minWidth: "calc(100vw / 3 - 20)" }}>
                                    <ProjectsCard />
                                    <GradesCard />
                                    <ContactCard />
                                </div>
                            </>
                        ) : (
                            <>
                                {
                                    width > 800 ? (
                                        <>
                                            <div style={{ minWidth: "calc(100vw / 2 - 20)" }}>
                                                <BasicInfoCard />
                                                <PersonDescriptionCard />
                                                <ContactCard />
                                                <ResumeCard />
                                            </div>
                                            <div style={{ minWidth: "calc(100vw / 2 - 20)" }}>
                                                <SkillsCard />
                                                <ExperiencesCard />
                                                <ProjectsCard />
                                                <GradesCard />
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div style={{ minWidth: "calc(100vw - 20)" }}>
                                                <BasicInfoCard />
                                                <PersonDescriptionCard />
                                                <ContactCard />
                                                <SkillsCard />
                                                <ProjectsCard />
                                                <ExperiencesCard />
                                                <GradesCard />
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