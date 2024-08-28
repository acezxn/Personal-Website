import { useEffect, useRef, useState } from "react";
import Scene from "../objects/drawable_object/scene";
import { Navbar } from "../components/Navbar";
import "./css/Home.css"



async function typeSentence(sentence, element, delay) {
    const letters = sentence.split("");
    let i = 0;
    while (i < letters.length) {
        await waitForMs(delay);
        element.append(letters[i]);
        i++;
    }
    return;
}


function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export const Home = () => {
    const [titleTyping, setTitleTyping] = useState(false);
    const [subtitleTyping, setSubtitleTyping] = useState(false);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    var canvasRef = useRef(null);
    var lastUpdate = performance.now();

    useEffect(() => {
        const typeTitles = async () => {
            if (titleRef.current && !titleTyping) {
                typeSentence("Cheng-En (Daniel) Lee", titleRef.current, 50)
                    .then(() => {
                        setTitleTyping(false);
                    })
                setTitleTyping(true);
            }
            if (subtitleRef.current && !subtitleTyping) {
                await waitForMs(1500);
                typeSentence("Purdue CS '27", subtitleRef.current, 100)
                    .then(() => {
                        setSubtitleTyping(false);
                    })
                setSubtitleTyping(true);
            }
        }

        typeTitles();
    }, []);

    useEffect(() => {
        let canvas = canvasRef.current;
        let ctx = canvas.getContext('2d');
        let requestId;

        const draw = (ctx) => {
            let width = window.innerWidth;
            let height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
            Scene.render(ctx);
        }

        const render = () => {

            // 60 fps limit 
            while (performance.now() - lastUpdate < 1000 / 60);
            lastUpdate = performance.now();

            draw(ctx);
            requestId = window.requestAnimationFrame(render)
        }

        window.addEventListener("mousemove", (e) => {
            Scene.mousePosition = {
                x: e.clientX,
                y: e.clientY
            }
        })
        setInterval(() => {
            Scene.spawnVortexParticle(ctx);
        }, 100);


        render(ctx);
        return () => {
            cancelAnimationFrame(requestId);
        }
    }, []);

    return (
        <>
            <Navbar />
            <canvas ref={canvasRef}></canvas>
            <div style={{ position: "absolute", top: "30vh", width: "100vw" }}>
                <div style={{ textAlign: "center" }}>
                    <div className="typing_container" style={{ height: 100 }}>
                        <h1 className="monospace"><span ref={titleRef} className="sentence"></span></h1>
                        {
                            titleTyping && <span className="input_cursor_h1"></span>
                        }
                    </div>
                    <br />
                    <div className="typing_container" style={{ height: 70 }}>
                        <h2 className="monospace" style={{ color: "var(--secondary-color)" }}><span ref={subtitleRef} className="sentence"></span></h2>
                        {
                            subtitleTyping && <span className="input_cursor_h2"></span>
                        }
                    </div>
                    <br />
                    <a href="/dashboard">
                        <input type="button" className="big_button" value="Find out who I am"></input>
                    </a>
                    <div style={{ height: 200 }}></div>

                </div>
                <div style={{ position: "fixed", top: "calc(100vh - 48px)", display: "flex", justifyContent: "end", width: "calc(100vw - 20px)"}}>
                    <a className="link monospace" href="/learnmore">More information</a>
                </div>
            </div>
        </>
    )
}