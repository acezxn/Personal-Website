import { Helmet } from "react-helmet"
import { Navbar } from "../components/Navbar"

export const LearnmorePage = () => {
    return (
        <>
            <Helmet><title>Want to learn more?</title></Helmet>
            <Navbar />
            
            <div style={{ textAlign: "center", marginTop: 100 }}>
                <h2 className="monospace">Want to learn some more?</h2>
                <h6 className="monospace" style={{ color: "var(--secondary-color)" }}>Hack your way in and discover pages hidden from sight</h6>
            </div>
        </>
    )
}