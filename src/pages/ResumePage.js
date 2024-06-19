import { Navbar } from "../components/Navbar"
import { Helmet } from 'react-helmet';

import profile from "./../data/profile.json";
import "./css/ResumePage.css"

export const ResumePage = () => {
    return (
        <>
            <Helmet><title>Resume</title></Helmet>
            <Navbar />
            <iframe title="resume" className="resume_display" src={profile.resume.link} width="640" height="480" allow="autoplay" />
        </>
    )
}