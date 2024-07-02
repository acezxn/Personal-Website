import { Navbar } from "../components/Navbar"
import { Helmet } from 'react-helmet';
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import theme from "./../data/theme.json"

const Icosphere = () => {
    const mesh = useRef();

    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.x += 0.001;
            mesh.current.rotation.y += 0.001;
            mesh.current.rotation.z += 0.001;
        }
    });

    return (
        <mesh ref={mesh}>
            <icosahedronGeometry args={[6, 2]} />
            <meshBasicMaterial color={theme.dark.error_color} wireframe={true} />
        </mesh>
    );
};
export const NotFound = () => {
    return (
        <>
            <Helmet><title>Not found</title></Helmet>
            <Canvas>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={0.5} />
                <Icosphere />
            </Canvas>

            <div style={{ position: "absolute", top: 0, width: "100vw" }}>
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
            </div>
        </>
    )
}

