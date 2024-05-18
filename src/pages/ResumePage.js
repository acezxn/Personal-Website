import { Navbar } from "../components/Navbar"
import "./css/ResumePage.css"

export const ResumePage = () => {
    return (
        <>
            <Navbar />
            <iframe title="resume" className="resume_display" src="https://drive.google.com/file/d/1gfCVZPKeDIB_2XaX7DDHYFhtxEtNqwKc/preview" width="640" height="480" allow="autoplay" />
        </>
    )
}