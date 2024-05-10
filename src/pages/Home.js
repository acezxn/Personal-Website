import { useEffect, useRef } from "react";
import "./css/Home.css"
import Scene from "../objects/drawable_object/Scene";

export const Home = () => {
    var canvasRef = useRef(null);
    document.documentElement.setAttribute("data-theme", "light");

    const getPixelRatio = context => {
        var backingStore =
            context.backingStorePixelRatio ||
            context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio ||
            1;

        return (window.devicePixelRatio || 1) / backingStore;
    };

    

    useEffect(() => {
        let canvas = canvasRef.current;
        let ctx = canvas.getContext('2d');
        let requestId;
        
        const render = () => {
            let ratio = getPixelRatio(ctx);
            let width = getComputedStyle(canvas)
                .getPropertyValue('width')
                .slice(0, -2);
            let height = getComputedStyle(canvas)
                .getPropertyValue('height')
                .slice(0, -2);
            canvas.width = width * ratio;
            canvas.height = height * ratio;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;

            Scene.render(ctx);
    
            requestId = requestAnimationFrame(render);
        };


        render(ctx);
        return () => {
            cancelAnimationFrame(requestId);
        }
    });

    return (
        <>
            <canvas ref={canvasRef}></canvas>
            <div style={{ position: "absolute", top: "30vh", width: "100vw" }}>
                <p style={{ textAlign: "center" }}>
                    <h2>The profile of a </h2>
                    <br />
                    <h1>level skip challenger</h1>
                    <br />
                    <input type="button" className="big_button" value="Find out who I am"></input>
                </p>
            </div>
        </>
    )
}