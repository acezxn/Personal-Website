import { Helmet } from "react-helmet"
import { Navbar } from "../components/Navbar"
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from "react";
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
    return (
        <>
            <Helmet><title>Want to learn more?</title></Helmet>
            <Navbar />
            <div style={{ width: "100vw", height: "100vh" }}>
                <Canvas camera={{ position: [0, 2, 5] }}>
                    <Hammer />
                </Canvas>
            </div>



            <div style={{ position: "absolute", textAlign: "center", top: 0, width: "100vw" }}>
                <div style={{ height: "calc(30vh - 80px)" }}></div>
                <h2 className="monospace">Want to learn more?</h2>
                <h6 className="monospace" style={{ color: "var(--secondary-color)" }}>Hack your way in and discover pages hidden from sight</h6>
            </div>
        </>
    )
}