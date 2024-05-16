import { Navbar } from "../components/Navbar"

export const NotFound = () => {
    return (
        <>
            <Navbar />
            <div style={{ height: "calc(40vh - 80px)" }}></div>
            <p style={{ textAlign: "center" }}>
                <h1 className="monospace" style={{ color: "var(--error-color)" }}>404</h1>
                <h2 className="monospace">Page not found</h2>
            </p>
            <div style={{ display: "flex", justifyContent: "center" }} >
                <a className="link monospace" href="/">
                    <h6 style={{ display: "inline-block" }}>Return to home</h6>
                </a>
            </div>
        </>
    )
}