import { Navbar } from "../components/Navbar"
import { Helmet } from 'react-helmet';

export const Secret = () => {
    return (
        <>
            <Helmet><title>^_^</title></Helmet>
            <Navbar />
            <div style={{ height: "calc(40vh - 80px)" }}></div>
            <p style={{ textAlign: "center" }}>
                <h1 className="monospace" style={{ color: "var(--primary-color)" }}>Hello ^_^</h1>
                <h2 className="monospace">I guess you found the secret page</h2>
            </p>
            <div style={{ display: "flex", justifyContent: "center" }} >
                <a className="link monospace" href="/">
                    <h6 style={{ display: "inline-block" }}>Return to home</h6>
                </a>
            </div>
        </>
    )
}