import { Helmet } from "react-helmet"
import { Navbar } from "../components/Navbar"
import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useRef, useState } from "react";
import theme from "./../data/theme.json"

const Hammer = () => {
    const meshRef = useRef();
    let floatingSpeed = 0.02;
    let floatingAmplitude = 0.5;
    let time = 0;

    useFrame(() => {
        time += floatingSpeed;
        const offset = Math.sin(time) * floatingAmplitude;
        meshRef.current.position.y = offset; // Moves the hammer up and down
        meshRef.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={meshRef} position={[0, 1, 0]}>
            <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.5, 0.5, 1.5, 60]} />
                <meshBasicMaterial color={theme.common.torus_color} wireframe />
            </mesh>
            <mesh position={[0, -1.5, 0]}>
                <cylinderGeometry args={[0.1, 0.1, 2, 12]} />
                <meshBasicMaterial color={theme.common.torus_color} wireframe />
            </mesh>
        </mesh>
    );
};

export const LearnmorePage = () => {
    const hintRef = useRef(null);
    const [hintClicked, setHintClicked] = useState(false);
    const [intervalId, setIntervalId] = useState(-1);
    const hintText = "Do you know what the secret code is?";
    const randomChars = "�☰☱﹋〆⑄␑␛ˁª£∆ˆåπ¬˜´ß∫≤▋";

    const hintTextGlitch = () => {
        let newText = ""
        for (let char of hintText) {
            if (char !== " ") {
                let idx = Math.random() * randomChars.length;
                newText = newText + randomChars.charAt(idx);
            }
        }
        hintRef.current.textContent = newText;
    }

    const revealHint = () => {
        clearInterval(intervalId);
        hintRef.current.textContent = hintText;
    }

    useEffect(() => {
        setIntervalId(setInterval(hintTextGlitch, 10));
    }, []);

    return (
        <>
            <Helmet><title>More Information</title></Helmet>
            <Navbar />
            <div style={{ width: "100vw", height: "100vh" }}>
                <Canvas camera={{ position: [0, 2, 5] }}>
                    <Hammer />
                </Canvas>
            </div>

            <div style={{ position: "absolute", textAlign: "center", top: 0, width: "100vw" }}>
                <div style={{ height: "calc(30vh - 80px)" }}></div>
                <h3 className="monospace">Want more information?</h3>
                <h6 className="monospace" style={{ color: "var(--secondary-color)" }}>Hack your way in and discover hidden secrets</h6>
                <div style={{ height: "calc(62vh - 80px)" }}></div>
                <p ref={hintRef} onClick={revealHint}></p>
            </div>
        </>
    )
}