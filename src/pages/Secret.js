import { useEffect, useState, useRef } from "react";
import { Navbar } from "../components/Navbar"
import { Helmet } from "react-helmet";
import { Canvas, useFrame } from '@react-three/fiber';
import profile from "./../data/profile.json";
import theme from "./../data/theme.json"

const SpinningTorus = () => {
    const mesh = useRef();

    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.x = 0.5;
            mesh.current.rotation.y = 1;
            mesh.current.rotation.z += 0.001;
        }
    });

    return (
        <mesh ref={mesh}>
            <torusGeometry args={[10, 3, 32, 256]} />
            <meshBasicMaterial color={theme.common.torus_color} wireframe={true} />
        </mesh>
    );
};

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
            <div style={{ width: "100vw", height: "100vh", position: "absolute", top: 0, zIndex: 0 }}>
                <Canvas>
                    <SpinningTorus />
                </Canvas>
            </div>
            <div style={{ position: "absolute", top: "30vh", width: "100vw", margin: 10 }}>
                <h3 className="monospace" style={{ color: "var(--primary-color)" }}>You've found me!</h3>
                <h6 className="monospace">Fun fact</h6>
                <p className="monospace">{funFact}</p>
                <h6 className="monospace">What I am doing now</h6>
                <p className="monospace">{task}</p>
            </div>

        </>
    )
}