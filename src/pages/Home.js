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

    useEffect(() => {
        typeTitles();
    }, []);

    useEffect(() => {
        let canvas = canvasRef.current;
        let ctx = canvas.getContext('2d');
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
        let requestId;

        const draw = (ctx) => {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
            Scene.render(ctx);
        }

        const render = () => {
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
                        <h1 style={{ fontFamily: "Fira Mono" }}><span ref={titleRef} className="sentence"></span></h1>
                        {
                            titleTyping && <span className="input_cursor_h1"></span>
                        }
                    </div>
                    <br />
                    <div className="typing_container" style={{ height: 70 }}>
                        <h2 style={{ fontFamily: "Fira Mono", color: "var(--secondary-color)" }}><span ref={subtitleRef} className="sentence"></span></h2>
                        {
                            subtitleTyping && <span className="input_cursor_h2"></span>
                        }
                    </div>
                    <br />
                    <a href="/dashboard">
                        <input type="button" className="big_button" value="Find out who I am"></input>
                    </a>
                </div>
            </div>
        </>
    )
}