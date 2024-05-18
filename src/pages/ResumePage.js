import { Navbar } from "../components/Navbar"
import profile from "./../data/profile.json";
import "./css/ResumePage.css"

export const ResumePage = () => {
    return (
        <>
            <Navbar />
            <iframe title="resume" className="resume_display" src={profile.resume.link} width="640" height="480" allow="autoplay" />
        </>
    )
}