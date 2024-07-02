import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar"
import { Helmet } from "react-helmet";
import profile from "./../data/profile.json";

export const Secret = () => {
    const [funFact, setFunFact] = useState("");
    const [task, setTask] = useState("");

    useEffect(() => {
        const date = new Date();
        const value = date.getFullYear() + date.getMonth() + date.getDay();
        setFunFact(profile.status.fun_fact[value % profile.status.fun_fact.length]);
        setTask(profile.status.task[value % profile.status.task.length]);
    }, []);

    return (
        <>
            <Helmet><title>^_^</title></Helmet>
            <Navbar />
            {/* <p style={{ textAlign: "center" }}>
                <h1 className="monospace" style={{ color: "var(--primary-color)" }}>Hello ^_^</h1>
                <h3 className="monospace">I guess you found the secret page</h3>
            </p> */}
            <div style={{ margin: 10 }}>
                <h3 className="monospace" style={{ color: "var(--primary-color)" }}>You've found me!</h3>
                <h6 className="monospace">Fun fact</h6>
                <p className="monospace">{funFact}</p>
                <h6 className="monospace">What I am doing now</h6>
                <p className="monospace">{task}</p>
            </div>
        </>
    )
}