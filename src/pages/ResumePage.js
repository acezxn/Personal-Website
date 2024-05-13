import { Navbar } from "../components/Navbar"
import "./css/ResumePage.css"

export const ResumePage = () => {
    return (
        <>
            <Navbar />
            <iframe className="resume_display" src={`${window.location.origin}/assets/pdfs/Daniel_s_Resume_general.pdf`} />
        </>
    )
}